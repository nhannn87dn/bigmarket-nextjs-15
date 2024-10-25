import { getArticleCategories } from "@/constants/APIEndpoints/articles"
import Link from "next/link";

export default async function ArticleCategories() {
  const categories = await getArticleCategories();
  return (
    <div className="my-4 flex flex-wrap gap-4">
      {
        categories && categories.length > 0 && categories.map((c)=>{
          return (
            <Link className="hover:text-primary border border-text-gray-400 bg-white rounded py-1 px-2" key={`ArticleCategories-${c.id}`} href={`/n/${c.url}`}>
            {c.name}
            </Link>
          )
        })
      }
    </div>
  )
}
