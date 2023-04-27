import CardContextProvider from '@/context/CardContext'
import '@/styles/globals.css'
import Basket from '@/component/Basket'
export default function App({ Component, pageProps }) {
  return <CardContextProvider>
    <Component {...pageProps} />
    { <Basket/> }
    </CardContextProvider>
}
