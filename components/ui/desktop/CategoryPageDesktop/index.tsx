import { settings } from "@/constants/settings";
import { buildUri } from "@/libs/buildUri";
import { getProductByCate } from "@/constants/APIEndpoints/products";
import CategoryFilters from "@/components/ui/common/category/CategoryFilters";
import Link from "next/link";
import {
  FilterByBanChay,
  FilterByPromotionPrice,
} from "@/components/ui/common/category/FilterByRecommend";
import ProductList from "@/components/ui/common/ProductsList";
import ECShopCategoryPagination from "@/components/ui/common/category/ECShopCategoryPagination";
import { TParams, TSearchParams } from "@/components/ui/common/category/type";
import { notFound } from "next/navigation";


export default async function CategoryPageDesktop({
  params,
  searchParams,
}: {
  params: TParams;
  searchParams: TSearchParams;
}) {
  const {slug} = params;
  const {page} = searchParams;
  const currentPage = page || 1;
  const {sort, order, ...sortSearchParams} =  searchParams;
  const {rc, ...rcSearchParams} =  searchParams;
  const page_size = settings.productPerPage; //Neu khong truyen thi mac dinh tu backend
  const queryStringData = buildUri(
    `?cat_id=99999999999999&cat_slug=${slug}&page=${currentPage}&page_size=${page_size}&`,
    {
      ...searchParams,
    }
  );
  /* loại trừ query sort và order ra */
  const queryStringSort = buildUri(`/c/${slug}?`, {...sortSearchParams});

  const queryStringRecommended = buildUri(`/c/${slug}?`, rcSearchParams);

  const resData = await getProductByCate(queryStringData);

  if(!resData) return notFound();

  //console.log("<<=== 🚀 resData ===>>", resData);
  return (
    <div className="max-w-7xl mx-auto my-3">
      <div className="category-heading my-5">
        <h1 data-id={resData.category.cat_id} className="font-bold text-2xl">
          {resData.category.custom_name != ""
            ? resData.category.custom_name
            : resData.category.cat_name}
        </h1>
      </div>
      <div className="category-layout flex gap-x-4">
        <CategoryFilters
          className=" w-[220px] flex flex-col gap-y-5 bg-white rounded p-3"
          resData={resData}
        />
        <div className="category-main-content flex-1 flex flex-col gap-y-1">
          {/* BEGIN SẮP XẾP */}
          {resData.products_list.length > 0 && (
            <div className="category-sort-bar flex gap-x-2 items-center bg-white py-2 px-2 rounded-tl rounded-tr">
              <span>Sắp xếp theo:</span>
              <Link
                className={`border bg-white border-gray-300 py-1 px-2 rounded ${
                  sort == "shop_price" &&
                  order === "ASC"
                    ? "font-semibold text-primary"
                    : ""
                }`}
                href={`${queryStringSort}&sort=shop_price&order=ASC`}
              >
                Giá tăng dần
              </Link>
              <Link
                className={`border bg-white border-gray-300 py-1 px-2 rounded ${
                  sort == "shop_price" &&
                  order === "DESC"
                    ? "font-semibold text-primary"
                    : ""
                }`}
                href={`${queryStringSort}&sort=shop_price&order=DESC`}
              >
                Giá giảm dần
              </Link>

              <FilterByBanChay
                currentRecommended={rc}
                queryString={queryStringRecommended}
              />
              <FilterByPromotionPrice
                currentRecommended={rc}
                queryString={queryStringRecommended}
              />
            </div>
          )}

          {/* END SẮP XẾP */}
          {/* BEGIN DANH SÁCH  SẢN PHẨM */}
          <ProductList
            className="grid grid-cols-5 gap-1"
            data={resData.products_list}
          />
          {/* END DANH SÁCH  SẢN PHẨM */}
          {/* BEGIN PHÂN TRANG */}
          <ECShopCategoryPagination pagination={resData.pagination} />
        </div>
      </div>
    </div>
  );
}
