import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '../../../lib/mongodb';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('blog');
    const collection = db.collection('posts');

    // Find all published posts
    const posts = await collection.find({ status: 'PUBLISHED' }).sort({ publishAt: -1 }).toArray();
    return NextResponse.json(posts);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
