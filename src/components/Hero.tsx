import { Github, Linkedin, Instagram,Mail, MapPin, Phone } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";
import { useTypingEffect } from "@/hooks/useTypingEffect";
import FadeSection from "@/components/FadeSection";

const Hero = () => {
  const typedText = useTypingEffect(
    ["Full-Stack Developer", "React Developer"], 
    80,   // typing speed
    1200  // pause time after each word
  );

  return (
    <FadeSection>
    <section id="home" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Content with fade animation */}
          
            <div className="text-center lg:text-left">
              <p className="text-lg text-muted-foreground mb-4">Hi There, I'm</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                <span className="gradient-text">Karthi C</span>
              </h1>

              {/* Typing Animation */}
              <div className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-6">
                {typedText}
                <span className="text-primary animate-pulse">|</span>
              </div>

              <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
                Highly motivated and detail-oriented Full Stack Developer and React Developer with a strong 
                foundation in web technologies. Skilled in React.js, JavaScript, HTML, CSS, Java, Node.js, and 
                SQL. Passionate about building scalable, user-friendly applications with a focus on clean, 
                maintainable code.
              </p>

              {/* Contact Info */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8 text-sm text-muted-foreground">
                <div className="flex items-center justify-center lg:justify-start gap-2">
                  <MapPin size={16} className="text-primary" />
                  <span>Erode, Kongadai</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-2">
                  <Phone size={16} className="text-primary" />
                  <span>+91 9597469159</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-2">
                  <Mail size={16} className="text-primary" />
                  <span>karthichinnathai@gmail.com</span>
                </div>
              </div>

              {/* Social Links */}
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
            </div>
          

          {/* Profile Image with fade animation */}
          <FadeSection>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-medium">
                  <img
                    src={profilePhoto}
                    alt="Karthi C - Full Stack Developer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-primary to-primary-light rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                  Available
                </div>
              </div>
            </div>
          </FadeSection>

        </div>
      </div>
    </section>
    </FadeSection>
  );
};

export default Hero;
