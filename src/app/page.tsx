import Button from "@/components/Button";
import { AiOutlineUser } from "react-icons/ai";

export default function Page() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Hello, Next.js!</h1>
      <Button
        leftIcon={<AiOutlineUser className="text-xl" />}
        intent={"primary"}
      >
        Login
      </Button>
    </div>
  );
}