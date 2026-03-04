import { NextRequest, NextResponse } from 'next/server';
import openai from '../../../lib/openai';

export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
  try {
    const { topic } = await req.json();
    if (!topic || typeof topic !== 'string') {
      return NextResponse.json({ error: 'Missing or invalid topic' }, { status: 400 });
    }


    const completion = await openai.chat.completions.create({
      model: process.env.AZURE_OPENAI_DEPLOYMENT || 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: `You are a professional blog writer for a technology and AI company. Write a blog post about: "${topic}". Return your response as valid JSON with these fields: title (string), slug (string, lowercase, hyphens, no spaces), excerpt (string, 1-2 sentences), bodyMarkdown (string, full blog post in Markdown, at least 500 words), tags (array of strings, 3-5 tags), seoDescription (string, max 160 characters). Do NOT wrap the JSON in markdown code fences.`,
        },
        {
          role: 'user',
          content: `Write a new blog post about: ${topic}`,
        },
      ],
      temperature: 0.8,
    });

    let content = completion.choices[0]?.message?.content;
    if (!content) {
      return NextResponse.json({ error: 'No content generated' }, { status: 500 });
    }

    // Remove markdown code fences if present
    content = content.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();

    let postData;
    try {
      postData = JSON.parse(content);
    } catch {
      return NextResponse.json({ error: 'Failed to parse LLM response', raw: content }, { status: 500 });
    }

    // Add default fields
    postData.status = 'DRAFT';
    postData.createdBy = 'admin-ai';
    postData.publishAt = new Date().toISOString();

    return NextResponse.json(postData);
  } catch (error) {
    const err = error as Error;
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
