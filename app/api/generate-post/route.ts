import { NextRequest, NextResponse } from 'next/server';
import openai from '../../../lib/openai';
import clientPromise from '../../../lib/mongodb';

const CRON_SECRET = process.env.CRON_SECRET;

export async function GET(req: NextRequest) {
  // Protect the endpoint: only allow Vercel Cron or requests with the secret
  const authHeader = req.headers.get('authorization');
  if (CRON_SECRET && authHeader !== `Bearer ${CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    // Step 1: Ask the LLM to generate a blog post idea + full content
    const completion = await openai.chat.completions.create({
      model: process.env.AZURE_OPENAI_DEPLOYMENT || 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: `You are a professional blog writer for a technology and AI company.
Write a blog post that is informative, engaging, and SEO-optimized.
Return your response as valid JSON with these fields:
- title (string)
- slug (string, lowercase, hyphens, no spaces)
- excerpt (string, 1-2 sentences)
- bodyMarkdown (string, full blog post in Markdown, at least 500 words)
- tags (array of strings, 3-5 tags)
- seoDescription (string, max 160 characters)
Do NOT wrap the JSON in markdown code fences.`,
        },
        {
          role: 'user',
          content: 'Write a new blog post about a trending topic in AI, automation, or business technology. Choose a unique angle that would interest business leaders and tech professionals.',
        },
      ],
      temperature: 0.8,
    });

    const content = completion.choices[0]?.message?.content;

    if (!content) {
      return NextResponse.json({ error: 'No content generated' }, { status: 500 });
    }

    // Step 2: Parse the LLM response
    let postData;
    try {
      // Strip markdown code fences if present
      const cleaned = content.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
      postData = JSON.parse(cleaned);
    } catch {
      return NextResponse.json({ error: 'Failed to parse LLM response', raw: content }, { status: 500 });
    }

    const { title, slug, excerpt, bodyMarkdown, tags, seoDescription } = postData;

    if (!title || !slug || !bodyMarkdown || !tags || !seoDescription) {
      return NextResponse.json({ error: 'LLM response missing required fields', raw: postData }, { status: 500 });
    }

    // Step 3: Save to MongoDB
    const client = await clientPromise;
    const db = client.db('blog');
    const collection = db.collection('posts');

    // Prevent duplicate slugs
    const existing = await collection.findOne({ slug });
    if (existing) {
      return NextResponse.json({ error: 'Slug already exists', slug }, { status: 409 });
    }

    const post = {
      title,
      slug,
      excerpt: excerpt || '',
      bodyMarkdown,
      tags,
      seoDescription,
      status: 'DRAFT', // Set to DRAFT for manual approval; change to PUBLISHED for auto-publish
      publishAt: new Date(),
      createdBy: 'ai-scheduler',
      createdAt: new Date(),
      imageUrl: '',
    };

    const result = await collection.insertOne(post);

    return NextResponse.json({
      message: 'Post generated and saved',
      id: result.insertedId,
      title,
      slug,
      status: post.status,
    });
  } catch (error) {
    const err = error as Error;
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
