import nextra from 'nextra'
 
const withNextra = nextra({
});
 
export default withNextra({
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.wixstatic.com',
        port: '',
        pathname: '/**', // Não use `search` aqui, o correto é `pathname`
      },
    ],
  },
})