import TailwindSkeleton from "../TailwindSkeleton";

export default function ArticleDetailsLoading() {
  return (
    <div className={`my-5 article-details-wrapper bg-white rounded p-4`}>
    <div className="article-title">
        <TailwindSkeleton width="w-1/2" />
    </div>
    <div className="article-stat">
        <TailwindSkeleton width="w-5" height="h-5" />
        <TailwindSkeleton width="w-10"  />
        <TailwindSkeleton width="w-5" height="h-5" />
        <TailwindSkeleton width="w-10"  />
    </div>
    
    <div className="my-4 article-content">
        <TailwindSkeleton  />
        <TailwindSkeleton  />
        <TailwindSkeleton  />
        <TailwindSkeleton width="w-1/2" />
        <TailwindSkeleton width="w-1/3" />

    </div>
  </div>
  )
}
