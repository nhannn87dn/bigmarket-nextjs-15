import Alert from "@/components/ui/common/Alert";
import LogoDesktop from "@/components/ui/desktop/LogoDesktop";
import Link from "next/link";

export default function ForgetPasswordPage() {
    return (
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm flex flex-col justify-center">
        <LogoDesktop className="flex flex-col justify-center" />
        <h2 className="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Khôi phục mật khẩu
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
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

          
          <div className="flex flex-col">
            <button type="submit" className="btn-primary">
              Khôi phục mật khẩu
            </button>
            <Alert
              type="success"
              message="Sai email hoặc mật khẩu"
              className="mt-5"
            />
          </div>
        </form>
        
       
        <p className="mt-10 text-center text-sm text-gray-500">
          Bạn đã có tài khoản ?{" "}
          <Link
            href="/login"
            className="font-semibold leading-6 text-primary hover:text-secondary"
          >
            Đăng nhập tại đây !
          </Link>
        </p>
      </div>
    </div>
    )
  }
  