import { getArticleDetailsById } from "@/constants/APIEndpoints/articles";

import { settings } from "@/constants/settings";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import ArticleDetailsPageDesktop from "@/components/ui/desktop/ArticleDetailsPage";
import ArticleDetailsPageDesktopLoading from "@/components/ui/desktop/ArticleDetailsPage/ArticleDetailsPageDesktopLoading";
interface TParams {
  params: Promise<{ slug: string }>
}


export async function generateMetadata({params}: TParams) {
  const slug = (await params).slug;
  const match = slug.match(/([a-z-0-9-\-]+)-a(\d+)$/);
  const articleId = match ? match[2] : null; // Check if match is not null
  if(!articleId) return notFound();
  const articleData = await getArticleDetailsById(parseInt(articleId));
  if(!articleData) return notFound();
  return {
    ...settings.metaDataBaseField,
    title: articleData.metaData.metaTitle,
    description: articleData.metaData.metaDescription,
    openGraph: {
      title: articleData.metaData.metaTitle,
      description: articleData.metaData.metaDescription,
      url: articleData.article.url,
      siteName: settings.siteName,
      images: [
        {
          url: articleData.article.article_thumb, // Must be an absolute URL
          width: 640,
          height: 347,
        },
      ],
      locale: 'vi',
      type: 'article',
    },
  };
}

export default async function ArticleDetailsPage({params}: TParams) {
  const slug = (await params).slug;
  const match = slug.match(/([a-z-0-9-\-]+)-a(\d+)$/);
  const articleId = match ? match[2] : null; // Check if match is not null
  if(!articleId) return notFound();
  
  return (
    <Suspense fallback={<ArticleDetailsPageDesktopLoading />}>
      <ArticleDetailsPageDesktop slug={slug} articleId={parseInt(articleId)} />
    </Suspense>
  )
}
