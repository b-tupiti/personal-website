/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'http',
          hostname: process.env.MEDIA_HOSTNAME,
          port: process.env.MEDIA_PORT,
          pathname: '/**', 
        },
      ],
    },
    output: 'standalone',
  };
  
  module.exports = nextConfig;

  