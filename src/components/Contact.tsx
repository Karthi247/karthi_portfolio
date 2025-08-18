import React, { useRef, useState } from "react";
import { Github, Linkedin, Instagram,Mail, MapPin, Phone,Send } from "lucide-react";
import emailjs from "emailjs-com";
import FadeSection from "./FadeSection"; // make sure the path is correct

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);

    emailjs
      .sendForm(
        "service_c7h4lpu", // replace with your service ID
        "template_p1ede9m", // replace with your template ID
        formRef.current,
        "XwlTDxdEGwwU1f5PJ" // replace with your public key
      )
      .then(() => {
        setSubmitted(true);
        formRef.current?.reset();
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("Failed to send message ❌. Please try again.");
      })
      .finally(() => setLoading(false));
  };

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <FadeSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, interesting
              projects, or just having a chat about technology. Feel free to
              reach out through any of the channels below.
            </p>
          </FadeSection>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <FadeSection>
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-primary" />
                <span className="text-lg">karthichinnathai@gmail.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-primary" />
                <span className="text-lg">+91 9597469159</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="w-6 h-6 text-primary" />
                <span className="text-lg">Kongadai, Erode</span>
              </div>
            </div>

          <br></br>

            <div className="flex justify-center lg:justify-start space-x-4">
                <a
                  href="https://www.linkedin.com/in/karthi-c2470"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-primary text-primary-foreground rounded-full hover:bg-primary-dark transition-colors duration-200 shadow-soft"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://github.com/Karthi247"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-primary text-primary-foreground rounded-full hover:bg-primary-dark transition-colors duration-200 shadow-soft"
                >
                  <Github size={20} />
                </a>
                <a
                  href="mailto:karthichinnathai@gmail.com"
                  className="p-3 bg-primary text-primary-foreground rounded-full hover:bg-primary-dark transition-colors duration-200 shadow-soft"
                >
                  <Mail size={20} />
                </a>
                <a
                  href="https://www.instagram.com/ka_rthi_24?igsh=c2V0MWVsdzBhaGRt"
                  className="p-3 bg-primary text-primary-foreground rounded-full hover:bg-primary-dark transition-colors duration-200 shadow-soft"
                >
                  <Instagram size={20} />
                </a>
              </div>
          </FadeSection>

          



          {/* Contact Form */}
          <FadeSection>
            <div className="bg-card rounded-2xl p-8 shadow-soft">
              {!submitted ? (
                <>
                  <h3 className="text-2xl font-semibold text-foreground mb-6">
                    Send a Quick Message
                  </h3>
                  <form
                    ref={formRef}
                    onSubmit={sendEmail}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-muted-foreground mb-2"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="user_name"
                          autoComplete="name"
                          required
                          className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-muted-foreground mb-2"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="user_email"
                          autoComplete="email"
                          required
                          className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-muted-foreground mb-2"
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-muted-foreground mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:ring-2 focus:ring-primary focus:border-transparent"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      disabled={loading}
                      className={`w-full bg-primary text-primary-foreground py-3 px-6 rounded-lg font-medium flex items-center justify-center space-x-2 transition ${
                        loading
                          ? "opacity-70 cursor-not-allowed"
                          : "hover:bg-primary-dark"
                      }`}
                    >
                      {loading ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-12">
                  <h3 className="text-2xl font-semibold text-foreground mb-4">
                    🎉 Thank you!
                  </h3>
                  <p className="text-muted-foreground">
                    Your message has been sent successfully. I’ll get back to
                    you soon!
                  </p>
                </div>
              )}
            </div>
          </FadeSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;
