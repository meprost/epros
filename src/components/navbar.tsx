"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Switch from "./switch";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="py-8 px-16 flex flex-col md:flex-row gap-y-10 md:gap-y-0 justify-between items-center">
      {/* shadow-[0px_5px_15px_4px_rgba(0,0,0,0.25)] bg-[#3A1078]  */}
      <Link href="/">
        <div >
          <Image alt="logo" src="/logo2.png" width={65} height={65} />
        </div>
      </Link>
      <div className="flex-wrap flex items-center gap-x-8">
        <Switch />
        {(
          [
            ["/", "home"],
            ["/link", "link"],
            ["/about", "about"],
            ["/skills", "skills"],
            ["/learn", "learn"],
          ] as const
        ).map(([to, label]) => (
          <Link key={label} href={label === "home" ? "/" : `/${label}`}>
            <p
              className={
                pathname === to
                  ? "text-[#007aff] uppercase font-medium"
                  : "text-gray-600 dark:text-white uppercase"
              }
            >
              {label}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
