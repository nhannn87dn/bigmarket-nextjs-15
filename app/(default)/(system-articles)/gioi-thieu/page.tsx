import ArticleDetails from "@/components/ui/common/ArticleDetails";
import { settings } from "@/constants/settings";


const metaDataBase = settings.metaDataBaseField;

export const metadata = {
  ...metaDataBase,
  title: 'Giới thiệu | '+ settings.siteName,
  description: 'Giới thiệu về '+ settings.siteName,
  alternates: {
    canonical: '/gioi-thieu',
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
      <ArticleDetails articleId={1357} checkUrl={false} />
    </>
  )
}
