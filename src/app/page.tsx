import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-20 md:gap-y-0 md:flex-row justify-between items-center min-h-[75vh] py-20 md:py-0 px-16">
      {/* left content */}
      <div className="order-2 md:order-1">
        <h2 className="text-3xl text-white font-medium tracking-widest">
          Hi, <span className="text-[#d7ff37]">I&#39;am</span>
        </h2>
        <h1 className="py-4 leading-[50px] md:leading-none text-4xl md:text-6xl font-semibold text-white tracking-wide">
          Cheryl Rio Kurnia Putra
        </h1>
        <p className="pt-2 text-gray-300">
          I&#39;am a student who learn IT from Indonesia.
        </p>

        {/* social media link */}
        <div className="pt-8 flex items-center gap-x-6">
          {(
            [
              [
                "instagram",
                "https://instagram.com/cherylrio_",
                "/instagram.svg",
              ],
              ["twitter", "https://instagram.com/cherylrio_", "/twitter.svg"],
              ["linkedin", "https://instagram.com/cherylrio_", "/linkedin.svg"],
              ["gmail", "https://instagram.com/cherylrio_", "/mail.svg"],
            ] as const
          ).map(([label, link, logo]) => {
            return (
              <div key={label} className="text-white">
                <Link href={link} target="_blank">
                  <Image
                    alt={label}
                    src={logo}
                    width={25}
                    height={25}
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      {/* right content */}
      <div className="order-1 md:order-2 border-white border-4 rounded-full p-2">
        <div className="overflow-hidden rounded-full">
          <Image
            alt="profile-picture"
            src={"https://avatars.githubusercontent.com/u/137313178?v=4"}
            width={250}
            height={250}
          />
        </div>
      </div>
    </div>
  );
}
