import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header>
      <nav className="flex justify-between items-center px-1 py-5">
        <Link className="flex items-center font-bold text-argent-blue" to="/">
          <img
            className="max-w-full w-[200px]"
            src="./images/argentBankLogo.png"
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div>
          <Link
            className="mr-2 text-decoration-none hover:text-active-green"
            to="/login"
          >
            {/* <UserCircleIcon /> */}
            Sign In
          </Link>
        </div>
      </nav>
    </header>
  );
}
