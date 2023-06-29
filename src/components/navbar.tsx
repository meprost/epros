"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="py-8 px-16 flex flex-col md:flex-row gap-y-10 md:gap-y-0 justify-between items-center">
      {/* shadow-[0px_5px_15px_4px_rgba(0,0,0,0.25)] bg-[#3A1078]  */}
      <Link href="/">
        <div >
          <Image className="filter drop-shadow-[0_0_10px_rgba(171,240,225,0.5)]" alt="logo" src="/logo.png" width={150} height={100} />
        </div>
      </Link>
      <div className="flex items-center gap-x-8">
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
                  ? "text-[#00abf0] uppercase font-medium"
                  : "text-white uppercase"
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
