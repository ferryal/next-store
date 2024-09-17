/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.dummyjson.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        port: '',
      },
    ],
  },
  redirects: async () => {
    return [
      {
        source: '/',
        destination: '/products',
        permanent: true, // This indicates whether the redirect is permanent (301) or temporary (307)
      },
    ]
  },
}
