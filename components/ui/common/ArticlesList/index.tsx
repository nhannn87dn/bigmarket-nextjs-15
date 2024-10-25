import { TArticle } from "@/constants/APIEndpoints/articles"
import ArticleItem from "./ArticleItem"
export default async function ArticlesList({
  articles=[]
}:{articles: TArticle[]}) {
 
  return (
    <div className="articles-list grid grid-cols-4 gap-4">
      {
       articles.length > 0 && articles.map((a)=>{
          return <ArticleItem article={a} key={`articles-${a.article_id}`} />
        })
      }
    </div>
  )
}
