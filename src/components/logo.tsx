"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  const { theme } = useTheme();

  return (
    <Link href="/">
      <div>
        {theme === "light" ? (
          <Image alt="logo" src="/logotextbiru.png" width={180} height={150} />
        ) : (
          <Image alt="logo" src="/logotextwhite.png" width={180} height={150} />
        )}
      </div>
    </Link>
  );
}
