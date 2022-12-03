import Image from "next/image";
import Link from "next/link";
import { GitHub, Linkedin, Twitter } from "react-feather";

export default function Profile() {
  return (
    <div className="flex w-full flex-col items-center justify-center space-y-4 pb-8">
      <h2 className="text-2xl text-green-600 sm:text-4xl">Profile</h2>
      <div className="flex w-full flex-col items-center space-y-4 rounded-2xl border border-solid border-gray-100 p-4 shadow-md sm:flex-row sm:space-y-0 sm:p-8">
        <div className="flex w-full flex-row items-center justify-center sm:w-1/4 sm:flex-col">
          <Image
            src="/profileIcon.png"
            height={100}
            width={100}
            alt="profile icon"
            className="h-auto w-1/3 rounded-full sm:mb-4 sm:w-auto"
          />
          <div className="flex w-full flex-col items-center justify-center space-y-2">
            <div className="flex flex-col items-center justify-center sm:hidden">
              <h3 className="text-xl font-semibold text-green-600">大村 瞬也</h3>
              <p className="text-gray-500">OHMURA Tokiya</p>
            </div>
            <div className="flex w-4/5 flex-row justify-around sm:w-2/3">
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

        <div className="flex w-full flex-col justify-center sm:w-3/4">
          <h3 className="mb-2 hidden text-2xl font-semibold text-green-600 sm:flex">
            大村 瞬也 | OHMURA Tokiya
          </h3>
          <p className="text-base sm:text-lg ">静岡県浜松市出身。</p>
          <p className="text-base sm:text-lg ">浜松北高卒業後、東京大学文科II類に入学。</p>
          <p className="text-base sm:text-lg ">
            アルバイト先の経験からITに興味を持ち、理転し工学部電子情報工学科に進学。
          </p>
          <p className="text-base sm:text-lg ">株式会社Stroboでエンジニアインターン。</p>
          <p className="text-base sm:text-lg ">大学卒業後、日本マイクロソフト株式会社に入社。</p>
        </div>
      </div>
    </div>
  );
}
