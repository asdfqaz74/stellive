/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "stellive.me",
      },
    ],
  },
};

export default nextConfig;
