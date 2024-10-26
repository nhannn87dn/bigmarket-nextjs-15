import Alert from "@/components/ui/common/Alert";
import LogoDesktop from "@/components/ui/desktop/LogoDesktop";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm flex flex-col justify-center">
        <LogoDesktop className="flex flex-col justify-center" />
        <h2 className="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Đăng nhập thành viên
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
            <Alert
              type="success"
              message="Sai email hoặc mật khẩu"
              className="mt-5"
            />
          </div>
        </form>
        <div className="flex items-center justify-between my-4">
          <hr className="flex-1 border-gray-300" />
          <span className="mx-2 text-gray-500">Hoặc</span>
          <hr className="flex-1 border-gray-300" />
        </div>
        <div className="flex justify-center">
          <button className="flex flex-1 items-center gap-x-2 bg-white px-4 py-2 rounded-md hover:bg-slate-100 mr-2">
            <svg
              width="20"
              height="20"
              viewBox="-3 0 262 262"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid"
            >
              <path
                d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                fill="#4285F4"
              />
              <path
                d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                fill="#34A853"
              />
              <path
                d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                fill="#FBBC05"
              />
              <path
                d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                fill="#EB4335"
              />
            </svg>
            Google
          </button>
          <button className="flex flex-1 items-center bg-white px-4 py-2 rounded-md hover:bg-slate-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="38.657999999999994 12.828 207.085 207.085"
            >
              <path
                d="M158.232 219.912v-94.461h31.707l4.747-36.813h-36.454V65.134c0-10.658 2.96-17.922 18.245-17.922l19.494-.009V14.278c-3.373-.447-14.944-1.449-28.406-1.449-28.106 0-47.348 17.155-47.348 48.661v27.149H88.428v36.813h31.788v94.461l38.016-.001z"
                fill="#3c5a9a"
              />
            </svg>
            Facebook
          </button>
        </div>
        <p className="mt-10 text-center text-sm text-gray-500">
          Bạn chưa có tài khoản ?{" "}
          <Link
            href="/register"
            className="font-semibold leading-6 text-primary hover:text-secondary"
          >
            Đăng ký ngay !
          </Link>
        </p>
      </div>
    </div>
  );
}
