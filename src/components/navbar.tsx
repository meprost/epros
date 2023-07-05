"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Switch from "./switch";
import Logo from "./logo";
import { Dispatch, SetStateAction, useState } from "react";

const Hamburger = ({
  isHidden,
  setIsHidden,
}: {
  isHidden: boolean;
  setIsHidden: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <label className="hamburger md:hidden ">
      <input
        type="checkbox"
        checked={isHidden}
        onChange={() => setIsHidden(!isHidden)}
      ></input>
      <svg viewBox="0 0 32 32">
        <path
          className="line line-top-bottom"
          d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
        ></path>
        <path className="line" d="M7 16 27 16"></path>
      </svg>
    </label>
  );
};

const Slider = ({ isHidden }: { isHidden: boolean }) => {
  const pathname = usePathname();

  return (
    <div
      className={`
      ${!isHidden ? "-top-60" : "top-32"}
    absolute right-16 transition-all duration-300 ease-out bg-[#007aff]/30 backdrop-blur-sm text-black z-20 py-8 rounded-md w-[50vw] md:hidden flex flex-col gap-y-6 justify-start items-center
    `}
    >
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
                : "text-white uppercase"
            }
          >
            {label}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default function Navbar() {
  const [isHidden, setIsHidden] = useState(false);
  const pathname = usePathname();

  return (
    <div className="overflow-hidden">
      <Slider isHidden={isHidden} />
      <div className="py-8 px-16 bg-white dark:bg-[#0E111E] flex md:flex-row gap-y-10 md:gap-y-0 justify-between items-center relative z-30">
        {/* shadow-[0px_5px_15px_4px_rgba(0,0,0,0.25)] bg-[#3A1078]  */}
        <Logo />
        <Hamburger isHidden={isHidden} setIsHidden={setIsHidden} />
        <div className="hidden flex-wrap md:flex items-center gap-x-8">
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
                    : "text-black dark:text-white uppercase"
                }
              >
                {label}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
