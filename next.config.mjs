/** @type {import("next").NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", pathname: "**", hostname: "uploadthing.com" },
      { protocol: "https", pathname: "**", hostname: "utfs.io" },
      {
        protocol: "https",
        pathname: "**",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
};

export default nextConfig;
