import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="py-8 px-16 flex flex-col md:flex-row gap-y-10 md:gap-y-0 justify-between items-center">
      <Link href='/'>
        <Image alt="logo" src='/logo.png' width={150} height={100} />
      </Link>
      <div className="flex items-center gap-x-8">
        {
            ([
                "home",
                "link",
                "about",
                "skills",
            ] as const).map((label) =>(
                <Link href={label === "home" ? '/' : `/${label}`}>
                    <p className="uppercase text-white">{label}</p>
                </Link>
            ))
        }
      </div>
    </div>
  );
}
