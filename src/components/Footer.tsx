import { Heart, Github, Linkedin, Mail } from "lucide-react";
import FadeSection from "./FadeSection";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FadeSection>
      <footer className="bg-foreground text-background py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Social Links */}
            <div className="flex items-center justify-center gap-6 mb-6">
              <a
                href="https://github.com/Karthi247"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors duration-300"
              >
                <Github size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/karthi-c2470"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors duration-300"
              >
                <Linkedin size={22} />
              </a>
              <a
                href="mailto:karthichinnathai@gmail.com"
                className="hover:text-primary transition-colors duration-300"
              >
                <Mail size={22} />
              </a>
            </div>

            {/* Footer Text */}
            <div className="flex items-center justify-center gap-2 text-sm">
              <span>Made with</span>
              {/* <Heart size={14} className="text-red-500" /> */}
              <span>by Karthi C • © {currentYear} All rights reserved.</span>
            </div>
          </div>
        </div>
      </footer>
    </FadeSection>
  );
};

export default Footer;
