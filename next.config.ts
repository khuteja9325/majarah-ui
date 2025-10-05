import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // This tells Next.js to export a static site instead of a server-rendered one.
  output: "export",

  // This is a workaround for static image optimization, which isn't supported
  // with static exports. It disables the server-side image optimization.
  images: {
    unoptimized: true,
  },

  // This is required if your website is hosted in a subfolder of your domain,
  // which is how GitHub Pages works. Replace 'your-repo-name' with the actual
  // name of your GitHub repository.
  basePath: "/majarah-ui",
};

export default nextConfig;