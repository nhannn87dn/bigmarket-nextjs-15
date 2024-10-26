import Link from "next/link";

export default function ShoppingCartPage() {
  return (
    <div className="flex h-screen">
        <div className="w-1/2 p-6 bg-white">
            <div>
              Trang chủ
            </div>
            <h2 className="text-xl font-bold mb-4">Thông Tin Người Mua</h2>
            <form className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Nhập email của bạn"
                required
                autoComplete="email"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="text-sm">
                <Link
                  href="/forget-password"
                  className="font-semibold text-primary hover:text-secondary"
                >
                  Quên mật khẩu ?
                </Link>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Nhập mật khẩu của bạn"
                required
                autoComplete="current-password"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <button type="submit" className="btn-primary">
              Đăng nhập
            </button>
            
          </div>
        </form>
        </div>

        <div className="w-1/2 p-6  bg-slate-100 rounded-t-l-lg rounded-b-l-lg">
        <div>
              Mua thêm
            </div>
            <h2 className="text-xl font-bold mb-4">Giỏ Hàng</h2>
            <ul>
                <li className="flex justify-between items-center border-b border-gray-300 py-2">
                    <span>Sản phẩm A</span>
                    <span>100,000đ</span>
                </li>
                <li className="flex justify-between items-center border-b border-gray-300 py-2">
                    <span>Sản phẩm B</span>
                    <span>150,000đ</span>
                </li>
                <li className="flex justify-between items-center border-b border-gray-300 py-2">
                    <span>Sản phẩm C</span>
                    <span>200,000đ</span>
                </li>
            </ul>
            <div className="flex justify-between font-bold mt-4">
                <span>Tổng Cộng:</span>
                <span>450,000đ</span>
            </div>
        </div>
    </div>
  )
}
