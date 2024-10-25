import TailwindSkeleton from '../TailwindSkeleton'

export default function CategoriesTreeLoading() {
  return (
    <div className='p-1 flex flex-col'>
        <TailwindSkeleton limit={10} />
    </div>
  )
}
