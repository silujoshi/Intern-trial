import { LogOut } from "lucide-react";
import logo from "../assets/logo.png"


const NavBar = () => {
    return (
        <div className="flex w-[100%] justify-between mx-[139] mt-[33]">
            <img src={logo}></img>
            <button 
    
            onClick={() => alert('Log out')} 
            className="flex items-center space-x-2  hover:text-red-800  mr-[50] mt-[33] border-none bg-transparent">
              Logout 
              <LogOut className="text-xl" />
              
            </button>
        </div>
      );
    };

export default NavBar