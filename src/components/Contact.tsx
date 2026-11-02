import { FormEvent, useRef, useState } from "react";
import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import emailjs from "emailjs-com";
import { profile } from "@/data/portfolio";
import FadeSection from "./FadeSection";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const sendEmail = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formRef.current || status === "sending") return;
    setStatus("sending");
    try {
      await emailjs.sendForm("service_c7h4lpu", "template_p1ede9m", formRef.current, "XwlTDxdEGwwU1f5PJ");
      formRef.current.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="section section--paper contact-section" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <FadeSection><div className="section-heading"><span className="section-heading__kicker">Let us talk</span><h2 id="contact-title">Have a project in <span>mind?</span></h2><p>I am open to entry-level opportunities and conversations about building useful software.</p></div></FadeSection>
        <div className="contact-layout">
          <FadeSection><div className="contact-info">
            <h3>Get in touch</h3>
            <p>Whether you have an opportunity, a question, or just want to connect, you can find me here.</p>
            <a className="contact-detail" href={`mailto:${profile.email}`}><span className="contact-detail__icon"><Mail size={18} /></span><span><small>Email</small>{profile.email}</span></a>
            <div className="contact-detail"><span className="contact-detail__icon"><MapPin size={18} /></span><span><small>Location</small>{profile.location}</span></div>
            <div className="contact-socials"><a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={19} /></a><a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={19} /></a></div>
          </div></FadeSection>
          <FadeSection><div className="contact-form-card">
            {status === "sent" ? <div className="form-feedback" role="status"><span className="form-feedback__mark">✓</span><h3>Message sent</h3><p>Thanks for reaching out. I will get back to you soon.</p><button className="text-link" type="button" onClick={() => setStatus("idle")}>Send another message</button></div> : <>
              <h3>Send a message</h3>
              <form ref={formRef} onSubmit={sendEmail}>
                <div className="form-row">
                  <label>Name<input name="user_name" type="text" autoComplete="name" minLength={2} maxLength={80} required /></label>
                  <label>Email<input name="user_email" type="email" autoComplete="email" maxLength={120} required /></label>
                </div>
                <label>Subject<input name="subject" type="text" minLength={3} maxLength={120} required /></label>
                <label>Message<textarea name="message" rows={5} minLength={10} maxLength={3000} required /></label>
                {status === "error" && <p className="form-error" role="alert">Your message could not be sent. Please try again or <a href={`mailto:${profile.email}`}>email me directly</a>.</p>}
                <button className="button button--dark form-submit" type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending…" : <>Send message <Send size={16} /></>}</button>
              </form>
            </>}
          </div></FadeSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;
