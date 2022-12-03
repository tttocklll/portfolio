import Image from "next/image";
import Link from "next/link";
import { ChevronsDown, User, Briefcase, Mail } from "react-feather";

import Container from "../components/Container";
import ProgrammingImage from "../public/programming.svg";
import Profile from "../components/Profile";
import LinkButton from "../components/LinkButton";

export default function Home() {
  return (
    <Container>
      <main className="min-h-screen flex flex-col justify-center items-center py-16">
        <div className="flex flex-col justify-center items-center pb-16">
          <h1 className="sm:text-7xl text-5xl text-center">
            <span className="text-green-600">tttocklll</span>&apos;s Portfolio
          </h1>
          <Image
            src={ProgrammingImage}
            alt="programming"
            className="w-4/5 h-auto my-8 sm:my-16 sm:w-2/3"
          />

          <p className="text-xl sm:text-2xl">Scroll to see more</p>
          <ChevronsDown className="w-8 h-auto my-4 sm:w-10 sm:my-8 animate-bounce" />
        </div>

        <Profile />

        <div className="space-y-4 w-full flex flex-col justify-center items-center">
          <h2 className="text-green-600 text-2xl sm:text-4xl">Links</h2>
          <div className="flex flex-col sm:flex-row items-center sm:justify-between space-y-4 sm:space-y-0 w-full">
            <LinkButton text="About" href="/about" icon={<User />} />
            <LinkButton
              text="Experiences"
              href="/experiences"
              icon={<Briefcase />}
            />
            <LinkButton text="Contact" href="/contact" icon={<Mail />} />
          </div>
        </div>
      </main>
    </Container>
  );
}

const a = () => <Briefcase />;
