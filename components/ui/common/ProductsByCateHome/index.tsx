import Link from "next/link";
import ProductList from "../ProductsList";
import { getProductByCateHome } from "@/constants/APIEndpoints/products";
import { notFound } from "next/navigation";


export default async function ProductsByCateHome({catId = 0, limit = 4}: {catId: number, limit: number}) {
  const cateInfo = await getProductByCateHome({catId, limit});
  if(!cateInfo) return notFound();
  return (
    <section className={`cat_products my-5 cat-${cateInfo.id}`} data-id={cateInfo.id}>
        <div className="cat_head flex justify-between items-center py-3">
          <h2 className="text-primary font-bold text-xl uppercase">{cateInfo.cat_name}</h2>
          <div className="cat_more flex items-center gap-x-2">
            <Link className="flex gap-x-1 items-center hover:font-bold" href={`/c/${cateInfo.url}`}>Xem thêm <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>
</Link>
          </div>
        </div>
        <div className="cat_products_list">
          <ProductList data={cateInfo.products}  />
        </div>
    </section>
  )
}
