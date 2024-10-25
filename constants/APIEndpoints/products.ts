import fetchApi from "@/utils/fetchClientInstance";
import { TECShopPager, TResponseBase } from "../types";

export const productsEndpoints = {
    products: {
        v1: '/v1/products',
    },
    productDetailsById: {
        v1: (id:number)=> `/v1/products/details/${id}`,
    },
    productDetailsBySlug: {
        v1: (slug:string)=> `/v1/products/slug/${slug}`,
    },
    productPromotions: {
        v1: '/v1/products/promotion',
    },
    productArticleRelate: {
        v1: '/v1/products/articles',
    },
    productsRelate: {
        v1: (id:number)=> `/v1/products/goodsrelate/${id}`,
    },
    productComments: {
        v1: '/v1/products/comments',
    },
    productReviews: {
        v1: '/v1/products/reviews',
    },
    productsByCateHome: {
        v1: '/v1/products/home',
    },
    productsByKeyword: {
      v1: (keyword: string) => `/v1/search?keywords=${keyword}`
    }
    
    
}


export interface TProductBase {
    goods_id: number;
    goods_name: string;
    shop_price: number;
    market_price: number;
    promote_price: number;
    goods_thumb: string;
    goods_sthumb: string;
    url: string;
    discount: string;
    is_hot: boolean;
    is_new: boolean;
    is_best: boolean;
    seller_note: string;
    source_from: string;
}


export type TProductByCateHome = {
    url: string;
    id: number;
    cat_name: string;
    custom_name: string;
    ads_home: number;
    ads_home_mobile: number;
    cat_child: [];
    products: TProductBase[];
}
export type TProductByCateHomeResponse = {
    success: boolean;
    data: TProductByCateHome;
    message: string;
  };

export const getProductByCateHome = async ({catId, limit = 4}: {catId: number, limit?: number}): Promise<TProductByCateHome | null> => {
    try {
      const response = await fetchApi.get<TProductByCateHomeResponse>(`${productsEndpoints.productsByCateHome.v1}/${catId}?limit=${limit}`, { next: { revalidate: 60 } });
      return response.data;
    } catch (error) {
        console.log('<<=== 🚀 error ===>>',error);
      return null
    }
  };

/* Danh sách sản phẩm */

export interface TProductByCate {
    filter_prices: {
      id: number;
      url: string;
      selected: number;
      price_range: string;
    }[],
    filter_brands: {
      brand_id: number;
      brand_name: string;
      url: string;
      goods_num: number;
      selected: number;

    }[],
    filter_attrs: {
      filter_attr_name: string;
      filter_attr_id: number;
      attr_list: {
        id: number;
        attr_value: string;
        slug: string;
        url: string;
        selected: number;
      }[];
    }[],
    sort_order: {
        sortBy: string;
        sortOrder: string;
    },
    products_list: TProductBase[],
    pagination: TECShopPager,
    category: {
        cat_id: number;
        cat_name: string;
        custom_name: string;
        cat_thumb: string;
    },
    //query: {}
}
  
export interface TProductByCateResponse extends TResponseBase{
  data: TProductByCate;
}

export const getProductByCate = async (queryString: string = ''): Promise<TProductByCate | null> => {
  try {
    const result = await fetchApi.get<TProductByCateResponse>(productsEndpoints.products.v1+queryString, { next: { revalidate: 10 } });
    return result.data;
  } catch (error) {
    console.log(error);
    return null
  }
};
  
/* Chi tiết sản phẩm */

export interface TProductDetails extends TProductBase {
  goods_desc: string;
  goods_img: string;
  goods_brand: string;
  goods_sn: string;
  url: string;
  gallery: {
    img_id: number;
    img_url: string;
    thumb_url: string;
    img_desc: string;
    goods_attr_id: number;
  }[],
  goods_cauhinh: {
    key: string;
    val: string;
  }[],
}

export interface TProductDetailsResponse extends TResponseBase{
  data: TProductDetails;
}


export const getProductDetailById = async (id: number): Promise<TProductDetails | null> => {
  try {
    const result = await fetchApi.get<TProductDetailsResponse>(productsEndpoints.productDetailsById.v1(id), { next: { revalidate: 10 } });
    return result.data;
  } catch (error) {
    console.log('getProductDetailById',error);
    return null;
  }
};

/* Sản phẩm liên quan */
interface TProductRelate extends TProductBase {
  goods_id: number;
}
export interface TProductRelateResponse extends TResponseBase{
  data: TProductRelate[];
}

export const getProductRelate = async (id:number): Promise<TProductRelate[] | null> => {
  try {
    const result = await fetchApi.get<TProductRelateResponse>(productsEndpoints.productsRelate.v1(id), { next: { revalidate: 60 } });
    return result.data || [];
  } catch (error) {
    console.log('getProductRelate',error);
    return null;
  }
};

/* search */
interface TProductByKeyword {
  products_list: TProductBase[],
  pagination: TECShopPager,
}

interface TProductByKeywordResponse extends TResponseBase{
  data: TProductByKeyword;
}

export const getProductByKeyword  = async (keyword: string): Promise<TProductByKeyword | null> => {
  try {
    const result = await fetchApi.get<TProductByKeywordResponse>(productsEndpoints.productsByKeyword.v1(keyword), { next: { revalidate: 60 } });
    return result.data;
  } catch (error) {
    console.log('getProductByKeyword',error);
    return null;
  }
};