import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <UserButton afterSignOutUrl="/" />
      <h2>HOME PAGE</h2>
    </div>
  );
}
