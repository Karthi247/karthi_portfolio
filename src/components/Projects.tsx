import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { featuredProjects } from "@/data/portfolio";
import FadeSection from "./FadeSection";
import ProjectCard from "./ProjectCard";

const Projects = () => (
  <section className="section section--dark" id="projects" aria-labelledby="projects-title">
    <div className="container">
      <FadeSection>
        <div className="section-heading section-heading--light section-heading--row">
          <div><span className="section-heading__kicker">Selected work</span><h2 id="projects-title">Things I have <span>built</span></h2></div>
          <p>Personal and learning projects shaped around real workflows and useful software.</p>
        </div>
      </FadeSection>
      <div className="projects-grid">
        {featuredProjects.map((project) => <FadeSection key={project.title}><ProjectCard project={project} /></FadeSection>)}
      </div>
      <div className="projects-more"><Link className="button button--light" to="/projects">Explore all projects <ArrowRight size={16} /></Link></div>
    </div>
  </section>
);

export default Projects;
