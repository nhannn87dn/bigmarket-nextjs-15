import ArticleDetails from "@/components/ui/common/ArticleDetails";
import { settings } from "@/constants/settings";


const metaDataBase = settings.metaDataBaseField;

export const metadata = {
  ...metaDataBase,
  title: 'Chính sách bảo mật thông tin | '+ settings.siteName,
  description: 'Chính sách bảo mật thông tin '+ settings.siteName,
  alternates: {
    canonical: '/chinh-sach-bao-mat-thong-tin',
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
      <ArticleDetails articleId={325} checkUrl={false} />
    </>
  )
}
