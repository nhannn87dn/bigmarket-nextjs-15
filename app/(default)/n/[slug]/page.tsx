import ArticleCatPageDesktop from "@/components/ui/desktop/ArticleCatPageDesktop";
import ArticleCatPageDesktopLoading from "@/components/ui/desktop/ArticleCatPageDesktop/ArticleCatPageDesktopLoading";
import { getArticlesByCateSlug } from "@/constants/APIEndpoints/articles";
import { settings } from "@/constants/settings";
import { notFound } from "next/navigation";
import { Suspense } from "react";
// or Dynamic metadata
export async function generateMetadata(
  props: {
    params: Promise<{ slug: string }>,
    searchParams: Promise<{ page: number }>;
  }
) {
  const searchParams = await props.searchParams;
  const params = await props.params;
  const page = searchParams.page || 1;
  
  const data = await getArticlesByCateSlug({
    catSlug: params.slug,
    page: page,
    limit: settings.articlePerPage,
  });

  if(!data) return notFound();

  return {
    ...settings.metaDataBaseField,
    title: data.metaData.metaTitle,
    description: data.metaData.metaDescription,
  };
}

export default async function ArticleCatPage(
  props: {
    params: Promise<{ slug: string }>,
    searchParams: Promise<{ page: number }>;
  }
) {
  const searchParams = await props.searchParams;
  const params = await props.params;
  
  return (
    <Suspense fallback={<ArticleCatPageDesktopLoading />}>
        <ArticleCatPageDesktop params={params} searchParams={searchParams} />
    </Suspense>
  );
}
