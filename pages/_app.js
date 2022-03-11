import '../styles/globals.css';
import Layout from '../styles/components/Layout';
import Loading from '../styles/components/Loading';
import { AuthProvider } from '../Auth';

function MyApp({ Component, pageProps }) {
  
  return (
  <AuthProvider>
  <Layout>
  <Component {...pageProps} />

  </Layout>
  </AuthProvider>  
  )
}

export default MyApp
