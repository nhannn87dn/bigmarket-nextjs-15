import { Suspense } from "react";
import ArticleCategories from "@/components/ui/common/ArticleCategories";
import ArticleCategoriesLoading from "@/components/ui/common/ArticleCategories/ArticleCategoriesLoading";
import ArticleDetailsLoading from "@/components/ui/common/ArticleDetails/ArticleDetailsLoading";
import ArticleDetails from "@/components/ui/common/ArticleDetails";
import '@/public/css/articleDesktopStyle.css';
export default async function ArticleDetailsPageDesktop({slug, articleId} :{slug: string, articleId: number}) {
    return (
      <div className="max-w-7xl mx-auto my-4">
        <Suspense fallback={<ArticleCategoriesLoading />}>
          <ArticleCategories />
        </Suspense>
        <Suspense fallback={<ArticleDetailsLoading />}>
           <ArticleDetails className="my-5" slug={slug} articleId={articleId} />
        </Suspense>
      </div>
    )
  }