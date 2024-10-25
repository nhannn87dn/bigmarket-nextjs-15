
/* 
- Các biến môi trường env trong nextjs 
chỉ dùng trực tiếp được trong các server component
- client server thì cần prefix NEXT_PUBLIC_
*/


export const globalConfig = {
  BACKEND_API: process.env.NEXT_PUBLIC_BACKEND_API || '',
  BACKEND_URL: process.env.NEXT_PUBLIC_BACKEND_URL || '',
  BACKEND_CDN: process.env.NEXT_PUBLIC_BACKEND_CDN || '',
  BACKEND_X_API_KEY: process.env.BACKEND_X_API_KEY || '',
 
}
