import Image from "next/image";
import { Button } from "antd";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Button type="primary">home</Button>
    </main>
  );
}
