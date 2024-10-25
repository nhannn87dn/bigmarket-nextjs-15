import type { Metadata } from "next";
import { Roboto } from 'next/font/google'
import "@/app/globals.css";
import { settings } from "@/constants/settings";
import HeaderDesktop from "@/components/ui/desktop/HeaderDesktop";
import { isMobileDevice } from "@/libs/isMobileDevice";
import HeaderMobile from "@/components/ui/mobile/HeaderMobile";
import FooterMobile from "@/components/ui/mobile/FooterMobile";
import FooterDesktop from "@/components/ui/desktop/FooterDesktop";

const roboto = Roboto({
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: settings.metaTitle,
  description: settings.metaDesc,
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const isMobile = await isMobileDevice();
  
  return (
    <html lang={settings.langDefault}>
      <body
        className={`${roboto.className} antialiased`}
      >
      {isMobile ? <HeaderMobile /> : <HeaderDesktop /> }
      <main>
        {children}
      </main>
      {isMobile ? <FooterMobile /> : <FooterDesktop /> }
      </body>
    </html>
  );
}
