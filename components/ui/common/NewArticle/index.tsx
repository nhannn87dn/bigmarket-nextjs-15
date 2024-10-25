import Link from "next/link";
import Section from "../Section";
import SectionHeader from "../Section/SectionHeader";
import Image from "next/image";
import { getNewArticles, TNewArticle } from "@/constants/APIEndpoints/articles";
import ArticleStat from "../ArticleStat";
/* Xem thêm tin tức */
const ButtonMore = ()=>{
    return (
        <Link className="flex gap-x-1 items-center" href={'/n/tin-tuc'}>Xem thêm <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
      </svg></Link>
    )
}

const ArticleItem = ({data}: {data: TNewArticle})=>{
  return (
    <Link href={`/a/${data.url}-a${data.article_id}`} className="article-item flex-1 flex flex-col">
      <div className="article-thumb overflow-hidden w-full rounded-md h-[167px]">
        <Image className="w-full h-auto" alt={data.title} priority={true} width={286} height={140} src={data.article_sthumb} />
      </div>
      <div className="article-info">
        <h3 style={{
          minHeight: 42,
          textOverflow: 'ellipsis',
          overflow: 'hidden',
        }} className="font-semibold my-3">{data.title}</h3>
        <ArticleStat article={data} />
      </div>
    </Link>
  )
}

export default async function NewArticle() {
  const articles =  await getNewArticles();
  return (
    <Section className="section-article bg-white p-4 rounded-md">
        <SectionHeader title="Tin mới" moreExtra={<ButtonMore />} />
        <div className="article-list grid grid-cols-4 gap-4 mt-4">
          {
            articles && articles.length > 0 && articles.map((a)=>{
              return <ArticleItem key={`new-article-${a.article_id}`} data={a} />
            })
          }
            
        </div>
    </Section>
  )
}
