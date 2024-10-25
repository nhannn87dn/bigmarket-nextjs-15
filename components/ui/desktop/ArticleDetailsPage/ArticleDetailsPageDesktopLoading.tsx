import ArticleCategoriesLoading from '../../common/ArticleCategories/ArticleCategoriesLoading'
import ArticleDetailsLoading from '../../common/ArticleDetails/ArticleDetailsLoading'

export default function ArticleDetailsPageDesktopLoading() {
  return (
    <div className="max-w-7xl mx-auto my-4">
        <ArticleCategoriesLoading />
        <ArticleDetailsLoading />
      </div>
  )
}
