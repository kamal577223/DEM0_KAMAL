import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-primary font-Robotoslab text-center border-b border-brand py-4 rounded-[10px] w-[483px] h-[51px] border-[2px] flex justify-center">
      <div className="pl-0 flex items-center">
        <h1 className="text-black mt-1 ml-6 tracking-wider text-xl">ADD NEW STUDENT</h1>
      </div>
      <div className="flex items-center"></div>
    </nav>
  );
}

export default Navbar;
