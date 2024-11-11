/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
      return [
        {
          source: "/api/:path*",
          headers: [
            {
              key: "Access-Control-Allow-Origin",
              value: `${process.env.API_ORIGIN}`, // Set your origin
            },
            {
              key: "Access-Control-Allow-Methods",
              value: "GET, POST, PUT, DELETE, OPTIONS",
            },
            {
              key: "Access-Control-Allow-Headers",
              value: "Content-Type, Authorization",
            },
            {
              key: "Access-Control-Allow-Credentials",
              value: "true", // Enable credentials in requests
            },
          ],
        },
      ];
    },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${process.env.API_ORIGIN}/:path*`,
      },
    ];
  },
};

export default nextConfig;
