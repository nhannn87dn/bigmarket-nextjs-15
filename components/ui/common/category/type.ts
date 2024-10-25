export interface TSearchParams {
  page?: number | undefined;
  f?: string | undefined;
  rc?: "moi-ve" | "ban-chay" | "noi-bat" | "giam-gia" | undefined;
  brand_id?: number | undefined;
  price_min?: number | undefined;
  price_max?: number | undefined;
  sort?: "sort_order" | "shop_price" | undefined;
  order?: "DESC" | "ASC" | undefined;
  p?: string | undefined; // price slug,
  b?: string | undefined; // brand slug
};

export interface TParams {
  slug: string | undefined;
}

export interface TCategoryRequest {
  params: Promise<TParams>;
  searchParams: Promise<TSearchParams>;
}