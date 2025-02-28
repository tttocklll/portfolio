export default function ProjectCard({ title, description, image, href }) {
  return (
    <div className="flex flex-col h-full bg-navy-light rounded-xl overflow-hidden hover:shadow-md transition-shadow duration-300">
      <div className="relative aspect-video bg-navy flex items-center justify-center overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <a
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          className="group"
        >
          <h3 className="text-xl font-semibold text-gold group-hover:text-gold/80 transition-colors flex items-center">
            {title}
          </h3>
        </a>

        <div className="mt-3 text-white/80 flex-grow">{description}</div>

        <div className="mt-4">
          <a
            href={href}
            className="inline-flex items-center text-gold hover:underline"
          >
            View Project
          </a>
        </div>
      </div>
    </div>
  );
}
