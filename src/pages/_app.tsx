
import 'react-toastify/dist/ReactToastify.min.css';
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../../styles/theme'
import { ToastContainer, Slide } from 'react-toastify';


function MyApp({ Component, pageProps }: AppProps) {
  
  
  return (
    <ChakraProvider theme={theme}>
     
   <Component {...pageProps} />
  
  </ChakraProvider>
  )
}

export default MyApp
