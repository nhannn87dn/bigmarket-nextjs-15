import Image from "next/image";
import Link from "next/link";
import { globalConfig } from "@/constants/configs";
import { settings } from "@/constants/settings";

const LogoDesktop = ({className=''}: {className?: string}) => {
  return (
    <Link className={className} href="/">
      <Image
      className="mx-auto"
        src={`${globalConfig.BACKEND_CDN}upload/files/profile/logo.png`}
        alt={settings.siteName}
        width={220}
        height={50}
        priority={true}
      />
    </Link>
  );
};

export default LogoDesktop;
