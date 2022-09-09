import '../styles/globals.css'
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {

  return (
    <Layout>
      {console.log(pageProps)}
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
