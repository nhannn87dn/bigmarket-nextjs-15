import { getProductRelate } from "@/constants/APIEndpoints/products";
import ProductList from "@/components/ui/common/ProductsList";

export default async function ProductsRelate({productId, className=''}: {
    productId: number;
    className?: string;
}) {
  const productsRelate = await getProductRelate(productId);
  if(!productsRelate || productsRelate.length === 0) return null;
  return (
    <section className="product-relate bg-white rounded p-3">
        <h2 className="font-bold text-xl mb-3">Sản phẩm liên quan</h2>
        <div className={`${className}`}>
            <ProductList data={productsRelate} />
        </div>
    </section>
  )
}
