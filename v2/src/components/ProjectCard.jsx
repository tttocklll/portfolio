export default function ProjectCard({ title, description, image, href, tags = [], year }) {
  return (
    <div className="flex flex-col h-full bg-card-bg rounded-xl overflow-hidden hover:shadow-md transition-shadow duration-300">
      <div className="relative aspect-video bg-background flex items-center justify-center overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
        />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <a
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          className="group"
        >
          <h3 className="text-xl font-semibold text-accent group-hover:text-accent/80 transition-colors duration-300 flex items-center">
            {title}
            {year && <span className="ml-2 text-sm text-text/60 font-normal">{year}</span>}
          </h3>
        </a>

        <div className="mt-3 text-text/80 flex-grow">{description}</div>

        {tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span 
                key={index} 
                className="px-2 py-1 text-xs rounded-md bg-accent/10 text-accent/80"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="mt-4">
          <a
            href={href}
            className="inline-flex items-center text-accent hover:underline"
          >
            View Project
          </a>
        </div>
      </div>
    </div>
  );
}
