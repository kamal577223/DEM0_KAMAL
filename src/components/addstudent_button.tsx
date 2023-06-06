import React from "react";
import { IoAddCircleSharp } from "react-icons/io5";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-primary font-Robotoslab text-center border-b border-brand py-4 rounded-[10px] w-[222px] h-[39px] border-[2px] flex justify-center hover:bg-secondary">
      <div className="pl-17 flex items-center">
        <IoAddCircleSharp className="text-black mt-0 ml-0" size={20} />
        <div className="text-black mt-0 ml-2 text-size-16 tracking-wider text-xl">Add new Student</div>
      </div>
    </nav>
  );
};

export default Navbar;
