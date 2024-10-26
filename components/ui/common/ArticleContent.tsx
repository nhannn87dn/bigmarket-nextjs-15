
export default function ArticleContent({goods_desc}: {goods_desc: string}) {
  return (
    <article
            className="article-content"
            dangerouslySetInnerHTML={{ __html: goods_desc }}
    />
  )
}
