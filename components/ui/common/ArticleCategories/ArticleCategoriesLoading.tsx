import TailwindSkeleton from "../TailwindSkeleton";

export default function ArticleCategoriesLoading(){
    return (
        <div className="my-4 flex flex-wrap gap-4">
            <TailwindSkeleton height={'h-8'} width={'w-30'} />
            <TailwindSkeleton height={'h-8'} width={'w-30'} />
            <TailwindSkeleton height={'h-8'} width={'w-30'} />
            <TailwindSkeleton height={'h-8'} width={'w-30'} />
            <TailwindSkeleton height={'h-8'} width={'w-30'} />
        </div>
    )
}