import { ArrowUpRight, BriefcaseBusiness, GraduationCap } from "lucide-react";
import { education, internship } from "@/data/portfolio";
import FadeSection from "./FadeSection";

const Education = () => (
  <section className="section section--paper" id="experience" aria-labelledby="experience-title">
    <div className="container">
      <FadeSection>
        <div className="section-heading">
          <span className="section-heading__kicker">Where I have been</span>
          <h2 id="experience-title">Experience & <span>Education</span></h2>
          <p>A growing foundation in software development, grounded in practical work.</p>
        </div>
      </FadeSection>
      <div className="timeline">
        <FadeSection>
          <article className="timeline-entry">
            <div className="timeline-entry__icon"><BriefcaseBusiness size={21} /></div>
            <div className="timeline-entry__content">
              <span className="timeline-entry__eyebrow">INTERNSHIP · FULL STACK DEVELOPMENT</span>
              <h3>{internship.title}</h3>
              <p>{internship.description}</p>
              <div className="tag-list">{internship.technologies.map((skill) => <span className="tag" key={skill}>{skill}</span>)}</div>
            </div>
            <span className="timeline-entry__period">Practical experience</span>
          </article>
        </FadeSection>
        <FadeSection>
          <article className="timeline-entry">
            <div className="timeline-entry__icon"><GraduationCap size={22} /></div>
            <div className="timeline-entry__content">
              <span className="timeline-entry__eyebrow">EDUCATION</span>
              <h3>{education.degree}</h3>
              <p>{education.institution}<span className="education-cgpa">CGPA: {education.cgpa}</span></p>
            </div>
            <span className="timeline-entry__period">Computer Science</span>
          </article>
        </FadeSection>
      </div>
      <FadeSection><a className="text-link" href="https://github.com/Karthi247" target="_blank" rel="noreferrer">Explore my work on GitHub <ArrowUpRight size={16} /></a></FadeSection>
    </div>
  </section>
);

export default Education;
