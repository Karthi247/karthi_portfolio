import { skillGroups } from "@/data/portfolio";
import FadeSection from "./FadeSection";

const Skills = () => (
  <section className="section section--dark" id="skills" aria-labelledby="skills-title">
    <div className="container">
      <FadeSection>
        <div className="section-heading section-heading--light">
          <span className="section-heading__kicker">My toolkit</span>
          <h2 id="skills-title">Skills & <span>Technologies</span></h2>
          <p>Tools I use to design, build, and support full stack applications.</p>
        </div>
      </FadeSection>
      <div className="skills-grid">
        {skillGroups.map((group, index) => <FadeSection key={group.title}><article className="skill-card"><div className="skill-card__top"><span>0{index + 1}</span><span className="skill-card__dash" /></div><h3>{group.title}</h3><ul>{group.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul></article></FadeSection>)}
      </div>
    </div>
  </section>
);

export default Skills;
