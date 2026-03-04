import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '../../../lib/mongodb';

export async function POST(req: NextRequest) {
  const data = await req.json();
  const {
    title,
    slug,
    excerpt,
    bodyMarkdown,
    tags,
    seoDescription,
    status,
    publishAt,
    createdBy,
    imageUrl
  } = data;

  if (!title || !slug || !bodyMarkdown || !tags || !seoDescription || !status || !publishAt || !createdBy || !imageUrl) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  try {
    const client = await clientPromise;
    const db = client.db('blog');
    const collection = db.collection('posts');

    // Check for duplicate slug
    const existing = await collection.findOne({ slug });
    if (existing) {
      return NextResponse.json({ error: 'Slug already exists' }, { status: 409 });
    }

    const post = {
      title,
      slug,
      excerpt,
      bodyMarkdown,
      tags,
      seoDescription,
      status,
      publishAt: new Date(publishAt),
      createdBy,
      createdAt: new Date(),
      imageUrl
    };

    const result = await collection.insertOne(post);
    return NextResponse.json({ id: result.insertedId, url: `/blog/${slug}` });
  } catch (error) {
    const err = error as Error;
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
