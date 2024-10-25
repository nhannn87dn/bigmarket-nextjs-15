import React, { Suspense } from 'react';
import CategoriesTreeHeader from "./CategoriesTreeHeader";
import CategoriesTreeList from '../common/CategoriesTreeList';



const HeaderMiddle = async ({children}: {children: React.ReactNode}) => {
  
  return (
    <div className="header-middle">
        <div className="max-w-7xl relative mx-auto">
            <div className="header-middle-inner py-4 flex items-center justify-between">
                {children}
            </div>
            <CategoriesTreeHeader>
              <Suspense fallback={null}>
                <CategoriesTreeList />
              </Suspense>
            </CategoriesTreeHeader>
        </div>
      </div>
  )
}

export default HeaderMiddle