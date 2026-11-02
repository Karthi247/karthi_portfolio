import { ArrowUpRight } from "lucide-react";
import FadeSection from "./FadeSection";
import { education, profile } from "@/data/portfolio";

const details = [
  { label: "01", title: "Backend first", text: "I enjoy shaping clear REST APIs, practical data models, and maintainable Java services." },
  { label: "02", title: "Product minded", text: "I care about how a feature feels to use as much as how it works behind the scenes." },
  { label: "03", title: "Always learning", text: "I bring patience to debugging, care to details, and a collaborative mindset to learning from feedback." },
];

const About = () => (
  <section className="section section--paper" id="about" aria-labelledby="about-title">
    <div className="container">
      <FadeSection>
        <div className="section-heading">
          <span className="section-heading__kicker">A little about me</span>
          <h2 id="about-title">Curious by nature.<br /><span>Developer by choice.</span></h2>
        </div>
      </FadeSection>
      <div className="about-layout">
        <FadeSection>
          <div className="about-intro">
            <p>{profile.introduction}</p>
            <p>I am especially interested in backend architecture, cloud platforms, and turning complex requirements into straightforward workflows. As an entry-level developer, I am looking for opportunities as a Java Backend Developer, Junior Software Developer, or Full Stack Developer.</p>
            <a className="text-link" href="#experience">My background <ArrowUpRight size={16} /></a>
          </div>
        </FadeSection>
        <FadeSection>
          <aside className="about-education">
            <span className="about-education__number">01 / EDUCATION</span>
            <h3>{education.degree}</h3>
            <p>{education.institution}</p>
          </aside>
        </FadeSection>
      </div>
      <div className="principles-grid">
        {details.map((item) => <FadeSection key={item.label}><article className="principle-card"><span>{item.label}</span><h3>{item.title}</h3><p>{item.text}</p></article></FadeSection>)}
      </div>
    </div>
  </section>
);

export default About;
