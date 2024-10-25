import fetchApi from "@/utils/fetchClientInstance";

export const navigationEndpoints = {
    navByPositionId: {
        v1: (position: string)=> `/v1/navigator/${position}`, ///v1/navigator/:position
    },
    
}



interface TNav {
    name: string;
    url: string;
    icon: string;
    rel: string;
    opennew: number;
    children: TNav[]; 
}

interface TNavResponse {
    success: boolean;
    data: TNav[];
    message: string;
}


export const getNavigationByPosition = async (position: string) : Promise<TNav[] | null>=>{
    try {
        const response = await fetchApi.get<TNavResponse>(`${navigationEndpoints.navByPositionId.v1(position)}`);
        return response.data;
    } catch (error) {
        console.log('getNavigationByPosition',error);
        return null;
    }
}