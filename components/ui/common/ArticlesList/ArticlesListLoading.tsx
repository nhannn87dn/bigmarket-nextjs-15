import React from "react";
import TailwindSkeleton from "../TailwindSkeleton";

export default function ArticlesListLoading({ limit = 8 }: { limit?: number }) {
  return (
    <div className="articles-list grid grid-cols-4 gap-4">
      {[...Array(limit)].map((_, index) => (
        <TailwindSkeleton
          key={`article-list-${index}`}
          className="article-item"
          height="h-[278px]"
        />
      ))}
    </div>
  );
}
