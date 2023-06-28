"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="shadow-[0px_5px_15px_4px_rgba(0,0,0,0.25)] bg-[#3A1078] py-8 px-16 flex flex-col md:flex-row gap-y-10 md:gap-y-0 justify-between items-center">
      <Link href='/'>
        <Image alt="logo" src='/logo.png' width={150} height={100} />
      </Link>
      <div className="flex items-center gap-x-8">
        {
            ([
                ["/", "home"],
                ["/link", "link"],
                ["/about", "about"],
                ["/skills", "skills"],
                ["/learn", "learn"],
            ] as const).map(([to, label]) =>(
                <Link key={label} href={label === "home" ? '/' : `/${label}`}>
                    <p className={pathname === to ? 'text-white uppercase font-medium' : 'text-gray-400 uppercase'}>{label}</p>
                </Link>
            ))
        }
      </div>
    </div>
  );
}
