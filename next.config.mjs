/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'newkhumlablobstorage.blob.core.windows.net',
      },
    ],
  },

  experimental: {
    
  },
};

export default nextConfig;
