import { getProductRelate } from "@/constants/APIEndpoints/products";
import ProductList from "../common/ProductsList";

export default async function ProductsRelate({productId, className=''}: {
    productId: number;
    className?: string;
}) {
    const productsRelate = await getProductRelate(productId);
  return (
    
    <div className={`${className}`}>
        <ProductList data={productsRelate} />
    </div>
  )
}
