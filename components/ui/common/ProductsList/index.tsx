import ButtonAddToCart from "../ButtonAddToCart";
import Link from "next/link";
import DisplayPrice from "../DisplayPrice";
import DisplayProductName from "../DisplayProductName";
import Image from "next/image";
import { TProductBase } from "@/constants/APIEndpoints/products";

type TProductListProps = {
  data: TProductBase[];
  className?: string;
};

export default function ProductList({
  data = [],
  className=  'grid grid-cols-5 gap-4'
}: TProductListProps) {

  if(data.length === 0) return (<div className="empty-product-list flex justify-center items-center py-10">
    <p>Không có sản phẩm nào !</p>
</div>)

  return (
    <div className={`product-list ${className}`}>
      {data.map((p) => {
          return (
            <Link href={`/p/${p.url}-p${p.goods_id}`} key={`product-list-${p.goods_id}`} className="product-item bg-white flex flex-col">
              <div className="product-thumb flex p-2 items-center justify-center  overflow-hidden">
                <Image
                  sizes="100vw"
                  priority={true}
                  className="w-full h-auto"
                  height={150}
                  width={150}
                  src={p.goods_thumb}
                  alt={p.goods_name}
                />
              </div>
              <div className="product-info p-3">
                <DisplayProductName productName={p.goods_name} />
                <p className="text-slate-400">Đơn vị tính: kg</p>
                <DisplayPrice promote_price={p.promote_price} shop_price={p.shop_price} />
                <ButtonAddToCart data={p} />
              </div>
            </Link>
          );
        })
      }
    </div>
  );
}
