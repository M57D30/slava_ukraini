import "../styles/globals.css";
import type { AppType } from "next/app";
import Footer from "Components/Footer/Footer";
import Navbar from "Components/Navbar/Navbar";
import type { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { api } from "~/utils/api";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Navbar />
      <Component {...pageProps} />

      <footer>
        <Footer />
      </footer>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
