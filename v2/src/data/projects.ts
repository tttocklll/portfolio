import Moodify from "../assets/Moodify.png";
import AiChatkun from "../assets/ai_chatkun.jpeg";
import Kairu from "../assets/kairu.png";
import Mayfes from "../assets/mayfes.png";
import MenuReader from "../assets/menu_reader.png";
import Mitsuele from "../assets/mitsuele.png";
import Parkize from "../assets/parkize.png";
import Retranslate from "../assets/retranslate.png";

export interface Project {
  title: string;
  description: string;
  image: ImageMetadata;
  href: string;
  tags: string[];
  year: string;
}

export const projects: Project[] = [
  {
    title: "AIチャットくん",
    description:
      "[株式会社picon] メッセージを送信すると、AIが応答を生成する LINE Bot。バックエンドおよび課金 LP を担当。友だち数 350 万人超（2025/03 時点）。",
    image: AiChatkun,
    href: "https://lin.ee/t4ZrCO7",
    tags: [
      "TypeScript",
      "Node.js",
      "Next.js",
      "OpenAI API",
      "Azure Function",
      "Firebase",
      "Stripe",
    ],
    year: "2023",
  },
  {
    title: "さいほんやくくん",
    description:
      "日本語 → 英語 → ... → 日本語 のように、複数の言語に翻訳した後、最初の言語に戻す「再翻訳」を行うアプリ。",
    image: Retranslate,
    href: "https://retranslate.tttocklll.dev/",
    tags: ["TypeScript", "React", "Chakra UI", "Vercel"],
    year: "2022",
  },
  {
    title: '2021年度工学部研究成果発表会 & 五月祭 VTuber 「みつえれ」',
    description:
      "東京大学の学園祭にて、学科として出展。Live2D のモデリング、顔のトラッキング、アニメーション、動画制作、およびライブ配信管理を担当した。",
    image: Mitsuele,
    href: "https://www.youtube.com/@mitsuele_eeic",
    tags: [
      "Live2D",
      "Python",
      "OpenCV",
      "Dlib",
      "Unity",
      "Premiere Pro",
      "OBS",
    ],
    year: "2021",
  },
  {
    title: "2021年度工学部研究成果発表会 & 五月祭 出展ページ",
    description:
      "東京大学の学園祭にて、学科として出展。複数の企画をまとめたWebページ制作をチームで行った。",
    image: Mayfes,
    href: "https://2021.eeic.jp/",
    tags: ["JavaScript", "Gatsby", "React", "Bootstrap"],
    year: "2021",
  },
  {
    title: "Parkize",
    description:
      "イベント会場における、関係車両の入出庫を管理するWebアプリ。データは Spreadsheet で保存するよう定められていたため、Google Apps Script を用いてデータのやり取りを行っている。",
    image: Parkize,
    href: "#",
    tags: ["Typescript", "React", "GAS", "clasp", "Vercel"],
    year: "2021",
  },
  {
    title: "カイルくん",
    description:
      "[株式会社Strobo] 社内の配送業務およびCS業務を効率化・簡易化するためのSlack Botを制作。PC 操作が不慣れなスタッフでも安全に業務を行えるよう機能を限定したり、メッセージをカスタマイズするなどの工夫を行った。",
    image: Kairu,
    href: "https://note.com/strobo_inc/n/n506e23a29c3f",
    tags: ["Typescript", "Node.js", "Slack API (Bolt)", "AWS Lambda"],
    year: "2021",
  },
  {
    title: "Moodify",
    description:
      "学校現場における、生徒のメンタルを管理する web アプリ。ユーザーインタビューを重ねながら UX の改善を行った。アントレプレナーシップ・チャレンジ2020にて第3位受賞。",
    image: Moodify,
    href: "https://github.com/tttocklll/Moodify",
    tags: ["JavaScript", "React", "MUI", "FastAPI", "SQLite", "Vercel"],
    year: "2020",
  },
  {
    title: "ぐぐるンです",
    description:
      "文字だけのメニューに画像を載せて、わかりやすいものにするアプリ。文字の読み取り精度を上げ、かつ出力動画のfpsをなるべく落とさないように工夫した。※ 2020年度 OpenCV/GL 実験にて作成",
    image: MenuReader,
    href: "https://github.com/tttocklll/menu_reader",
    tags: ["Python", "OpenCV", "OCR"],
    year: "2020",
  },
];
