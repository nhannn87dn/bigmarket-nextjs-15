'use client'

import { useGlobalStore } from "@/stores/useGlobalStore";

const CategoriesToggle = () => {
  const {isToggleCategories, setToggleCategories} = useGlobalStore();
  return (
    <div
      onClick={setToggleCategories}
      className="border border-grayborder rounded py-2 px-2 cursor-pointer relative group h-[40px]"
    >
      <div className="categories-label flex gap-x-1 items-center">
        {isToggleCategories ? (
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
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        ) : (
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
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        )}

        <span className="text-graytext text-[14px]">Danh mục sản phẩm</span>
      </div>
    </div>
  );
};

export default CategoriesToggle;
