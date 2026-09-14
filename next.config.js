/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/Afnan.pdf",
        destination: "https://pathan-afnan-khan.vercel.app/resume",
        permanent: true,
      },
      {
        source: "/about",
        destination: "https://pathan-afnan-khan.vercel.app/about",
        permanent: true,
      },
      {
        source: "/projects",
        destination: "https://pathan-afnan-khan.vercel.app/projects",
        permanent: true,
      },
      {
        source: "/:path*",
        destination: "https://pathan-afnan-khan.vercel.app/",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
