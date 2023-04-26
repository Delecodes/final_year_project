import "../styles/globals.css";
import { FypProvider } from "../context/context";

function MyApp({ Component, pageProps }) {
  return (
    <FypProvider>
      <Component {...pageProps} />
    </FypProvider>
  );
}

export default MyApp;
