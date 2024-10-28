export default function LoginForm() {
  return (
    <>
      <form className="flex flex-col items-center">
        <div className="flex flex-col text-left mb-4 w-full">
          <label htmlFor="username" className="font-bold">Username</label>
          <input type="text" id="username" className="mt-1 p-2 border border-gray-300 rounded w-full" />
        </div>
        <div className="flex flex-col text-left mb-4 w-full">
          <label htmlFor="password" className="font-bold">Password</label>
          <input type="password" id="password" className="mt-1 p-2 border border-gray-300 rounded w-full" />
        </div>
        <div className="flex items-center mb-4">
          <input type="checkbox" id="remember-me" className="mr-2" />
          <label htmlFor="remember-me" className="font-bold">Remember me</label>
        </div>

        <button className="w-full py-2 bg-green-500 text-white font-bold rounded">Sign In</button>
      </form>
    </>
  );
}
