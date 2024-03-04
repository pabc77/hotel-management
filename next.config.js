/** @type {import('next').NextConfig} */
//next.config.mjs => next.config.js 바꾸었다.
const nextConfig = {
  images: {
    // domains: ['lh3.googleusercontent.com', 'images.unsplash.com'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: '',
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
    ],
  },
};
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "img.clerk.com",
//       },
//       {
//         protocol: "https",
//         hostname: "images.unsplash.com",
//       },
//     ],
//   },
// }

// export default nextConfig;
module.exports = nextConfig

