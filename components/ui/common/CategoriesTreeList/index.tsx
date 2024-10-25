import Link from 'next/link'
import Image from 'next/image';
import { getAllCategories } from '@/constants/APIEndpoints/categories';

type TCategoriesList = {
  width?: string;
  height?: string;
}

const CategoriesTreeList =  async ({width = '220px', height='12rem'}: TCategoriesList) => {
  const categoriesList = await getAllCategories();
  return (
    <div className={`categories-list p-1 min-h-[${height}] w-[${width}]`}>
        {
          categoriesList && categoriesList.length > 0 && categoriesList.map((category)=>{
            return (
              <div key={`categories${category.cat_id}`} className="cat-item" data-id={category.cat_id}>
                <Link className='flex gap-x-[8px] items-center' href={`/c/${category.url}`}>
                  <Image priority={true} height={16} width={16} src={category.icon} alt={category.cat_name} />
                  <span>{category.cat_name}</span>
                </Link>
                <div className={`cat-child shadow-lg min-w-[960px] z-50`}>
                {
                  category.childs && category.childs.length > 0 && category.childs.map((child)=>{
                    return (
                         <aside key={child.cat_id} >
                        <Link href={`/c/${child.url}`} data-id={child.cat_id}>{child.cat_name}</Link>
                        {
                          child.childs && child.childs.length > 0 && child.childs.map((grandChild)=>{
                            return (
                                <Link data-id={grandChild.cat_id} key={grandChild.cat_id} href={`/c/${grandChild.url}`}>{grandChild.cat_name}</Link>
                            )
                          })
                        }
                        </aside>
                    
                    )
                  })
                }
                </div>
                
              </div>
            )
          })
        }
    </div>
  )
}

export default CategoriesTreeList