import TailwindSkeleton from '@/components/ui/common/TailwindSkeleton'

export default function ProductDetailsPageDesktopLoading() {
  return (
    <div className="max-w-7xl mx-auto my-4">
      <section className="product-info-top flex gap-x-4">
          <div className="product-info-top-basic flex-1 bg-white rounded p-3 flex gap-6">
              <TailwindSkeleton width='w-[400px]' height='h-[400px]'  />
              <div className="product-lines flex-1">
                    <TailwindSkeleton   />
                  <div className="product-code text-gray-500 my-2 flex gap-x-2">
                     <TailwindSkeleton width='w-1/2'  />  <TailwindSkeleton width='w-1/2'   />
                  </div>
                  <p className="text-gray-500"><TailwindSkeleton width='w-1/2'   /></p>
                  <TailwindSkeleton width='w-1/2'  /> 
                  <div className="product-actions flex gap-x-2 border-t py-4 border-t-slate-200 border-dashed">
                        <TailwindSkeleton width='w-1/2'  /> 
                        <TailwindSkeleton width='w-1/2'  /> 
                  </div>
              </div>
          </div>
          <div className="product-info-top-extra w-[300px]">
              <ul className="bg-white rounded p-3 flex flex-col gap-y-3">
                <li className="extra-title font-bold text-md">
                    <TailwindSkeleton />
                </li>
                <li className="extra-item flex gap-x-1 items-center">
                        <TailwindSkeleton width='w-4' height='h-4' /> <TailwindSkeleton />
                </li>
                <li className="extra-item flex gap-x-1 items-center">
                        <TailwindSkeleton width='w-4' height='h-4' /> <TailwindSkeleton />
                </li>
                <li className="extra-item flex gap-x-1 items-center">
                        <TailwindSkeleton width='w-4' height='h-4' /> <TailwindSkeleton />
                </li>
            
              </ul>
          </div>
      </section>
      <section className="product-details my-4 flex rounded p-3 bg-white gap-x-4">
        
        <div className="article-container flex-1">
          <h2 className="article-title font-bold text-xl  mb-3">Mô tả sản phẩm</h2>
             <TailwindSkeleton  /> 
             <TailwindSkeleton  />
             <TailwindSkeleton  />
             <TailwindSkeleton  />
            <TailwindSkeleton width='w-1/2'  /> 
        </div>
        <TailwindSkeleton width="w-[360px]" height='w-[300px]' />
      </section>
      
    </div>
  )
}
