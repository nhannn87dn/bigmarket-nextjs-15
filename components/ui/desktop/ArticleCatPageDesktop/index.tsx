import { getArticlesByCateSlug } from "@/constants/APIEndpoints/articles";
import { settings } from "@/constants/settings";
import { notFound } from "next/navigation";
import ArticleCategories from "@/components/ui/common/ArticleCategories";
import ArticlesList from "@/components/ui/common/ArticlesList";

export default async function ArticleCatPageDesktop(
    {
        params,
        searchParams
    }: {
      params: { slug: string },
      searchParams: { page: number };
    }
  ) {
    const page = searchParams.page || 1;
    const data = await getArticlesByCateSlug({
      catSlug: params.slug,
      page: page,
      limit: settings.articlePerPage,
    });
  
    if(!data) return notFound();
  
    return (
      <div className="max-w-7xl mx-auto my-3">
        <ArticleCategories />
        <div className="page-heading">
          <h1 className="font-bold text-2xl mb-5">{data.metaData.cat_name}</h1>
        </div>
        <ArticlesList articles={data.article_list} />
        <div className="pagination my-5">
          Phân trang
        </div>
      </div>
    );
  }