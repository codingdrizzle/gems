import 'antd/dist/antd.css'
import '../src/styles/globals.css'
import '../src/styles/color-scheme.css'
import { wrapper, store } from "../src/states/store";
import { SessionProvider } from "next-auth/react"
import { Provider } from "react-redux";


function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <Component {...pageProps}/>
      </Provider>
    </SessionProvider>
  );
}



export default MyApp
