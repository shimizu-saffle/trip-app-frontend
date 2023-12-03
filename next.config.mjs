export default {
  async rewrites() {
    return [
      {
        source: '/private_api/v1/:path*',
        destination: `http://${process.env.NEXT_PUBLIC_TRIPAPP_API_URL}:${process.env.NEXT_PUBLIC_TRIPAPP_API_PORT}/private_api/v1/:path*`,
      },
    ]
  },
}
