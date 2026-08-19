import { useDispatch } from "react-redux";
import { Github, ExternalLink, Maximize2 } from "lucide-react";
import WindowChrome from "./WindowChrome";
import VideoPlaceholder from "./VideoPlaceholder";
import { openProjectModal } from "../store/projectsSlice";

const tagColors = [
  "bg-violet/10 text-violet-dark dark:text-violet-light",
  "bg-coral/10 text-coral-dark dark:text-coral-light",
  "bg-mint/10 text-mint-dark dark:text-mint-light",
  "bg-sunny/10 text-sunny-dark dark:text-sunny-light",
];

export default function ProjectCard({ project, index = 0 }) {
  const dispatch = useDispatch();

  return (
    <article
      className="animate-fade-up opacity-0"
      style={{
        animationDelay: `${index * 80}ms`,
        animationFillMode: "forwards",
      }}
    >
      <WindowChrome
        path={project.filePath}
        className="h-full flex flex-col group"
      >
        <div
          onClick={() => dispatch(openProjectModal(project.id))}
          className="relative block w-full cursor-pointer text-left"
        >
          {project.imageSrc ? (
            <img
              src={project.imageSrc}
              alt={project.title}
              className="h-48 w-full object-cover"
            />
          ) : (
            <VideoPlaceholder
              videoSrc={project.videoSrc}
              title={project.title}
            />
          )}
          <span className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-black/40 px-2 py-1 font-mono text-[10px] text-white opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
            <Maximize2 className="h-3 w-3" /> expand
          </span>
        </div>

        <div className="flex flex-1 flex-col gap-3 p-5">
          <div>
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <span className="font-mono text-xs text-ink-light/40 dark:text-ink-dark/40">
                {project.year}
              </span>
            </div>
            <p className="mt-1 text-sm text-ink-light/70 dark:text-ink-dark/70">
              {project.tagline}
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {project.stack.map((tech, i) => (
              <span
                key={tech}
                className={`rounded-full px-2.5 py-1 font-mono text-[11px] font-medium ${tagColors[i % tagColors.length]}`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </WindowChrome>
    </article>
  );
}
