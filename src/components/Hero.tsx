import { ArrowDownRight, Github, Linkedin, Mail } from "lucide-react";
import portrait from "@/assets/Pro_photo_cutout.png";
import { profile } from "@/data/portfolio";

const Hero = () => (
  <section className="hero" id="home" aria-labelledby="hero-title">
    <div className="hero__inner">
      <div className="hero__copy">
        <span className="eyebrow">Java · Spring Boot · Full Stack</span>
        <p className="hero__hello">Hi, I am</p>
        <h1 id="hero-title">Karthi C</h1>
        <p className="hero__role">{profile.role.replace(" | ", " / ")}</p>
        <p className="hero__intro">Building thoughtful applications and dependable backend systems, one problem at a time.</p>
        <div className="hero__actions">
          <a className="button button--dark" href="#projects">View my work <ArrowDownRight size={17} /></a>
          <a className="button button--outline" href="#contact">Contact me</a>
        </div>
        <div className="hero__socials" aria-label="Social links">
          <a href={`mailto:${profile.email}`} aria-label="Email"><Mail size={20} /></a>
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={20} /></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={20} /></a>
        </div>
      </div>
      <div className="hero__portrait-wrap">
        <div className="hero__portrait-frame"><img src={portrait} alt="Karthi C" /></div>
        <span className="hero__portrait-note">Based in {profile.location}</span>
      </div>
    </div>
  </section>
);

export default Hero;
