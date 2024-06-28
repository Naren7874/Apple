import {navLists} from '../constants'
import { appleImg, searchImg, bagImg } from "../utils";
function Navbar (){
    return (
      <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center ">
        <nav className=" flex  w-full screen-max-width ">
          <img src={appleImg} alt="APPLE" width={14} height={18} />
          <div className=" flex gap-7 flex-1 cursor-pointer  justify-center max-sm:hidden">
            {navLists.map((nav) => (
              <div className="hover:font-bold" key={nav}>
                {nav}
              </div>
            ))}
          </div>
          <div className=" flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
            <img src={searchImg} alt="searchIcon" width={18} height={198} />
            <img src={bagImg} alt="bagIcon" width={18} height={18} />
          </div>
        </nav>
      </header>
    );
}
export default Navbar
