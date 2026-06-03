/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Это нужно, чтобы Next.js разрешил экспорт картинок без своего сервера
  },
};

export default nextConfig;