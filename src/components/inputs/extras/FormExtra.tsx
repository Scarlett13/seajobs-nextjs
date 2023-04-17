import Link from "next/link";

interface IFormExtra {
  isTa: boolean;
}

export default function FormExtra({ isTa }: IFormExtra) {
  return (
    <div className="flex items-center justify-between ">
      <div className="flex items-center">
        <input
          id="remember-me"
          name="remember-me"
          type="checkbox"
          className={`h-4 w-4  rounded ${
            isTa
              ? "text-white hover:text-gray-100 border-gray-300"
              : "text-gray-900 hover:text-gray-500 border-gray-600"
          }`}
        />
        <label
          htmlFor="remember-me"
          className={`ml-2 block text-sm  ${
            isTa ? "text-white" : "text-gray-900"
          }`}
        >
          Remember me
        </label>
      </div>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <div className="text-sm">
        <Link
          href="/user/forgotpassword"
          className={`font-medium  ${
            isTa
              ? "text-white hover:text-gray-100"
              : "text-gray-900 hover:text-gray-500"
          }`}
        >
          Forgot your password?
        </Link>
      </div>
    </div>
  );
}
