import { settings } from '@/constants/settings';
import CategoriesTreeList from '@/components/ui/common/CategoriesTreeList';
import HomeCarousel from '@/components/ui/desktop/HomeCarousel';
import ProductsByCateHome from '@/components/ui/common/ProductsByCateHome';
import { Suspense } from 'react';
import NewArticle from '@/components/ui/common/NewArticle';
import CategoriesTreeLoading from '@/components/ui/common/CategoriesTreeList/CategoriesTreeLoading';
import ProductsByCateHomeLoading from '@/components/ui/common/ProductsByCateHome/ProductsByCateHomeLoading';
import NewArticleLoading from '@/components/ui/common/NewArticle/NewArticleLoading';
import HomeCarouselLoading from '@/components/ui/desktop/HomeCarousel/HomeCarouselLoading';
import TwoHotBannersHome from '@/components/ui/desktop/TwoHotBannersHome';

const metaDataBase = settings.metaDataBaseField;

export const metadata = {
  ...metaDataBase,
  title: settings.metaTitle,
  description: settings.metaDesc,
}

export default function HomePage() {
  return (
    <div className='max-w-7xl mx-auto my-3'>
        <section className='section-main-carouse flex gap-x-[10px]'>
            <div className="home-categories-tree w-[220px] relative bg-white rounded">
                <Suspense fallback={<CategoriesTreeLoading />}>
                  <CategoriesTreeList />
                </Suspense>
            </div>
            <div className="home-carouse w-[calc(100%-460px)]">
              <Suspense fallback={<HomeCarouselLoading />}>
                  <HomeCarousel />
              </Suspense>
            </div>
            <div className="home-hot-banner w-[220px]">
            <Suspense fallback={<div>Loading ....</div>}>
                <TwoHotBannersHome />
              </Suspense>
               
            </div>
        </section>
        <Suspense fallback={<ProductsByCateHomeLoading />}>
          <ProductsByCateHome catId={1} limit={5} />
        </Suspense>
        <Suspense fallback={<ProductsByCateHomeLoading />}>
          <ProductsByCateHome catId={377} limit={5} />
        </Suspense>
        <Suspense fallback={<NewArticleLoading />}>
            <NewArticle />
        </Suspense>
        
    </div>
  );
}
