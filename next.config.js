/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'upload.wikimedia.org',
      'images.unsplash.com'
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp'],
    minimumCacheTTL: 60,
    unoptimized: process.env.NODE_ENV === 'production',
  },
  experimental: {
    // Disable optimizeCss since it's causing issues
    // optimizeCss: true,
    optimizePackageImports: ['@radix-ui/react-select', 'lucide-react', 'react-icons'],
  },
}

module.exports = nextConfig 