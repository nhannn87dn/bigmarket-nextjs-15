import { settings } from "@/constants/settings";


const metaDataBase = settings.metaDataBaseField;

export const metadata = {
  ...metaDataBase,
  title: 'Liên hệ | '+ settings.siteName,
  description: 'Thông tin liên hệ về '+ settings.siteName,
  alternates: {
    canonical: '/lien-he',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}


export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto my-5">Đang phát triển...</div>
  )
}
