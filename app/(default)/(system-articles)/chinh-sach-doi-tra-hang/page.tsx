import ArticleDetails from "@/components/ui/common/ArticleDetails";
import { settings } from "@/constants/settings";



const metaDataBase = settings.metaDataBaseField;

export const metadata = {
  ...metaDataBase,
  title: 'Chính sách đổi trả hàng | '+ settings.siteName,
  description: 'Chính sách đổi trả hàng '+ settings.siteName,
  alternates: {
    canonical: '/chinh-sach-doi-tra-hang',
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
      <ArticleDetails articleId={328} checkUrl={false} />
    </>
  )
}
