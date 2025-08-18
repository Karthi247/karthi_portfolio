import FadeSection from "./FadeSection";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Java", "JavaScript", "HTML", "CSS"],
    },
    {
      title: "Frontend Technologies",
      skills: ["React.js", "HTML5", "CSS3", "JavaScript"],
    },
    {
      title: "Backend Technologies",
      skills: ["Spring Boot", "Node.js", "Express.js"],
    },
    {
      title: "Databases",
      skills: ["MySQL", "PostgreSQL"],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <FadeSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Here you can see my technical skills. I continuously update my knowledge 
              and experience new technologies to stay current with industry trends.
            </p>
          </div>
        </FadeSection>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <FadeSection key={categoryIndex}>
              <div className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-medium transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
                  {category.title}
                </h3>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="bg-primary/10 text-primary px-4 py-2 rounded-lg text-center font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-default"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </FadeSection>
          ))}
        </div>

        {/* Additional Skills Grid */}
        <FadeSection>
          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-center mb-8">
              All <span className="gradient-text">Technologies</span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
              {[
                "Java", "React.js", "JavaScript", "HTML", "CSS", "Spring Boot", 
                "Node.js", "Express.js", "MySQL", "Git", "GitHub", "VS Code",
              ].map((tech, index) => (
                <FadeSection key={index}>
                  <div className="bg-secondary text-secondary-foreground px-4 py-3 rounded-xl text-center font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-default shadow-soft">
                    {tech}
                  </div>
                </FadeSection>
              ))}
            </div>
          </div>
        </FadeSection>
      </div>
    </section>
  );
};

export default Skills;
