import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { ModalProvider } from '../contexts/modalContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ModalProvider>
      <Component {...pageProps} />
    </ModalProvider>
  )
}
