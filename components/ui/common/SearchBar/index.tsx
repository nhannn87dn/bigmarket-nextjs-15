'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react';
import Link from 'next/link';


const SearchBar = () => {
  const [isFocus, setIsFocus] = useState(false);
  const [keyword, setKeyword] = useState('');
  const router = useRouter();

  return (
    <div onMouseLeave={()=>{
      setIsFocus(false)
    }} className="search-form relative h-[40px] w-[420px]">
      <form onSubmit={(e)=>{
          e.preventDefault();

          if(keyword !== ''){
            router.push(`/tim-kiem?q=${encodeURIComponent(keyword).replace(/%20/g, '+')}`)
          }
      }} className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-primary sm:max-w-md">
        <input
        onChange={(e)=>{
          setKeyword(e.target.value)
        }}
        onFocus={()=>{
          setIsFocus(true)
        }}
        value={keyword}
        
          type="text"
          name="keyword"
          id="keyword"
          className="border-0 bg-transparent shadow-none ring-0 py-2 px-3 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 outline-none"
          placeholder="Tìm kiếm sản phẩm ..."
          autoComplete='off'
        />
        <button type="submit" className="px-2 btn-ghost hover:bg-transparent">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 icon-gray"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
      </form>
      {
        isFocus && (
          <div className="search-recommend flex gap-3 flex-wrap absolute top-[40px] left-0 bg-white z-10 p-3 shadow rounded min-w-[420px]">
            <span>Từ khóa gợi ý: </span>
            <Link href="/tim-kiem?keyword=iphone" className="text-gray-500">
              iPhone
            </Link>
            <Link href="/tim-kiem?keyword=macbook" className="text-gray-500 hover:text-primary">Macbook</Link>
            <Link href="/tim-kiem?keyword=airpod" className="text-gray-500 hover:text-primary">Airpod</Link>
            <Link href="/tim-kiem?keyword=ipad" className="text-gray-500 hover:text-primary">iPad</Link>
          </div>
        )
      }
    </div>
  );
};

export default SearchBar;
