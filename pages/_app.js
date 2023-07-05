import '../styles/global.css';
import { EB_Garamond } from 'next/font/google';

const garamond = EB_Garamond({ subsets: ['latin'] });

export default function App({ Component, pageProps }) {
    return (
        <main className={garamond.className}>
          <Component {...pageProps} />
        </main>
      )
}