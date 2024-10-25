import fetchApi from "@/utils/fetchClientInstance";

export const adsEndpoints = {
    adsByPositionId: {
        v1: (position_id: number, limit: number = 5)=> `/v1/ads/${position_id}?limit=${limit}`, ///v1/ads/:position_id?limit=5
    },
    
}



export interface TBanner {
    ad_name: string;
    ad_link: string;
    rel: string;
    ad_code: string;
    position_id: number;
    ad_id: number;
}

export interface TTBannerResponse {
    success: boolean;
    data: TBanner[];
    message: string;
}


export const getBannersByPositionId = async ({
    position_id, limit = 5
}: {
    position_id: number, limit: number
}) : Promise<TBanner[] | null>=>{
    try {
        const response = await fetchApi.get<TTBannerResponse>(adsEndpoints.adsByPositionId.v1(position_id, limit));
        return response.data;
    } catch (error) {
        console.log('getBannersByPositionId',error);
        return null;
    }
}