import Navbar from '@/components/Navbar';
import '@/styles/globals.css'
import { StoreProvider } from '@/utils/Store';

export default function App({ Component, pageProps }) {
  return (
    <>
    <Navbar/>
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
    
    </>
  );
}
