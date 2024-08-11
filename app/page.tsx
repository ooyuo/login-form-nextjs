import "@/lib/db";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <span className="text-7xl flex justify-center items-center"> 🥕</span>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Welcome!!
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">반가워요</p>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm space-y-6">
          <Link
            href="/log-in"
            className="flex w-full justify-center rounded-md bg-[#FF7E36] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#e56e2e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF7E36]"
          >
            로그인
          </Link>

          <Link
            href="/create-account"
            className="flex w-full justify-center rounded-md bg-gray-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
          >
            회원가입
          </Link>
        </div>
      </div>
    </>
  );
}
