'use client'
import { useMediaQuery } from 'react-responsive'
import DesktopLayout from './DesktopLayout';
import MobileLayout from './MobileLayout';


const SwitchLayout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
  if(isMobile){
    return (
        <MobileLayout >
        {children}
        </MobileLayout>
      )
  }
  return (
    <DesktopLayout >
    {children}
    </DesktopLayout>
  )
}

export default SwitchLayout