import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header >
      <nav className="flex justify-between items-center px-1 py-5">
        <Link className="main-nav-logo" to="/login">
          <img
            className="main-nav-logo-image"
            src="./images/argentBankLogo.png"
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div>
          <Link className="main-nav-item" to="/sign-in">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        </div>
      </nav>
    </header>
  );
}
