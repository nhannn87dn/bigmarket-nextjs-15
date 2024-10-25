import HeaderDesktop from '../ui/desktop/HeaderDesktop'
import FooterDesktop from '../ui/desktop/FooterDesktop'

const DesktopLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <>
    <HeaderDesktop />
    <main className="my-5 section-main">
    {children}
    </main>
    <FooterDesktop />
    </>
  )
}

export default DesktopLayout