import { AzureOpenAI } from 'openai';

const openai = new AzureOpenAI({
  endpoint: process.env.AZURE_OPENAI_ENDPOINT!,
  apiKey: process.env.AZURE_OPENAI_API_KEY!,
  apiVersion: process.env.AZURE_OPENAI_API_VERSION || '2024-08-01-preview',
  deployment: process.env.AZURE_OPENAI_DEPLOYMENT || 'gpt-4o-mini',
});

export default openai;
