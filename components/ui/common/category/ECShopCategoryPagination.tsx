import { TECShopPager } from "@/constants/types";
import Link from "next/link";

const ECShopCategoryPagination = ({pagination}: {pagination: TECShopPager})=>{
    if(pagination.record_count === 0 || pagination.page_count > 1) return null;
    return (
      <div className="category-pagination flex gap-2">
              {pagination.page_prev != "" && (
                <Link
                  className="border bg-white border-gray-400 py-1 px-3 rounded"
                  href={`/c/${pagination.page_prev}`}
                >
                  Prev
                </Link>
              )}
              {pagination.page_count > 1 && pagination.page_number.length > 0 &&
                pagination.page_number.map((page) => {
                  const pageClass =
                    pagination.page === page.label
                      ? "border border-primary text-white bg-primary py-1 px-3 rounded"
                      : "border bg-white border-gray-400 py-1 px-3 rounded";
                  return (
                    <Link key={`category-pagination-${page.label}`} className={pageClass} href={`/c/${page.url}`}>
                      {page.label}
                    </Link>
                  );
                })}
              {pagination.page_next != "" && (
                <Link
                  className="border bg-white border-gray-400 py-1 px-3 rounded"
                  href={`/c/${pagination.page_next}`}
                >
                  Next
                </Link>
              )}
            </div>
    )
  }
export default ECShopCategoryPagination;  