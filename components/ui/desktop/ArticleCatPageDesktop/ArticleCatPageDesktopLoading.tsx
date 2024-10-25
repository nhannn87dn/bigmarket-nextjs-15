import React from 'react'
import ArticleCategoriesLoading from '../../common/ArticleCategories/ArticleCategoriesLoading'
import TailwindSkeleton from '../../common/TailwindSkeleton'
import ArticlesListLoading from '../../common/ArticlesList/ArticlesListLoading'

export default function ArticleCatPageDesktopLoading() {
  return (
    <div className="max-w-7xl mx-auto my-3">
        <ArticleCategoriesLoading />
        <div className="page-heading">
          <TailwindSkeleton />
        </div>
        <ArticlesListLoading />
      </div>
  )
}
