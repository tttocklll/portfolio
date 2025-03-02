import { Icon } from "@iconify/react";

export default function SocialIcons() {
  return (
    <div className="flex space-x-6 justify-center">
      <a
        href="https://twitter.com/tttockllll"
        target="_blank"
        rel="noopener noreferrer"
        className="text-text/40 hover:text-accent/80 transition-colors"
      >
        <Icon icon="mdi:twitter" className="w-5 h-5" />
      </a>
      <a
        href="https://www.linkedin.com/in/tttocklll/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-text/40 hover:text-accent/80 transition-colors"
      >
        <Icon icon="mdi:linkedin" className="w-5 h-5" />
      </a>
      <a
        href="https://github.com/tttocklll"
        target="_blank"
        rel="noopener noreferrer"
        className="text-text/40 hover:text-accent/80 transition-colors"
      >
        <Icon icon="mdi:github" className="w-5 h-5" />
      </a>
    </div>
  );
}
