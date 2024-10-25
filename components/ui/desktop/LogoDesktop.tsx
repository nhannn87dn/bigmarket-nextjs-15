import Image from "next/image";
import Link from "next/link";
import { globalConfig } from "@/constants/configs";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src={`${globalConfig.BACKEND_CDN}upload/files/profile/logo.png`}
        alt="BigMarket Logo"
        width={220}
        height={50}
        priority={true}
      />
    </Link>
  );
};

export default Logo;
