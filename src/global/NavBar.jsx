import { LogOut } from "lucide-react";
import logo from "../assets/logo.png"


const NavBar = () => {
    return (
        <div className="flex w-[100%] justify-between border border-black">
            <img src={logo}></img>
            <button >
              Logout 
            </button>
        </div>
      );
    };

export default NavBar