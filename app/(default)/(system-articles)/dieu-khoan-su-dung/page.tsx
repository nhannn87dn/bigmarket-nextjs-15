import ArticleDetails from "@/components/ui/common/ArticleDetails";
import { settings } from "@/constants/settings";


const metaDataBase = settings.metaDataBaseField;

export const metadata = {
  ...metaDataBase,
  title: 'Điều khoản sử dụng | '+ settings.siteName,
  description: 'Điều khoản sử dụng '+ settings.siteName,
  alternates: {
    canonical: '/dieu-khoan-su-dung',
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

export default async function Page() {
  return (
    <>
      <ArticleDetails articleId={3564} checkUrl={false} />
    </>
  )
}
