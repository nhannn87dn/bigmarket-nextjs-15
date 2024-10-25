import Link from "next/link";
import { TCategoryRequest } from "./type";

/* Tạo liên kết giảm giá */
export  const FilterByPromotionPrice = (
    {currentRecommended,
      queryString
    }: {
      currentRecommended: TCategoryRequest["searchParams"]["rc"];
      queryString: string;
    }
  ) => {
    if (currentRecommended === "giam-gia") {
      return (
        <Link
          className="border bg-white border-gray-300 py-1 px-2 rounded flex item gap-x-1 text-primary font-semibold items-center"
          href={`${queryString}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
          Giảm giá
        </Link>
      );
    }
    return (
      <Link
        className="border bg-white border-gray-300 py-1 px-2 rounded"
        href={`${queryString}&rc=giam-gia`}
      >
        Giảm giá
      </Link>
    );
  };


/* Tạo liên kết giảm giá */
export const FilterByBanChay = (
    {currentRecommended,
      queryString
    }: {
      currentRecommended: TCategoryRequest["searchParams"]["rc"];
      queryString: string;
    }
  ) => {
    if (currentRecommended === "ban-chay") {
      return (
        <Link
          className="border bg-white border-gray-300 py-1 px-2 rounded flex item gap-x-1 text-primary font-semibold items-center"
          href={`${queryString}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
          Bán chạy
        </Link>
      );
    }
    return (
      <Link
        className="border bg-white border-gray-300 py-1 px-2 rounded"
        href={`${queryString}&rc=ban-chay`}
      >
       Bán chạy
      </Link>
    );
  };
