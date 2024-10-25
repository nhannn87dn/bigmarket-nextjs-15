import { TArticle } from "@/constants/APIEndpoints/articles";
import Image from "next/image";
import Link from "next/link";
import ArticleStat from "../ArticleStat";

function ArticleItem({ article }: { article: TArticle }) {
  return (
    <Link href={`/a/${article.url}-a${article.article_id}`} className="article-item flex-1 flex flex-col bg-white rounded-md shadow">
      <div className="article-thumb overflow-hidden w-full rounded-tl-md rounded-tr-md">
        <Image
          className="w-full h-auto"
          alt={article.title}
          priority={true}
          width={286}
          height={140}
          src={article.article_sthumb}
        />
      </div>
      <div className="article-info p-4">
        <h3
          style={{
            minHeight: 42,
            textOverflow: "ellipsis",
            overflow: "hidden",
          }}
          className="font-semibold mb-3"
        >
          {article.title}
        </h3>
        <ArticleStat article={article} />
      </div>
    </Link>
  );
}

export default ArticleItem;
