import ArticleDetails from "@/components/ui/common/ArticleDetails";
import { getArticleDetailsById } from "@/constants/APIEndpoints/articles";

export default async function Page() {
  const articleData = await getArticleDetailsById(3564);
  return (
    <>
      <ArticleDetails article={articleData.article} />
    </>
  )
}