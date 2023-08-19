import 'antd/dist/antd.css'
import '../src/styles/globals.css'
import '../src/styles/color-scheme.css'
import { wrapper, store } from "../src/states/store";
import { Provider } from "react-redux";


function MyApp({ Component, pageProps: { ...pageProps } }) {
  return (
      <Provider store={store}>
        <Component {...pageProps}/>
      </Provider>
  );
}



export default MyApp
