
import icons from "../assets/Menu Icons.png";
import profile from "../assets/Intersect.png";
import { CiSearch } from "react-icons/ci";
const Navbar = () => {
    return (
        <div className="flex justify-between items-center shadow-md p-4  rounded-md">
            <div className="flex items-center relative">
            <CiSearch className="absolute left-2 mr-2"/>
            <input type="text" placeholder="Search here.."  className="p-2  pl-8" />
            </div>
            <div className="flex justify-around items-center space-x-3 lg:space-x-10 ">
                <img src={icons} alt="" className="h-8"/>
                <div className="border-r-2 h-8 text-[#C2C2C2]"></div>
              
              <div className="flex justify-evenly items-center space-x-4">
                <div className="text-center">
                    <h6 className="font-semibold">Nayamul Roni</h6>
                    <span><small className="text-gray-500 text-center">Super Admin</small></span>
                </div>
                <img src={profile} alt="" className="hidden md:block"/>
              </div>
            </div>

        </div>
    );
};

export default Navbar;