'use client'

import { useGlobalStore } from "@/stores/useGlobalStore"

const CategoriesTreeHeader = ({children}: {children: React.ReactNode}) => {
  const {isToggleCategories} = useGlobalStore();
  if(!isToggleCategories) return null;
  return (
    <div className="categories-tree absolute left-0 top-[90px] shadow-lg bg-white">
        {children}
    </div>
  )
}

export default CategoriesTreeHeader