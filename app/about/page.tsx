import Link from "next/link";
import { ExternalLink } from "react-feather";
import Profile from "../components/Profile";

export default function About() {
  return (
    <>
      <div className="space-y-4 w-full flex flex-col justify-center items-center pb-8">
        <h2 className="text-green-600 text-2xl sm:text-4xl">About Me</h2>
        <div>
          <ol className="border-l border-gray-300">
            <li>
              <div className="flex flex-start items-center pt-3">
                <div className="bg-gray-300 w-2 h-2 rounded-full -ml-1 mr-3"></div>
                <p className="text-gray-500 text-sm">1999/11/02</p>
              </div>
              <div className="mt-0.5 ml-4 mb-6">
                <h4 className="text-gray-800 font-semibold text-xl mb-1.5">
                  静岡県生まれ
                </h4>
              </div>
            </li>
            <li>
              <div className="flex flex-start items-center pt-2">
                <div className="bg-gray-300 w-2 h-2 rounded-full -ml-1 mr-3"></div>
                <p className="text-gray-500 text-sm">2015/04</p>
              </div>
              <div className="mt-0.5 ml-4 mb-6">
                <h4 className="text-gray-800 font-semibold text-xl mb-1.5">
                  静岡県立浜松北高校 入学
                </h4>
              </div>
            </li>
            <li>
              <div className="flex flex-start items-center pt-2">
                <div className="bg-gray-300 w-2 h-2 rounded-full -ml-1 mr-3"></div>
                <p className="text-gray-500 text-sm">2018/04</p>
              </div>
              <div className="mt-0.5 ml-4 pb-5">
                <h4 className="text-gray-800 font-semibold text-xl mb-1.5">
                  東京大学 教養学部 文科II類 入学
                </h4>
              </div>
            </li>
            <li>
              <div className="flex flex-start items-center pt-2">
                <div className="bg-gray-300 w-2 h-2 rounded-full -ml-1 mr-3"></div>
                <p className="text-gray-500 text-sm">2020/04</p>
              </div>
              <div className="mt-0.5 ml-4 pb-5">
                <h4 className="text-gray-800 font-semibold text-xl mb-1.5">
                  東京大学 工学部{" "}
                  <Link
                    href="https://www.ee.t.u-tokyo.ac.jp/"
                    className="text-green-600 underline underline-offset-2"
                  >
                    電子情報工学科
                  </Link>{" "}
                  進学
                </h4>
                <p className="text-gray-500 mb-3">
                  -{" "}
                  <Link
                    href="https://www.gavo.t.u-tokyo.ac.jp/"
                    className="text-green-600 underline underline-offset-2 font-bold"
                  >
                    峯松研究室
                  </Link>{" "}
                  所属
                </p>
                <p className="text-gray-500 mb-3">
                  - 2022年度{" "}
                  <span className="text-green-600 font-bold">
                    工学部長賞 (研究)
                  </span>{" "}
                  受賞
                </p>
                <p className="text-gray-500 mb-3">
                  - 卒業論文: 「咽喉マイクを用いた 背景雑音に頑健な
                  英語シャドーイング音声の自動評価」
                </p>
              </div>
            </li>
            <li>
              <div className="flex flex-start items-center pt-2">
                <div className="bg-gray-300 w-2 h-2 rounded-full -ml-1 mr-3"></div>
                <p className="text-gray-500 text-sm">2022/04</p>
              </div>
              <div className="mt-0.5 ml-4 pb-5">
                <h4 className="text-gray-800 font-semibold text-xl mb-1.5">
                  日本マイクロソフト株式会社 入社
                </h4>
                <p className="text-gray-500 mb-3">
                  - Microsoft Teams サポート エンジニア
                </p>
              </div>
            </li>
          </ol>
        </div>
      </div>

      <div className="space-y-4 w-full flex flex-col justify-center items-center pb-8">
        <h2 className="text-green-600 text-2xl sm:text-4xl">Awards</h2>
        <div className="flex flex-col sm:w-3/4 w-full">
          <div className="py-2 min-w-full">
            <table className="min-w-full">
              <thead className="border-b-4">
                <tr>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-500 sm:px-6 px-2 py-4 text-left"
                  >
                    Year / Month
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-500 sm:px-6 px-2 py-4 text-left"
                  >
                    Award
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="sm:px-6 px-2 py-4 text-sm font-medium text-gray-500">
                    2020/09
                  </td>
                  <td className="text-sm text-black font-medium sm:px-6 px-2 py-4">
                    アントレプレナーシップ・チャレンジ2020 第3位
                  </td>
                </tr>
                <tr className="bg-white border-b">
                  <td className="sm:px-6 px-2 py-4 text-sm font-medium text-gray-500">
                    2022/03
                  </td>
                  <td className="text-sm text-black font-medium sm:px-6 px-2 py-4">
                    東京大学 工学部長賞 (研究)
                  </td>
                </tr>
                <tr className="bg-white border-b">
                  <td className="sm:px-6 px-2 py-4 text-sm font-medium text-gray-500">
                    2022/09
                  </td>
                  <td className="text-sm text-black font-medium sm:px-6 px-2 py-4">
                    日本音響学会 第24回 学生優秀発表賞 (
                    <Link
                      href="#"
                      className="text-green-600 underline underline-offset-2"
                    >
                      Link <ExternalLink className="inline w-4 h-4" />
                    </Link>
                    )
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Profile />
    </>
  );
}
