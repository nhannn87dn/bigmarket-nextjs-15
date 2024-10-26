import SearchPageDesktop from "@/components/ui/desktop/SearchPageDesktop";
import SearchPageDesktopLoading from "@/components/ui/desktop/SearchPageDesktop/SearchPageDesktopLoading";
import { Suspense } from "react";

const SearchPage = async (props: {searchParams: Promise<{q: string}>}) => {
  const searchParams = await props.searchParams;
  const keyword = searchParams.q || '';
  return (
    <Suspense fallback={<SearchPageDesktopLoading />}>
      <SearchPageDesktop keyword={keyword} />
    </Suspense>
  )
}

export default SearchPage