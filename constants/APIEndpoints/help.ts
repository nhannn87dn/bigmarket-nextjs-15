import fetchApi from "@/utils/fetchClientInstance";
import { TResponseBase } from "../types";

interface HelpLink {
    article_id: number;
    title: string;
    url: string;
    link_url: string;
}

interface THelp {
    [key: string]: {
        url: string;
        cat_name: string;
        article: {
            [key: string]: HelpLink
        }
    }
}

interface THelpResponse extends TResponseBase {
    data: THelp;
}

export const getHelpLinks = async (): Promise<THelp | null> => {
    try {
        const response = await fetchApi.get<THelpResponse>(`/v1/helps`);
        return response.data;
    } catch (error) {
        console.log('getHelpLinks', error);
        return null;
    }
}
