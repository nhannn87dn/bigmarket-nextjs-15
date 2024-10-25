import fetchApi from "@/utils/fetchClientInstance";

export const categoriesEndpoints = {
    categories: {
        v1: '/v1/categories',
    },
    categoryDetail: {
        v1: '/v1/categories/details'
    },
}



type TCategoryItem = {
    cat_id: number;
      cat_name: string;
      url: string;
      icon: string;
      childs: TCategoryItem[];
    };
    
    export type TCategory = {
    cat_id: number;
      cat_name: string;
      url: string;
      icon: string;
      childs: TCategoryItem[];
    };
    
    export type TCategoryResponse = {
      success: boolean;
      data: TCategory[];
      message: string;
    };
    
    export const getAllCategories = async (): Promise<TCategory[] | null> => {
      try {
        const categories = await fetchApi.get<TCategoryResponse>(categoriesEndpoints.categories.v1, { next: { revalidate: 60 } });
        return categories.data || [];
      } catch (error) {
        console.log('getAllCategories',error);
        return null;
      }
    };