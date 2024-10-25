import React from "react";
import TailwindSkeleton from "../TailwindSkeleton";

export default function ProductListLoading({
  className = "grid grid-cols-5 gap-4",
  limit = 10,
}: {
  className?: string;
  limit?: number;
}) {
  return (
    <div className={`product-list ${className}`}>
      {[...Array(limit)].map((_, index) => (
        <div
          key={`product-list-${index}`}
          className="product-item bg-white flex flex-col"
        >
          <div className="product-thumb flex p-2 items-center justify-center  overflow-hidden">
            <TailwindSkeleton height="h-[150px]" />
          </div>
          <div className="product-info p-2">
            <div className="product-name">
              <TailwindSkeleton />
              <TailwindSkeleton className="w-1/2 h-10" />
            </div>
            <div className="product-price flex gap-x-2 ">
              <TailwindSkeleton className="w-1/2 h-10" />
              <TailwindSkeleton className="w-1/2 h-10" />
            </div>
            <div className="product-action flex justify-center">
              <TailwindSkeleton className="w-full h-40" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
