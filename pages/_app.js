import '../styles/globals.scss';
import Layout from '../components/Layout';
import theme from '../utils/theme';
import { ThemeProvider } from '@material-ui/core/styles'
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {

    useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
          jssStyles.parentElement.removeChild(jssStyles);
        }
      }, []);

    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ThemeProvider>
    )
}

export default MyApp
