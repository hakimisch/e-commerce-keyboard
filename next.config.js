/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  images: {
    domains: [
      'images.unsplash.com',
      'i.pinimg.com',
      'res.cloudinary.com',
    ]
  }
}
