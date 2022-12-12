import Image from "next/image";
import { ChevronsDown, User, Briefcase, Mail } from "react-feather";

import LinkButton from "../components/LinkButton";
import Profile from "../components/Profile";
import ProgrammingImage from "../public/programming.svg";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center py-16">
      <div className="flex flex-col items-center justify-center pb-16">
        <h1 className="text-center text-5xl sm:text-7xl">
          Hi, I&apos;m <span className="text-green-600">tocky</span>!
        </h1>
        <Image
          src={ProgrammingImage}
          alt="programming"
          className="my-8 h-auto w-4/5 sm:my-16 sm:w-2/3"
        />

        <p className="text-xl sm:text-2xl">Scroll to see more</p>
        <ChevronsDown className="my-4 h-auto w-8 animate-bounce sm:my-8 sm:w-10" />
      </div>

      <Profile />

      <div className="flex w-full flex-col items-center justify-center space-y-4">
        <h2 className="text-2xl text-green-600 sm:text-4xl">Links</h2>
        <div className="flex w-full flex-col items-center space-y-4 sm:flex-row sm:justify-between sm:space-y-0">
          <LinkButton text="About" href="/about" icon={<User />} />
          <LinkButton text="Experiences" href="/experiences" icon={<Briefcase />} />
          <LinkButton text="Contact" href="https://forms.gle/t18jvVB6x1HdnXbj7" icon={<Mail />} />
        </div>
      </div>
    </main>
  );
}
