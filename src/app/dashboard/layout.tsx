import {Roboto_Slab} from "next/font/google";
import Link from "next/link";

interface props {
  children: React.ReactNode;
}

const IsmartFont = Roboto_Slab({ weight: "400", subsets: ["latin"] });

export default function RootLayout({ children }: props) {
  return (
    <div className="h-screen w-screen overflow-hidden">
      <header
        style={IsmartFont.style}
        className="h-14 border-b border-blue-800 flex items-center px-5 text-xl font-mono font-bold"
      >
        ISMART-PR2
      </header>
      <div className="w-full h-full flex">
        <nav className="h-full w-[180px] border-r bg-blue-700 p-8">
          <ul className="w-full flex flex-col gap-8">
            <Link href={"/dashboard"}>
              <li className="text-md hover:font-medium hover:cursor-pointer">
                Home
              </li>
            </Link>
            <Link href={"/dashboard/Add_Student"}>
              <li className="text-md hover:font-medium hover:cursor-pointer">
                Add Student
              </li>
            </Link>
            <Link href={"/dashboard/Add_Staff"}>
              <li className="text-md hover:font-medium hover:cursor-pointer">
                Add Staff
              </li>
            </Link>
            <Link href={"/dashboard/Attendence"}>
              <li className="text-md hover:font-medium hover:cursor-pointer">
                Attendence
              </li>
            </Link>
            <Link href={"/dashboard/Exam_Schedule"}>
              <li className="text-md hover:font-medium hover:cursor-pointer">
                Exam Schedule
              </li>
            </Link>
            <Link href={"/dashboard/Remarks"}>
              <li className="text-md hover:font-medium hover:cursor-pointer">
                Remarks
              </li>
            </Link>
            <Link href={"/dashboard/CIE_&_SEE_Marks"}>
              <li className="text-md hover:font-medium hover:cursor-pointer">
                CIE & SEE Marks
              </li>
            </Link>
            <Link href={"/dashboard/Grievance_Redressal"}>
              <li className="text-md hover:font-medium hover:cursor-pointer">
              Grievance redressal
              </li>
            </Link>
          </ul>
        </nav>
        <main className="w-full h-full border-blue-300 flex items-center justify-center ">
          {children}
        </main>
      </div>
    </div>
  );
}