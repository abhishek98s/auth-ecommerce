import Layout from '@/Components/Layout'
import '@/styles/globals.css'
import { Provider } from 'react-redux'
import { persistor, store } from '@/Redux/store'
import { PersistGate } from 'redux-persist/integration/react';

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PersistGate>
    </Provider>
  )
}
