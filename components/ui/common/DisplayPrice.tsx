import { formatCurrencyVND } from "@/utils/formatCurrency";

export default function DisplayPrice({
  promote_price,
  shop_price,
  priceFontSize = 16,
}: {
  promote_price: number;
  shop_price: number;
  priceFontSize?: number;
}) {
  if (shop_price === 0) {
    return (
      <div className="product-price my-2">
        <strong className="text-slate-400 font-normal">Giá bán: Liên hệ</strong>
      </div>
    );
  }
  return (
    <>
      {promote_price > 0 ? (
        <div className="product-price my-2 flex gap-x-2 items-end">
          <strong className="text-primary" style={{fontSize: priceFontSize}}>
            {formatCurrencyVND(promote_price)}
          </strong>
          <del className="text-slate-400 line-through">
            {formatCurrencyVND(shop_price)}
          </del>
        </div>
      ) : (
        <div className="product-price my-2 flex gap-x-2 items-end">
          <strong className="text-primary" style={{fontSize: priceFontSize}}>
            {formatCurrencyVND(shop_price)}
          </strong>
        </div>
      )}
    </>
  );
}
