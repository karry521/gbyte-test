/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "out",
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true, // 忽略 ESLint 检查
  }
};

export default nextConfig;
