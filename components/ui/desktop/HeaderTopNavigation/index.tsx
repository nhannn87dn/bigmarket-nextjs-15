import Link from "next/link"
import { settings } from "@/constants/settings";
import { getNavigationByPosition } from "@/constants/APIEndpoints/navigation";
import React from "react";

type TCustomLink = {
  label: string;
  onClick?: () => void;
  href?: string;
}

const CustomLink = React.forwardRef<HTMLAnchorElement, TCustomLink>(({label, onClick, href }: TCustomLink, ref) => {
  return (
    <a href={href} onClick={onClick} ref={ref}>
     {label}
    </a>
  )
})
CustomLink.displayName = 'CustomLink';

const HeaderTopNavigation = async () => {
  const topNavigation = await getNavigationByPosition('top');
  return (
    <div className="header-top-nav flex gap-x-5 text-[14px]">
      {
        topNavigation && topNavigation.length > 0 && topNavigation.map((item) => (
          <Link href={`/${item.url}`} key={`top-nav-${item.url}`} passHref legacyBehavior>
            <CustomLink label={item.name} />
          </Link>
        ))
      }
      <Link href={`tel:${settings.hotline}`}>Gọi mua hàng {settings.hotline}</Link>
    </div>
  )
}

export default HeaderTopNavigation
