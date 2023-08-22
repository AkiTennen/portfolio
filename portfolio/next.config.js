/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            "www.google.com",
        ],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
                port: '',
                pathname: '**',

            },
        ],
    },
}

module.exports = nextConfig
