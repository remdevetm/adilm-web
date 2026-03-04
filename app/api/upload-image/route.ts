import { NextRequest, NextResponse } from 'next/server';
import { containerClient } from '../../../lib/azureBlob';

export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
  try {
    const contentType = req.headers.get('content-type') || '';

    // Ensure the request is multipart/form-data
    if (!contentType.includes('multipart/form-data')) {
      return NextResponse.json(
        { error: 'Content-Type must be multipart/form-data' },
        { status: 400 }
      );
    }

    const formData = await req.formData();

    // Debug: log all keys in the form data
    const keys: string[] = [];
    formData.forEach((_, key) => keys.push(key));

    const file = formData.get('file') as File | null;

    if (!file || typeof file === 'string' || file.size === 0) {
      return NextResponse.json(
        {
          error: 'No file uploaded',
          hint: 'Send a form-data POST with key "file" (type: File)',
          receivedKeys: keys,
        },
        { status: 400 }
      );
    }

    // Ensure container exists
    await containerClient.createIfNotExists();

    const blobName = `${Date.now()}-${file.name}`;
    const blockBlobClient = containerClient.getBlockBlobClient(blobName);

    // Read file as ArrayBuffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Upload to Azure Blob Storage
    await blockBlobClient.uploadData(buffer, {
      blobHTTPHeaders: { blobContentType: file.type },
    });

    // Get public URL
    const url = blockBlobClient.url;

    return NextResponse.json({
      url,
      fileName: file.name,
      size: file.size,
      type: file.type,
    });
  } catch (error) {
    const err = error as Error;
    return NextResponse.json(
      { error: 'Upload failed', message: err.message },
      { status: 500 }
    );
  }
}
