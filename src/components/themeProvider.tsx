"use client";
import { ThemeProvider as Provider } from "next-themes";
import { useEffect, useState } from "react";

interface Props {
  children: React.ReactNode;
}

export default function ThemeProvider({ children }: Props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return <Provider attribute="class">{children}</Provider>;
}
