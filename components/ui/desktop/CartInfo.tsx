import Image from "next/image";
import Link from "next/link";

const CartInfo = () => {
  return (
    <div className="cart-info flex items-center h-[40px] relative group">
      <div className="cart-number flex gap-x-2 cursor-pointer ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-8 icon-gray"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
          />
        </svg>
        <span className="text-gray text-sm ">
          Giỏ hàng của bạn
          <br />(<strong>0</strong>) sản phẩm
        </span>
      </div>
      <div className="cart-list absolute z-50 right-0 top-[40px] w-[250px] shadow-lg p-2 bg-white opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300">
      <ul className="mt-4 text-[12px]">
        <li className="flex justify-between items-center mb-2">
          <div className="flex items-center">
            <Image priority={true} height={50} width={50} src="https://via.placeholder.com/50" alt="Product 1" className="w-12 h-12 rounded mr-2" />
            <span className="text-gray-700">Sản phẩm 1</span>
          </div>
          <span className="text-gray-900 font-semibold">$10.00</span>
        </li>
        <li className="flex justify-between items-center mb-2">
          <div className="flex items-center">
          <Image priority={true} height={50} width={50} src="https://via.placeholder.com/50" alt="Product 1" className="w-12 h-12 rounded mr-2" />
          <span className="text-gray-700">Sản phẩm 2</span>
          </div>
          <span className="text-gray-900 font-semibold">$15.00</span>
        </li>
        <li className="flex justify-between items-center mb-2">
          <div className="flex items-center">
          <Image priority={true} height={50} width={50} src="https://via.placeholder.com/50" alt="Product 1" className="w-12 h-12 rounded mr-2" />
          <span className="text-gray-700">Sản phẩm 3</span>
          </div>
          <span className="text-gray-900 font-semibold">$8.00</span>
        </li>
      </ul>
      <div className="flex justify-between items-center border-t pt-2 mt-4 text-[14px]">
        <span className="font-semibold text-gray-700">Tổng cộng</span>
        <span className="font-bold text-price">$33.00</span>
      </div>
      <Link href='/gio-hang' className="mt-4 w-full flex justify-center bg-orange-500 text-white p-2 rounded hover:bg-orange-600 transition">Xem giỏ hàng</Link>
   
      </div>
    </div>
  );
};

export default CartInfo;
