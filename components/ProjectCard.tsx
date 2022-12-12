import Image, { ImageProps } from "next/image";
import Link from "next/link";
import { ExternalLink } from "react-feather";

interface Props {
  title: string;
  description: React.ReactNode;
  image: ImageProps["src"];
  href: string;
}

export default function ProjectCard({ title, description, image, href }: Props) {
  return (
    <div className="flex min-h-[24rem] w-full flex-col justify-center rounded-lg bg-white shadow-md">
      <div className="relative h-80 w-full">
        <Image className="rounded-t-lg object-contain" src={image} alt={title} fill sizes="100%" />
      </div>
      <div className="p-6">
        <Link href={href}>
          <h5 className="mb-2 text-xl font-medium text-gray-900 hover:text-green-600">
            {title}
            {href !== "" && href !== "#" && <ExternalLink className="inline" size="16" />}
          </h5>
        </Link>
        <p className="mb-4 text-base text-gray-700">{description}</p>
      </div>
    </div>
  );
}
