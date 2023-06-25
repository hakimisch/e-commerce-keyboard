import Navbar from '@/components/Navbar';
import { SessionProvider } from 'next-auth/react';
import '@/styles/globals.css'
import { StoreProvider } from '@/utils/Store';

export default function App({ Component, pageProps: { session, ...pageProps }, }) {
  return (
    <>
    <SessionProvider session={session}>
      <Navbar/>
      <StoreProvider>
        <Component {...pageProps} />
      </StoreProvider>
    </SessionProvider>
    
    
    </>
  );
}
