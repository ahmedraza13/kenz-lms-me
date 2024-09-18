import "./globals.css";
import { League_Spartan } from "next/font/google";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import Layout from "./_Layout";
import { metadataObj } from "./utils/metadata";
import { Providers } from "./redux/StoreProvider";

const leagueSpartan = League_Spartan({ subsets: ["latin"] });

export const metadata = metadataObj

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={leagueSpartan?.className}>
        <Providers>
          <AppRouterCacheProvider>
            <Layout>
              {children}
            </Layout>
          </AppRouterCacheProvider>
        </Providers>
      </body>
    </html >
  );
}
