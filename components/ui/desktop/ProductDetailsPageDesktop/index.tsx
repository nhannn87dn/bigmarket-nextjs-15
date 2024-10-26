import DisplayPrice from "@/components/ui/common/DisplayPrice";
import ProductGallery from "@/components/ui/common/ProductGallery";
import ProductParameter from "@/components/ui/common/ProductParameter";
import ProductsRelate from "@/components/ui/desktop/ProductsRelate";
import { getProductDetailById } from "@/constants/APIEndpoints/products";
import "@/public/css/articleDesktopStyle.css";
import { notFound, redirect } from "next/navigation";
import { Suspense } from "react";
import PolicyBlock from "../../common/PolicyBlock";
import ArticleContent from "../../common/ArticleContent";
import ProductListLoading from "../../common/ProductsList/ProductListLoading";
export default async function productsPageDesktop({
  productId,
  slug,
}: {
  productId: number;
  slug: string
}) {

  const productDetail = await getProductDetailById(productId);

   //redirect 404
  if(!productDetail) notFound();
 
  const rightURL = `/p/${productDetail.url}-p${productDetail.goods_id}`;
  const currentURL = `/p/${slug}`;
  if(rightURL !== currentURL){
    redirect(rightURL)
  }
  return (
    <div className="max-w-7xl mx-auto my-4">
      <section className="product-info-top flex gap-x-4">
        <div className="product-info-top-basic flex-1 bg-white rounded p-3 flex gap-6">
          <ProductGallery className="w-[450px] h-auto" product={productDetail} />
          <div className="product-lines flex-1">
            <h1 className="font-bold text-2xl">{productDetail.goods_name}</h1>
            <div className="product-code text-gray-500 my-2">
              Thương hiệu: {productDetail.goods_brand} | Mã sản phẩm:{" "}
              {productDetail.goods_sn}
            </div>
            <p className="text-gray-500">Đơn vị tính: kg</p>
            <DisplayPrice
              priceFontSize={24}
              shop_price={productDetail.shop_price}
              promote_price={productDetail.promote_price}
            />
            <div className="product-actions flex gap-x-2 border-t py-4 border-t-slate-200 border-dashed">
              <button className="flex-1 py-3 bg-primary hover:bg-secondary text-white font-bold border-primary uppercase">
                Mua Ngay
              </button>
              <button className="flex-1 py-3 border border-primary text-primary font-bold uppercase">
                Thêm vào giỏ hàng
              </button>
            </div>
          </div>
        </div>
        <div className="product-info-top-extra w-[300px]">
          <PolicyBlock />
        </div>
      </section>
      <section className="product-details my-4 flex rounded p-3 bg-white gap-x-4">
        <div className="article-container flex-1">
          <h2 className="article-title font-bold text-xl  mb-3">
            Mô tả sản phẩm
          </h2>
          <ArticleContent goods_desc={productDetail.goods_desc} />
        </div>
        <ProductParameter data={productDetail.goods_cauhinh} className="w-[360px]" />
      </section>
      
      <Suspense fallback={<ProductListLoading limit={4} />}>
        <ProductsRelate productId={productDetail.goods_id} />
      </Suspense>
      
    </div>
  );
}
