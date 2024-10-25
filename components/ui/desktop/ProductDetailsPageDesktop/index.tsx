import DisplayPrice from "@/components/ui/common/DisplayPrice";
import ProductGallery from "@/components/ui/common/ProductGallery";
import ProductParameter from "@/components/ui/common/ProductParameter";
import ProductsRelate from "@/components/ui/desktop/ProductsRelate";
import { getProductDetailById } from "@/constants/APIEndpoints/products";
import "@/public/css/articleDesktopStyle.css";
import { notFound, redirect } from "next/navigation";
import { Suspense } from "react";
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
          <ul className="bg-white rounded p-3 flex flex-col gap-y-3">
            <li className="extra-title font-bold text-md">
              Chính sách bán hàng
            </li>
            <li className="extra-item flex gap-x-1 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5 text-primary"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                />
              </svg>
              Thực phẩm an toàn
            </li>
            <li className="extra-item flex gap-x-1 items-center">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5 text-primary"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                />
              </svg>
              Miễn phí đổi trả tới 72h
            </li>
            <li className="extra-item flex gap-x-1 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5 text-primary"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
              Giao hàng tận nơi
            </li>
          </ul>
        </div>
      </section>
      <section className="product-details my-4 flex rounded p-3 bg-white gap-x-4">
        <div className="article-container flex-1">
          <h2 className="article-title font-bold text-xl  mb-3">
            Mô tả sản phẩm
          </h2>
          <article
            className="article-content"
            dangerouslySetInnerHTML={{ __html: productDetail.goods_desc }}
          />
        </div>
        <ProductParameter data={productDetail.goods_cauhinh} className="w-[360px]" />
      </section>
      <section className="product-relate bg-white rounded p-3">
        <h2 className="font-bold text-xl mb-3">Sản phẩm liên quan</h2>
        <Suspense fallback={<div>Loading...</div>}>
          <ProductsRelate productId={productDetail.goods_id} />
        </Suspense>
      </section>
    </div>
  );
}
