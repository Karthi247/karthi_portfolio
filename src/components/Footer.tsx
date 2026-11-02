import { ArrowUpRight, Github, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { profile } from "@/data/portfolio";

const Footer = () => <footer className="site-footer"><div className="container site-footer__inner"><Link className="brand brand--footer" to="/">KC<i>.</i></Link><p>Designed and built by Karthi C · {new Date().getFullYear()}</p><div className="site-footer__links"><a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a><a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a><a href="/#home" aria-label="Back to top"><ArrowUpRight size={18} /></a></div></div></footer>;

export default Footer;
