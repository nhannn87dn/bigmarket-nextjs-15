import { TSearchParams } from "@/components/ui/common/category/type";


export const buildUri = (
    baseUrl: string,
    searchParams: TSearchParams
  ) => {
    //const separator = baseUrl.includes('?') ? '&' : '?';
    let queryString = '';
  
    if (searchParams.f) {
      queryString += `&f=${searchParams.f}`; // Dùng dấu & cho tham số
    }
    if (searchParams.b) {
      queryString += `&b=${searchParams.b}`; // Dùng dấu & cho tham số
    }
    if (searchParams.rc) {
      queryString += `&rc=${searchParams.rc}`; // Dùng dấu & cho tham số
    }
    if (searchParams.price_min) {
      queryString += `&price_min=${searchParams.price_min}`; // Dùng dấu & cho tham số
    }
    if (searchParams.price_max) {
      queryString += `&price_max=${searchParams.price_max}`; // Dùng dấu & cho tham số
    }
    if (searchParams.p) {
      queryString += `&p=${searchParams.p}`; // Dùng dấu & cho tham số
    }
    if (searchParams.sort && searchParams.order) {
      queryString += `&sort=${searchParams.sort}&order=${searchParams.order}`; // Dùng dấu & cho tham số
    }
  
    // Thêm dấu ? cho tham số đầu tiên
    if (queryString) {
      queryString = (baseUrl.includes('?') ? queryString.substring(1) : '?' + queryString.substring(1));
    }
  
    return baseUrl + queryString;
  };
  