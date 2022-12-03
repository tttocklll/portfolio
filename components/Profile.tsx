import Image from "next/image";
import Link from "next/link";
import { GitHub, Linkedin, Twitter } from "react-feather";

export default function Profile() {
  return (
    <div className="space-y-4 w-full flex flex-col justify-center items-center pb-8">
      <h2 className="text-green-600 text-2xl sm:text-4xl">Profile</h2>
      <div className="w-full flex sm:flex-row flex-col items-center border border-gray-100 border-solid rounded-2xl shadow-md p-4 sm:p-8 space-y-4 sm:space-y-0">
        <div className="sm:w-1/4 w-full flex flex-row sm:flex-col justify-center items-center">
          <Image
            src="/profileIcon.png"
            height={100}
            width={100}
            alt="profile icon"
            className="sm:mb-4 h-auto w-1/3 sm:w-auto rounded-full"
          />
          <div className="w-full flex flex-col justify-center items-center space-y-2">
            <div className="flex flex-col justify-center items-center sm:hidden">
              <h3 className="text-xl text-green-600 font-semibold">
                大村 瞬也
              </h3>
              <p className="text-gray-500">OHMURA Tokiya</p>
            </div>
            <div className="flex flex-row justify-around w-4/5 sm:w-2/3">
              <Link href="https://twitter.com/tttockllll">
                <Twitter className="hover:text-green-600" />
              </Link>
              <Link href="https://www.linkedin.com/in/tttocklll/">
                <Linkedin className="hover:text-green-600" />
              </Link>
              <Link href="https://github.com/tttocklll">
                <GitHub className="hover:text-green-600" />
              </Link>
            </div>
          </div>
        </div>

        <div className="sm:w-3/4 w-full flex flex-col justify-center">
          <h3 className="hidden sm:flex text-2xl mb-2 text-green-600 font-semibold">
            大村 瞬也 | OHMURA Tokiya
          </h3>
          <p className="text-base sm:text-lg ">静岡県浜松市出身。</p>
          <p className="text-base sm:text-lg ">
            浜松北高卒業後、東京大学文科II類に入学。
          </p>
          <p className="text-base sm:text-lg ">
            アルバイト先の経験からITに興味を持ち、理転し工学部電子情報工学科に進学。
          </p>
          <p className="text-base sm:text-lg ">
            株式会社Stroboでエンジニアインターン。
          </p>
          <p className="text-base sm:text-lg ">
            大学卒業後、日本マイクロソフト株式会社に入社。
          </p>
        </div>
      </div>
    </div>
  );
}