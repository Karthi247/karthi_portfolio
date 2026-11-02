import { ArrowUpRight, BriefcaseBusiness, CalendarDays, Github, Landmark, ListChecks, UsersRound } from "lucide-react";
import type { ReactNode } from "react";

type Project = {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  repository?: string;
  liveDemo?: string;
  visual: string;
  mark: string;
};

const symbols: Record<string, ReactNode> = {
  welfare: <Landmark />,
  tasks: <ListChecks />,
  employees: <UsersRound />,
  jobs: <BriefcaseBusiness />,
  events: <CalendarDays />,
  students: <UsersRound />,
};

const ProjectCard = ({ project }: { project: Project }) => (
  <article className="project-card">
    <div className={`project-art project-art--${project.visual}`} aria-hidden="true">
      <span className="project-art__index">{project.mark}</span>
      <div className="project-art__symbol">{symbols[project.visual] ?? <BriefcaseBusiness />}</div>
      <span className="project-art__caption">{project.category}</span>
    </div>
    <div className="project-card__body">
      <div className="project-card__heading">
        <div><span className="project-card__category">{project.category}</span><h3>{project.title}</h3></div>
        {project.repository && <a className="project-card__link" href={project.repository} target="_blank" rel="noreferrer" aria-label={`View ${project.title} repository on GitHub`}><ArrowUpRight size={19} /></a>}
      </div>
      <p>{project.description}</p>
      <div className="tag-list">{project.technologies.map((tech) => <span className="tag" key={tech}>{tech}</span>)}</div>
      {project.repository && <a className="project-repo" href={project.repository} target="_blank" rel="noreferrer"><Github size={16} /> View source <ArrowUpRight size={14} /></a>}
      {project.liveDemo && <a className="project-repo" href={project.liveDemo} target="_blank" rel="noreferrer"><ArrowUpRight size={16} /> Live demo</a>}
    </div>
  </article>
);

export default ProjectCard;
