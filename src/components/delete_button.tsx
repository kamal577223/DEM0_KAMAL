import React from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";

export default function Button() {
return (
<button className="flex items-center px-4 py-2 font-Robotoslab text-[16px] bg-delete_color focus:outline-none hover:text-secondary rounded-[10px] p-4 m-4 w-[125px] h-[39px] border-delete_color border-[1px]">
<RiDeleteBin6Fill className="mr-2 " />
Delete
</button>
);
}