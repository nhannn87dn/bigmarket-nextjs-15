import React from "react";
import { TProduct } from "./ProductsList/type";

export default function ButtonAddToCart({data}: {data: TProduct}) {
  return (
    <div className="product-action flex justify-center mt-3">
      <button
        type="button"
        className="border-primary text-primary w-full gap-x-[8px]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
        <span>Thêm vào giỏ</span>
      </button>
    </div>
  );
}
