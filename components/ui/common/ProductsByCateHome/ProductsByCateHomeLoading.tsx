import ProductListLoading from '../ProductsList/ProductListLoading'
import TailwindSkeleton from '../TailwindSkeleton'

export default function ProductsByCateHomeLoading() {
  return (
    <section className={`cat_products my-5`}>
        <div className="cat_head flex justify-between items-center py-3">
          <h2 className="text-primary font-bold text-xl uppercase">
            <TailwindSkeleton className='w-1/2 h-10' />
          </h2>
          <div className="cat_more flex items-center gap-x-2">
                <TailwindSkeleton className='w-50 h-10' />
          </div>
        </div>
        <div className="cat_products_list">
          <ProductListLoading limit={5} />
        </div>
    </section>
  )
}
