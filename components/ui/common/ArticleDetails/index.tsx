import { getArticleDetailsById} from "@/constants/APIEndpoints/articles";
import ArticleStat from "../ArticleStat";
import { notFound, redirect } from "next/navigation";

interface TArticleDetails {
  articleId: number;
  slug?: string;
  className?: string;
  checkUrl?:boolean
}
export default async function ArticleDetails({articleId, slug='', checkUrl=true,className = ''}: TArticleDetails) {
  const articleDetails = await getArticleDetailsById(articleId);
  if(!articleDetails) return notFound();

  //CHUYEN HUONG neu URL khong dung
  if(checkUrl){
    const rightURL = `/a/${articleDetails.article.url}-a${articleDetails.article.article_id}`;
    const currentURL = `/a/${slug}`;
    if(rightURL !== currentURL){
      redirect(rightURL)
    }
  }
  return (
    <div className={`${className} article-details-wrapper bg-white rounded p-4`}>
        <h1 className="font-bold text-2xl">{articleDetails.article.title}</h1>
        <ArticleStat className="my-4" article={{
          author: articleDetails.article.author,
          add_time: articleDetails.article.add_time,
        }} />
        <article className="my-4 article-content" dangerouslySetInnerHTML={{ __html: articleDetails.article.content }} />
      </div>
  )
}
