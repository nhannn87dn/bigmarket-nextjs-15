
export interface TPagination {
  page: number;
  page_size: number;
  total_records: number;
  total_pages: number
}

export interface TECShopPager {
  page: number;
  size: number;
  page_count: number;
  record_count: number;
  page_first: string;
  page_next: string;
  page_prev: string;
  page_last: string;
  page_number: {
    label: number;
    url: string;
  }[];
}


export  interface TResponseBase {
  success: boolean;
  message: string;
}

export interface TMetaData {
  metaTitle: string,
  metaDescription: string,
  metaKeywords: string,
  metaRobots: string,
}
