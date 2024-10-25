import { TProductDetails } from '@/constants/APIEndpoints/products';
import React from 'react'

export default function ProductParameter({
className = '',
data = []
}: {
  className?: string;
  data: TProductDetails['goods_cauhinh']
}) {
  return (
    <div className={`${className} product-table-params`}>
      <h2 className='font-bold text-xl mb-3'>Thông tin sản phẩm</h2>
        <table className='table-auto'>
          <tbody>
            {
              data.length > 0 && data.map((r,index)=>{
                return (
                  <tr className='odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700' key={`product-table-params-${index}`}>
                      <td className='p-2'>{r.key}</td>
                      <td className='p-2'>{r.val}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
    </div>
  )
}
