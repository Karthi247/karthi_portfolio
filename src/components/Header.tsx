import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold gradient-text">
              KARTHI C
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('education')}
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              Education
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              Contact
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border">
              <button
                onClick={() => scrollToSection('home')}
                className="block w-full text-left px-3 py-2 text-foreground hover:text-primary transition-colors duration-200"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-3 py-2 text-foreground hover:text-primary transition-colors duration-200"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="block w-full text-left px-3 py-2 text-foreground hover:text-primary transition-colors duration-200"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection('education')}
                className="block w-full text-left px-3 py-2 text-foreground hover:text-primary transition-colors duration-200"
              >
                Education
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="block w-full text-left px-3 py-2 text-foreground hover:text-primary transition-colors duration-200"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-3 py-2 text-foreground hover:text-primary transition-colors duration-200"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;