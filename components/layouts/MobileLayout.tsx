import FooterMobile from "../ui/mobile/FooterMobile"
import HeaderMobile from "../ui/mobile/HeaderMobile"

const MobileLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <>
        <HeaderMobile />
        <main className="my-5 section-main">
        {children}
        </main>
        <FooterMobile />
        </>
  )
}

export default MobileLayout