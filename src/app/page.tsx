"use client";
import GmailLogo from "@/components/logo/gmail";
import InstagramLogo from "@/components/logo/instagram";
import LinkedInLogo from "@/components/logo/linkedIn";
import TwitterLogo from "@/components/logo/twitter";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

const NamaBergerak = () => {
  return (
    <TypeAnimation
      sequence={["Cheryl Rio K. P.", 1000, "Web Developer", 1000]}
      speed={1}
      wrapper="h1"
      cursor={true}
      className="py-4 leading-[50px] md:leading-none text-3xl md:text-6xl font-semibold text-[#081021] dark:text-white tracking-wide"
      repeat={Infinity}
    />
  );
};

export default function Home() {
  return (
    <div className="flex flex-col gap-y-20 md:gap-y-0 md:flex-row justify-between items-center min-h-[75vh] py-20 md:py-0 px-16">
      {/* left content */}
      <div className="order-2 md:order-1">
        <h2 className="text-xl text-[#081021] dark:text-white font-medium tracking-widest">
          Hi, <span className="text-[#007aff]">I&#39;am</span>
        </h2>
        {/* <h1 className="py-4 leading-[50px] md:leading-none text-4xl md:text-6xl font-semibold text-[#232222]  dark:text-white tracking-wide">
          Cheryl Rio Kurnia Putra
        </h1> */}
        <NamaBergerak />
        <p className="pt-2 text-[#081021] dark:text-white">
          Welcome to My personal website.
        </p>
        <br />
        <a href="/foto2.webp" download="coba">
          <button className="bg-transparent text-[#007aff] hover:text-white dark:hover:text-[#081021] hover:bg-[#007aff] duration-300 py-3 px-3.5 rounded-lg font-semibold border-[3px] border-[#007aff]">
            Download CV
          </button>
        </a>
        {/* social media link */}
        <div className="pt-8 flex items-center gap-x-6">
          {(
            [
              [
                "instagram",
                "https://instagram.com/cherylrio_",
                <InstagramLogo key={"instagramlogo"} />,
              ],
              [
                "twitter",
                "https://instagram.com/cherylrio_",
                <TwitterLogo key={"twitterlogo"} />,
              ],
              [
                "linkedin",
                "https://instagram.com/cherylrio_",
                <LinkedInLogo key={"linkedinlogo"} />,
              ],
              [
                "gmail",
                "https://instagram.com/cherylrio_",
                <GmailLogo key={"gmaillogo"} />,
              ],
            ] as const
          ).map(([label, link, logo]) => {
            return (
              <div key={label} className="text-white">
                <Link href={link} target="_blank">
                  {logo}
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      {/* right content */}
      <div className="shadow-[0px_0_15px_6px_rgba(0,171,240,0.25)] order-1 md:order-2 border-[#007aff] border-4 rounded-full p-2">
        <div className="overflow-hidden rounded-full">
          <Image
            alt="profile-picture"
            src={"/fotobgblue.webp"}
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>
  );
}
