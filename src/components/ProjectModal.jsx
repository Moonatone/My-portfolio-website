import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { X, Github, ExternalLink } from "lucide-react";
import WindowChrome from "./WindowChrome";
import VideoPlaceholder from "./VideoPlaceholder";
import { closeProjectModal } from "../store/projectsSlice";
import projects from "../data/projects";

export default function ProjectModal() {
  const dispatch = useDispatch();
  const activeProjectId = useSelector((s) => s.projects.activeProjectId);
  const project = projects.find((p) => p.id === activeProjectId);

  useEffect(() => {
    if (!project) return undefined;
    const onKeyDown = (e) => {
      if (e.key === "Escape") dispatch(closeProjectModal());
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [project, dispatch]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink-light/60 dark:bg-black/70 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} demo`}
      onClick={() => dispatch(closeProjectModal())}
    >
      <div
        className="w-full max-w-2xl animate-fade-up"
        style={{ animationDuration: "0.25s" }}
        onClick={(e) => e.stopPropagation()}
      >
        <WindowChrome path={project.filePath}>
          {project.imageSrc ? (
            <img
              src={`${import.meta.env.BASE_URL}${project.imageSrc}`}
              alt={project.title}
              className="w-full object-cover"
            />
          ) : (
            <VideoPlaceholder
              videoSrc={`${import.meta.env.BASE_URL}${project.videoSrc}`}
              title={project.title}
              size="large"
            />
          )}
          <div className="p-6">
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <button
                type="button"
                onClick={() => dispatch(closeProjectModal())}
                className="rounded-full p-1.5 text-ink-light/50 hover:bg-ink-light/5 hover:text-ink-light dark:text-ink-dark/50 dark:hover:bg-ink-dark/10 dark:hover:text-ink-dark transition-colors"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-ink-light/70 dark:text-ink-dark/70">
              {project.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-violet/10 px-2.5 py-1 font-mono text-[11px] font-medium text-violet-dark dark:text-violet-light"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-ink-light px-4 py-2 text-sm font-medium text-white hover:bg-ink-light/80 dark:bg-white dark:text-ink-light dark:hover:bg-white/80 transition-colors"
              >
                <Github className="h-4 w-4" /> View code
              </a>
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border-2 border-ink-light/15 px-4 py-2 text-sm font-medium hover:border-coral hover:text-coral dark:border-ink-dark/15 dark:hover:border-coral-light dark:hover:text-coral-light transition-colors"
                >
                  <ExternalLink className="h-4 w-4" /> Live demo
                </a>
              )}
            </div>
          </div>
        </WindowChrome>
      </div>
    </div>
  );
}
