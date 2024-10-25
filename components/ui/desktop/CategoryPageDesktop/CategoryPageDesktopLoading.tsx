import React from 'react'
import TailwindSkeleton from '../../common/TailwindSkeleton'
import ProductListLoading from '../../common/ProductsList/ProductListLoading'

export default function CategoryPageDesktopLoading() {
  return (
    <div className="max-w-7xl mx-auto my-3">
        <div className="category-heading my-5">
          <TailwindSkeleton className='w-1/2 h-5' />
        </div>
        <div className="category-layout flex gap-x-4">
            <div className="category-sidebar w-[220px] bg-white rounded p-3">
                <TailwindSkeleton className='w-full h-5' />
                <TailwindSkeleton className='w-full h-5' />
                <TailwindSkeleton className='w-full h-5' />
                <TailwindSkeleton className='w-full h-5' />
                <TailwindSkeleton className='w-full h-5' />
            </div>
            <div className="category-main-content flex-1 flex flex-col gap-y-1">
              <div className="category-sort-bar flex gap-x-2 items-center bg-white py-2 px-2 rounded-tl rounded-tr">
                  <TailwindSkeleton className='w-20 h-10' />
                  <TailwindSkeleton className='w-20 h-10' />
                  <TailwindSkeleton className='w-20 h-10' />
              </div>
                <ProductListLoading limit={10} />
            </div>
        </div>
    </div>
  )
}
