import { useMemo, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/portfolio";

const filters = ["All", "Backend", "Full Stack"] as const;
type Filter = (typeof filters)[number];

const ProjectsPage = () => {
  const [filter, setFilter] = useState<Filter>("All");
  const visibleProjects = useMemo(() => filter === "All" ? projects : projects.filter((project) => project.type === filter), [filter]);

  return (
    <div className="portfolio-page portfolio-page--projects">
      <Header />
      <main>
        <section className="section section--dark projects-page" aria-labelledby="all-projects-title">
          <div className="container">
            <Link className="projects-back" to="/"><ArrowLeft size={16} /> Back to home</Link>
            <div className="section-heading section-heading--light projects-page__heading">
              <span className="section-heading__kicker">A closer look</span>
              <h1 id="all-projects-title">Projects <span>&amp; practice</span></h1>
              <p>Selected work across backend systems and full stack applications.</p>
            </div>
            <div className="project-filters" role="group" aria-label="Filter projects by category">
              {filters.map((item) => <button key={item} type="button" className={filter === item ? "project-filter project-filter--active" : "project-filter"} aria-pressed={filter === item} onClick={() => setFilter(item)}>{item}</button>)}
            </div>
            <div className="projects-grid projects-grid--all" aria-live="polite">
              {visibleProjects.map((project) => <ProjectCard key={project.title} project={project} />)}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
