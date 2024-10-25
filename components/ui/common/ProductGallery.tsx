import { TProductDetails } from "@/constants/APIEndpoints/products";
import Image from "next/image";
import ProductCarousel from "./ProductCarousel";

export default function ProductGallery({
  className = "",
  product,
}: {
  product: TProductDetails;
  className?: string;
}) {
  if (product.gallery.length === 0) {
    return (
      <div className={`product-gallery ${className}`}>
        <div className="product-large-photo">
          <Image
            priority={true}
            height={400}
            width={400}
            src={product.goods_img}
            alt={product.goods_name}
          />
        </div>{" "}
      </div>
    );
  }
  return (
    <div className={`product-gallery ${className}`}>
      <ProductCarousel photos={product.gallery} productName={product.goods_name} />
    </div>
  );
}
