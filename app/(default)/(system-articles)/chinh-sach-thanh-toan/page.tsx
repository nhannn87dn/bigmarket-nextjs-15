import ArticleDetails from "@/components/ui/common/ArticleDetails";
import { settings } from "@/constants/settings";


const metaDataBase = settings.metaDataBaseField;

export const metadata = {
  ...metaDataBase,
  title: 'Chính sách thanh toán | '+ settings.siteName,
  description: 'Chính sách thanh toán '+ settings.siteName,
  alternates: {
    canonical: '/chinh-sach-thanh-toan',
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
      <ArticleDetails articleId={3576} checkUrl={false} />
    </>
  )
}
