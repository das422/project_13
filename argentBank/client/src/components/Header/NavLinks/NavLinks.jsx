import { CircleUserRound, LogOut } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { logout } from "../../../store/slices/authSlices";

const NavLinks = () => {
  const { token } = useSelector((state) => state.login);
  const { user } = useSelector((state) => state.user);

  const dispatch = useDispatch();

   return (
     <>
       {!token ? (
         <li className="flex items-center">
           <NavLink to="/login" className="flex items-center gap-4">
             <CircleUserRound /> <span>Sign in</span>
           </NavLink>
         </li>
       ) : (
         <>
           <li className="flex items-center">
             <NavLink to="/profile" className="flex items-center">
               <CircleUserRound /> <span>{user.firstName}</span>
             </NavLink>
           </li>
           <li className="flex items-center ">
             <NavLink
               to="/login"
               onClick={() => dispatch(logout())}
               className="flex items-center gap-4"
             >
               <LogOut /> <span >Sign Out</span>
             </NavLink>
           </li>
         </>
       )}
     </>
   );
};

export default NavLinks;
