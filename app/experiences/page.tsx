import Image from "next/image";

import Link from "next/link";
import { ExternalLink } from "react-feather";
import Profile from "../../components/Profile";
import ProjectCard from "../../components/ProjectCard";

export default function Experience() {
  return (
    <>
      <div className="flex w-full flex-col items-center justify-center space-y-4 pb-8">
        <h2 className="text-2xl text-green-600 sm:text-4xl">Products</h2>
        <div className="grid h-full w-full grid-cols-1 gap-4 sm:grid-cols-2">
          <ProjectCard
            title="Moodify"
            description="学校現場における、生徒のメンタルを管理する web アプリ。アントレプレナーシップ・チャレンジ2020にて第3位受賞。"
            image="/imgs/Moodify.png"
            href="https://github.com/tttocklll/Moodify"
          />
          <ProjectCard
            title="さいほんやくくん"
            description="日本語 → 英語 → ... → 日本語 のように、複数の言語に翻訳した後、最初の言語に戻す「再翻訳」のアプリ"
            image="/imgs/retranslate.png"
            href="https://retranslate.tttocklll.dev/"
          />
          <ProjectCard
            title="2021年度工学部研究成果発表会 & 五月祭"
            description={
              <>
                大学の学園祭にて、学科として出展。VTuber企画では、
                <Link
                  className="font-bold text-green-600"
                  href="https://www.youtube.com/@user-hm7br3oc1d?sub_confirmation=1"
                >
                  VTuber「みつえれ」
                  <ExternalLink className="inline" size="16" />
                </Link>
                のトラッキングおよびアニメーションを実装。またWebページ制作も一部担当した。
              </>
            }
            image="/imgs/mayfes.png"
            href="https://2021.eeic.jp/"
          />
          <ProjectCard
            title="カイルくん"
            description="社内の配送業務およびCS業務を効率化・簡易化するためのSlack Botを制作。株式会社Stroboにて現在も活躍中！"
            image="/imgs/kairu.png"
            href="https://note.com/strobo_inc/n/n506e23a29c3f"
          />
          <ProjectCard
            title="ぐぐルンです"
            description={
              <>
                文字だけのメニューに画像を載せて、わかりやすいものにするアプリ。文字の読み取り精度を上げ、かつ出力動画のfpsをなるべく落とさないように工夫した。
                <br />※{" "}
                <Link
                  className="font-bold text-green-600"
                  href="https://nae-lab.org/lecture/OpenCV+OpenGL/"
                >
                  2020年度 OpenCV/GL 実験
                  <ExternalLink className="inline" size="16" />
                </Link>
                にて作成
              </>
            }
            image="/imgs/menu_reader.png"
            href="https://github.com/tttocklll/menu_reader"
          />
          <ProjectCard
            title="Parkize"
            description="イベント会場における、関係車両の入出庫を管理するWebアプリ"
            image="/imgs/parkize.png"
            href="#"
          />
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
      </div>
    </>
  );
}
