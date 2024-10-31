import { Link } from "react-router-dom";
import NavLinks from "./NavLinks/NavLinks";
export default function Header() {
  return (
    <header>
      <nav className="flex justify-between items-center px-1 ">
        <Link className="flex items-center font-bold text-argent-blue" to="/">
          <img
            className=" w-[300px]"
            src="./images/argentBankLogo.png"
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <ul className="flex items-center gap-4 p-1">


            <NavLinks />

        </ul>
      </nav>
    </header>
  );
}
