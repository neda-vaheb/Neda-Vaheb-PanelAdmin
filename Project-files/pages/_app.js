import { Toaster } from 'react-hot-toast';
import '../styles/globals.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import defaultOptions from "../componets/config/reactQuery";



export default function App({ Component, pageProps }) {
  const queryClient = new QueryClient({ defaultOptions });
  return (
  <>
   <QueryClientProvider client={queryClient}>
  <Component {...pageProps} />
    <Toaster/>
   </QueryClientProvider>
  </>
  )

}
