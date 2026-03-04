import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '../../../../lib/mongodb';

export async function GET(req: NextRequest, { params }: { params: { slug: string } }) {
  const { slug } = params;
  try {
    const client = await clientPromise;
    const db = client.db('blog');
    const collection = db.collection('posts');

    // Find post by slug
    const post = await collection.findOne({ slug, status: 'PUBLISHED' });
    if (!post) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }
    return NextResponse.json(post);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
