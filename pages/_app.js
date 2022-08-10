import 'antd/dist/antd.css'
import '../styles/globals.css'
import '../styles/color-scheme.css'
import { wrapper, store } from "../states/store";
import { SessionProvider } from "next-auth/react"
import { Provider } from "react-redux";


function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </SessionProvider>
  );
}

export default MyApp
