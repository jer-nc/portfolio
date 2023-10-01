/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['avatars.githubusercontent.com', 'pbs.twimg.com','ph-files.imgix.net'], 
        unoptimized: true,
    },
    env: {
        NEXT_PUBLIC_LAMBDA_URL: process.env.NEXT_PUBLIC_LAMBDA_URL,
    },
}

module.exports = nextConfig
