"use client";
import { useMediaQuery } from "react-responsive";
import FooterMobile from "../ui/mobile/FooterMobile";
import HeaderMobile from "../ui/mobile/HeaderMobile";
import HeaderDesktop from "../ui/desktop/HeaderDesktop";
import FooterDesktop from "../ui/desktop/FooterDesktop";
export default function DetectMobileProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  if (isMobile) {
    return (
      <>
        <HeaderMobile />
        {children}
        <FooterMobile />
      </>
    );
  }
  return (
    <>
      <HeaderDesktop />
      {children}
      <FooterDesktop />
    </>
  );
}
