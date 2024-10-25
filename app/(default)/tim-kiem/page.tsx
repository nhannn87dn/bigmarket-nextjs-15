import SearchPageDesktop from "@/components/ui/desktop/SearchPageDesktop";
import { Suspense } from "react";

const SearchPage = async (props: {searchParams: Promise<{keyword: string}>}) => {
  const searchParams = await props.searchParams;
  const keyword = searchParams.keyword || '';
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchPageDesktop keyword={keyword} />
    </Suspense>
  )
}

export default SearchPage