import Link from "next/link";
import { ExternalLink } from "react-feather";
import Profile from "../../components/Profile";

export default function About() {
  return (
    <>
      <div className="flex w-full flex-col items-center justify-center space-y-4 pb-8">
        <h2 className="text-2xl text-green-600 sm:text-4xl">About Me</h2>
        <div>
          <ol className="border-l border-gray-300">
            <li>
              <div className="flex items-center justify-start pt-3">
                <div className="-ml-1 mr-3 h-2 w-2 rounded-full bg-gray-300"></div>
                <p className="text-sm text-gray-500">1999/11/02</p>
              </div>
              <div className="mt-0.5 ml-4 mb-6">
                <h4 className="mb-1.5 text-lg font-semibold text-gray-800 sm:text-xl">
                  静岡県生まれ
                </h4>
              </div>
            </li>
            <li>
              <div className="flex items-center justify-start pt-2">
                <div className="-ml-1 mr-3 h-2 w-2 rounded-full bg-gray-300"></div>
                <p className="text-sm text-gray-500">2015/04</p>
              </div>
              <div className="mt-0.5 ml-4 mb-6">
                <h4 className="mb-1.5 text-lg font-semibold  text-gray-800 sm:text-xl">
                  静岡県立浜松北高校 入学
                </h4>
              </div>
            </li>
            <li>
              <div className="flex items-center justify-start pt-2">
                <div className="-ml-1 mr-3 h-2 w-2 rounded-full bg-gray-300"></div>
                <p className="text-sm text-gray-500">2018/04</p>
              </div>
              <div className="mt-0.5 ml-4 pb-5">
                <h4 className="mb-1.5 text-lg font-semibold  text-gray-800 sm:text-xl">
                  東京大学 教養学部 文科II類 入学
                </h4>
              </div>
            </li>
            <li>
              <div className="flex items-center justify-start pt-2">
                <div className="-ml-1 mr-3 h-2 w-2 rounded-full bg-gray-300"></div>
                <p className="text-sm text-gray-500">2020/04</p>
              </div>
              <div className="mt-0.5 ml-4 pb-5">
                <h4 className="mb-1.5 text-lg font-semibold  text-gray-800 sm:text-xl">
                  東京大学 工学部{" "}
                  <Link
                    href="https://www.ee.t.u-tokyo.ac.jp/"
                    className="text-green-600 underline underline-offset-2"
                  >
                    電子情報工学科
                  </Link>{" "}
                  進学
                </h4>
                <p className="mb-3 text-gray-500">
                  -{" "}
                  <Link
                    href="https://www.gavo.t.u-tokyo.ac.jp/"
                    className="font-bold text-green-600 underline underline-offset-2"
                  >
                    峯松研究室
                  </Link>{" "}
                  所属
                </p>
                <p className="mb-3 text-gray-500">
                  - 2022年度 <span className="font-bold text-green-600">工学部長賞 (研究)</span>{" "}
                  受賞
                </p>
                <p className="mb-3 text-gray-500">
                  - 卒業論文: 「咽喉マイクを用いた 背景雑音に頑健な
                  英語シャドーイング音声の自動評価」
                </p>
              </div>
            </li>
            <li>
              <div className="flex items-center justify-start pt-2">
                <div className="-ml-1 mr-3 h-2 w-2 rounded-full bg-gray-300"></div>
                <p className="text-sm text-gray-500">2022/04</p>
              </div>
              <div className="mt-0.5 ml-4 pb-5">
                <h4 className="mb-1.5 text-lg font-semibold  text-gray-800 sm:text-xl">
                  日本マイクロソフト株式会社 入社
                </h4>
                <p className="mb-3 text-gray-500">- Microsoft Teams サポート エンジニア</p>
              </div>
            </li>
          </ol>
        </div>
      </div>

      <div className="flex w-full flex-col items-center justify-center space-y-4 pb-8">
        <h2 className="text-2xl text-green-600 sm:text-4xl">Awards</h2>
        <div className="flex w-full flex-col sm:w-3/4">
          <div className="min-w-full py-2">
            <table className="min-w-full">
              <thead className="border-b-4">
                <tr>
                  <th
                    scope="col"
                    className="px-2 py-4 text-left text-base font-medium text-gray-500 sm:px-6 sm:text-xl"
                  >
                    Year / Month
                  </th>
                  <th
                    scope="col"
                    className="px-2 py-4 text-left text-base font-medium text-gray-500 sm:px-6 sm:text-xl"
                  >
                    Award
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-2 py-4 text-base font-medium text-gray-500 sm:px-6 sm:text-xl">
                    2020/09
                  </td>
                  <td className="px-2 py-4 text-base font-medium text-black sm:px-6 sm:text-xl">
                    アントレプレナーシップ・チャレンジ2020 第3位
                  </td>
                </tr>
                <tr className="border-b bg-white">
                  <td className="px-2 py-4 text-base font-medium text-gray-500 sm:px-6 sm:text-xl">
                    2022/03
                  </td>
                  <td className="px-2 py-4 text-base font-medium text-black sm:px-6 sm:text-xl">
                    東京大学 工学部長賞 (研究)
                  </td>
                </tr>
                <tr className="border-b bg-white">
                  <td className="px-2 py-4 text-base font-medium text-gray-500 sm:px-6 sm:text-xl">
                    2022/09
                  </td>
                  <td className="px-2 py-4 text-base font-medium text-black sm:px-6 sm:text-xl">
                    日本音響学会 第24回 学生優秀発表賞 (
                    <Link href="#" className="text-green-600 underline underline-offset-2">
                      Link <ExternalLink className="inline h-4 w-4" />
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
