import ProductListLoading from "@/components/ui/common/ProductsList/ProductListLoading";
import TailwindSkeleton from "@/components/ui/common/TailwindSkeleton";

export default function SearchPageDesktopLoading() {
  return (
    <div className="max-w-7xl mx-auto my-5">
       <TailwindSkeleton width="w-1/2" height="h-10" />
       <TailwindSkeleton />
        <ProductListLoading limit={15}/>
    </div>
  )
}
