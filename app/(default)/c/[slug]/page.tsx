import CategoryPageDesktop from "@/components/ui/desktop/CategoryPageDesktop";
import CategoryPageDesktopLoading from "@/components/ui/desktop/CategoryPageDesktop/CategoryPageDesktopLoading";
import { getProductByCate } from "@/constants/APIEndpoints/products";
import { settings } from "@/constants/settings";
import { buildUri } from "@/libs/buildUri";
import { notFound } from "next/navigation";
import { Suspense } from "react";


interface TCategoryRequest {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{
    page: number | undefined;
    f: string | undefined;
    rc: "moi-ve" | "ban-chay" | "noi-bat" | "giam-gia" | undefined;
    brand_id: number | undefined;
    price_min: number | undefined;
    price_max: number | undefined;
    sort: "sort_order" | "shop_price" | undefined;
    order: "DESC" | "ASC" | undefined;
    p: string | undefined; // price slug,
    b: string | undefined; // brand slug
  }>;
}


export async function generateMetadata({
  params,
  searchParams,
}: TCategoryRequest) {
  const _searchParams = (await searchParams);
  const _params = (await params);

  const {slug} = _params;
  const {page} = _searchParams;
  const currentPage = page || 1;
  const page_size = settings.productPerPage;
  const queryStringData = buildUri(
    `?cat_id=99999999999999&cat_slug=${slug}&page=${currentPage}&page_size=${page_size}&`,
    {
      ..._searchParams,
    }
  );


  const resData = await getProductByCate(queryStringData);

  if(!resData) return notFound();

  /* index search params */
  let canonicalParams = '';
  if(_searchParams.f && _searchParams.f !== ''){
    canonicalParams = `${canonicalParams}f=${_searchParams.f}`
  }
  if(_searchParams.p && _searchParams.p !== ''){
    canonicalParams = canonicalParams !== '' ? '&': '' + `${canonicalParams}p=${_searchParams.p}`
  }
  canonicalParams = canonicalParams !== '' ? '?'+canonicalParams : canonicalParams

  return {
    ...settings.metaDataBaseField,
    title: resData.metaData.metaTitle,
    description: resData.metaData.metaDescription,
    alternates: {
      canonical: `/${resData.category.url}${canonicalParams}`,
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
  };
}

export default async function CategoryPage({
  params,
  searchParams,
}: TCategoryRequest) {
  const _searchParams = (await searchParams);
  const _params = (await params);
  return (
    <Suspense fallback={<CategoryPageDesktopLoading />}>
      <CategoryPageDesktop params={_params} searchParams={_searchParams} />
    </Suspense>
  )
}
