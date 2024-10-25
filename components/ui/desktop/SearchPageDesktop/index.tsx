import { getProductByKeyword } from "@/constants/APIEndpoints/products"
import { notFound } from "next/navigation";
import ProductList from "../../common/ProductsList";
import ECShopCategoryPagination from "../../common/category/ECShopCategoryPagination";

export default async function SearchPageDesktop({keyword}: {keyword: string}) {
    const data = await getProductByKeyword(keyword);
    console.log('<<=== 🚀 data ===>>',data);
    if(!data) notFound();
  return (
    <div className="max-w-7xl mx-auto my-5">
       <h1 className="font-bold text-2xl">Từ khóa: {keyword}</h1>
       <p className="text-gray-500 my-5">Kết quả tìm kiếm: có <strong className="font-bold text-orange-600">{data.pagination.record_count}</strong> sản phẩm cho từ khóa <span className="text-primary">{keyword}</span></p>
        <ProductList
            className="grid grid-cols-5 gap-1"
            data={data.products_list}
        />
        <ECShopCategoryPagination pagination={data.pagination} />
    </div>
  )
}
