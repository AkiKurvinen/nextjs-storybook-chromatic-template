/** @type {import('next').NextConfig} */

const nextConfig = {
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  trailingSlash: true,
  output: 'export',
  distDir: 'dist',
  reactStrictMode: true,
  compiler: {
    emotion: true,
  },
  images: {
   // loader: 'custom',
   unoptimized: true,
   // path: process.env.NEXT_PUBLIC_BASE_PATH,
   // loaderFile: './src/imageLoader.ts',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'openweathermap.org',
        port: '',
        pathname: '/img/**',
      },
    ],
  },

  // images: { unoptimized: true}
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

module.exports = nextConfig;
