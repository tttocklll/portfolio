import Image from "next/image";
import styles from "../styles/Home.module.css";
import { ChevronDoubleDownIcon } from "@heroicons/react/24/outline";
import { Twitter, GitHub, Linkedin } from "react-feather";

import Container from "../components/Container";
import ProgrammingImage from "../public/programming.svg";
import Link from "next/link";

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
          <ChevronDoubleDownIcon className="w-8 h-auto my-4 sm:w-10 sm:my-8 animate-bounce" />
        </div>

        <div className="space-y-4 w-full flex flex-col justify-center items-center">
          <h2 className="text-green-600 text-2xl sm:text-4xl after:bg-green-600">
            About Me
          </h2>
          <div className="w-full flex flex-row border border-gray-100 border-solid rounded-2xl shadow-md">
            <div className="sm:w-1/4 w-1/3 flex flex-col justify-center items-center my-8 sm:my-16">
              <Image
                src="/profileIcon.png"
                height={100}
                width={100}
                alt="profile icon"
                className="w-4/5 h-auto sm:mb-8 sm:w-2/3 rounded-full"
              />
              <div className="sm:flex sm:flex-row justify-around w-4/5 sm:w-2/3 hidden">
                <Link href="#">
                  <Twitter className="hover:text-green-600" />
                </Link>
                <Link href="#">
                  <Linkedin className="hover:text-green-600" />
                </Link>
                <Link href="#">
                  <GitHub className="hover:text-green-600" />
                </Link>
              </div>
            </div>

            <div className="w-3/4 pl-10 align-middle">hihi</div>
          </div>
        </div>
      </main>
    </Container>
  );
}
