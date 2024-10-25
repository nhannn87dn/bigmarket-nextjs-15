import fetchApi from "@/utils/fetchClientInstance";
import { TMetaData, TPagination, TResponseBase } from "../types";


export interface TArticleBase {
    article_id: number;
    title: string;
    url: string;
    add_time: string;
    click_count: number;
}
/* Danh sách tin mới article  */
export interface TNewArticle extends TArticleBase {
    description: string;
    author: string;
    article_sthumb: string;
    article_mthumb: string;
}

export interface TNewArticleResponse extends TResponseBase {
    data: TNewArticle[];
};
  

export const articleEndpoints = {
    newArticle: {
        v1: '/v1/articles/news', 
    },
    getArticlesByCateId: {
        v1: ({catId, page, limit}: {catId: number, page:number, limit:number})=> `/v1/articles?cat_id=${catId}&page=${page}&limit=${limit}`
    },
    getArticlesByCateSlug: {
        v1: ({catSlug, page, limit}: {catSlug: string,page:number, limit:number})=> `/v1/articles?cat_id=4&cat_slug=${catSlug}&page=${page}&limit=${limit}`
    },
    getArticleDetailById: {
        v1: (id: number)=> `/v1/articles/details/${id}`
    },
    getArticleCategories: {
        v1: '/v1/articles/categories'
    },
    
}

/* Lấy danh sách tin mới */
export const getNewArticles = async (): Promise<TNewArticle[] | null> => {
    try {
      const result = await fetchApi.get<TNewArticleResponse>(articleEndpoints.newArticle.v1, { next: { revalidate: 60 } });
      return result.data || [];
    } catch (error) {
      console.log('getNewArticles',error);
      return null;
    }
};

/* Lấy danh sách tin theo slug danh mục */

export interface TArticle extends TArticleBase {
  description: string;
  author: string;
  article_sthumb: string;
  article_thumb: string;
}
export interface TArticlesByCate {
  filters: {
    keywords: string;
    cat_id: number;
    cat_slug: string;
  };
  metaData: TMetaData & {cat_name: string};
  article_list: TArticle[];
  pagination: TPagination;
}
/* Danh sách tin article cat */
export interface TArticlesListResponse extends TResponseBase {
  data: TArticlesByCate;
}

export const getArticlesByCateSlug = async ({catSlug, page=1, limit=9}: {
    catSlug: string, page:number, limit:number
}): Promise<TArticlesByCate | null> => {
    try {
      const result = await fetchApi.get<TArticlesListResponse>(articleEndpoints.getArticlesByCateSlug.v1({
        catSlug, page, limit
      }), { next: { revalidate: 60 } });
      return result.data;
    } catch (error) {
      console.log('getArticlesByCateSlug',error);
      return null;
    }
};


/* Lấy danh sách tin theo slug danh mục */
export type TArticleCategories = {
  id: number;
  name: string;
  url: string
}

export interface TArticleCategoriesResponse extends TResponseBase{
  data: TArticleCategories[];
}

export const getArticleCategories = async (): Promise<TArticleCategories[] | null> => {
  try {
    const result = await fetchApi.get<TArticleCategoriesResponse>(articleEndpoints.getArticleCategories.v1, { next: { revalidate: 60 } });
    return result.data || [];
  } catch (error) {
    console.log('getArticleCategories',error);
    return null;
  }
};


/* Get article details */
export interface TArticleDetailsFields {
  article_id: number;
  title: string;
  custom_title: string;
  content: string;
  author: string;
  article_thumb: string;
  add_time: string;
  url: string;
  click_count: number;
  description: string;
  disable_comment: boolean;
}
export interface TArticleDetails {
  metaData: TMetaData,
  article: TArticleDetailsFields
}

export interface TArticleDetailsResponse extends TResponseBase{
  data: TArticleDetails;
}

export const getArticleDetailsById = async (id: number): Promise<TArticleDetails | null> => {
  try {
    const result = await fetchApi.get<TArticleDetailsResponse>(articleEndpoints.getArticleDetailById.v1(id), { next: { revalidate: 60 } });
    return result.data;
  } catch (error) {
    console.log('getArticleDetailsById',error);
    return null;
  }
};
