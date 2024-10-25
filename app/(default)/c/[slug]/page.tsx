import CategoryPageDesktop from "@/components/ui/desktop/CategoryPageDesktop";
import CategoryPageDesktopLoading from "@/components/ui/desktop/CategoryPageDesktop/CategoryPageDesktopLoading";
import { Suspense } from "react";

export interface TCategoryRequest {
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
