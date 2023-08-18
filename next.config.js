const advancedHeaders = [
    {
      key: "X-DNS-Prefetch-Control",
      value: "on",
    },
    {
      key: "Strict-Transport-Security",
      value: "max-age=63072000; includeSubDomains; preload",
    },
    {
      key: "X-XSS-Protection",
      value: "1; mode=block",
    },
    {
      key: "X-Frame-Options",
      value: "SAMEORIGIN",
    },
    {
      key: "X-Content-Type-Options",
      value: "nosniff",
    },
    {
      key: "Referrer-Policy",
      value: "origin-when-cross-origin",
    },
  ];

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.divanice.com',
        port: '3011',

      },
    ],
      domains :  ['api.divanice.com'],
      deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
      imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
      formats: ['image/webp'],
  },
    modularizeImports: {
        "@mui/material/?(((\\w*)?/?)*)": {
          transform: "@mui/material/{{ matches.[1] }}/{{member}}",
        },
        "@mui/icons-material/?(((\\w*)?/?)*)": {
          transform: "@mui/icons-material/{{ matches.[1] }}/{{member}}",
        },
      },
      async headers() {
        return [
          {
            // Apply these headers to all routes in your application.
            source: "/:path*",
            headers: advancedHeaders,
          },
        ];
      },
      compiler: {
        removeConsole: true,
      },
      reactStrictMode : false,
            
} 

module.exports = nextConfig
