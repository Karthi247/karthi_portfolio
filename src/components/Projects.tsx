import { ExternalLink, Github, Server, BriefcaseBusiness, Activity } from "lucide-react";
import FadeSection from "./FadeSection";

const Projects = () => {
  const projects = [
    {
      title: "Job Application Tracker",
      description: "Designed and developed a Spring Boot + MySQL-based application to help users track job applications, statuses, deadlines, and interview schedules.",
      technologies: ["Spring Boot", "MySQL", "Java", "Backend Development"],
      features: [
        "Track job application statuses",
        "Manage deadlines and schedules",
        "Interview scheduling system",
        "Database-driven architecture"
      ],
      icon: <BriefcaseBusiness className="w-6 h-6" />,
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Student Management System",
      description: "Developed a Spring Boot + MySQL-based application with JSP views to manage student records, including personal details, courses, and academic performance.",
      technologies: ["Spring Boot", "MySQL", "Java", "JSP", "Backend Development"],
      features: [
        "Add, edit, and delete student records",
        "View and manage course enrollments",
        "Have separate views for students and admins",
        "User-friendly JSP interface with secure data handling"
      ],
      icon: <GraduationCap className="w-6 h-6" />,
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Team Score Tracker",
      description: "Developed a React.js + MySQL-based application to track team scores with features for adding, subtracting, and awarding bonus points, including a real-time scoreboard for instant updates.",
      technologies: ["React.js", "MySQL", "JavaScript", "Real-time Updates"],
      features: [
        "Real-time score tracking",
        "Add, subtract, and bonus points",
        "Live scoreboard updates",
        "Team management system"
      ],
      icon: <Server className="w-6 h-6" />,
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "BMI Calculator",
      description: "Built a simple and responsive BMI Calculator using HTML, CSS, and JavaScript to help users quickly calculate and understand their Body Mass Index.",
      technologies: ["HTML", "CSS", "JavaScript", "Frontend Development"],
      features: [
        "Real-time BMI calculation",
        "Responsive design for mobile and desktop",
        "Categorizes BMI results (Underweight, Normal, Overweight, Obese)",
        "Clean and minimal user interface"
      ],
      icon: <Activity className="w-6 h-6" />,
      githubUrl: "#",
      liveUrl: "#"
    }
  ];

  return (
    
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills in full-stack development 
            and my ability to create practical, user-focused applications.
          </p>
        </div>

        {/* Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <FadeSection key={index}>
              <div className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                {/* Project Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                    {project.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-muted transition-colors duration-200"
                  >
                    <Github size={16} />
                    <span className="text-sm font-medium">Code</span>
                  </a>
                  <a
                    href={project.liveUrl}
                    className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors duration-200"
                  >
                    <ExternalLink size={16} />
                    <span className="text-sm font-medium">Live Demo</span>
                  </a>
                </div>
              </div>
            </FadeSection>
          ))}
        </div>

        {/* Certificates */}
        
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">
              <span className="gradient-text">Certificates</span>
            </h3>
            <div className="w-16 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FadeSection>
              <div className="bg-card rounded-xl p-6 shadow-soft">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-success" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Full Stack Web Development
                    </h4>
                    <p className="text-sm text-muted-foreground mb-1">Udemy</p>
                    <p className="text-xs text-accent">
                      Completed a comprehensive Full Stack Web Development course on Udemy, covering frontend and backend development, databases, and project building
                    </p>
                  </div>
                </div>
              </div>
            </FadeSection>

            <FadeSection>
              <div className="bg-card rounded-xl p-6 shadow-soft">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-success" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      SQL (Basic), Java (Basic,Intermediate)
                    </h4>
                    <p className="text-sm text-muted-foreground mb-1">HackerRank</p>
                    <p className="text-xs text-accent">
                      Completed training in SQL and Java (Basic to Intermediate), focusing on database management and programming concepts
                    </p>
                  </div>
                </div>
              </div>
            </FadeSection>

            <FadeSection>
              <div className="bg-card rounded-xl p-6 shadow-soft">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-success" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Full Stack Development with Spring Boot  
                    </h4>
                    <p className="text-sm text-muted-foreground mb-1">Infosys Springboard Program</p>
                    <p className="text-xs text-accent">
                      Completed full stack development training covering Spring Boot, JSP, MySQL, and backend development concepts
                    </p>
                  </div>
                </div>
              </div>
            </FadeSection>
          </div>
        </div>

        {/* Internship Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">
              <span className="gradient-text">Experience</span>
            </h3>
            <div className="w-16 h-1 bg-primary mx-auto"></div>
          </div>

          <FadeSection>
            <div className="bg-card rounded-2xl p-8 shadow-soft">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Server className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-foreground mb-2">
                    Full Stack Development Intern
                  </h4>
                  <p className="text-primary font-semibold mb-4">
                    Gained hands-on experience in Spring Boot, React.js, and MySQL for building full-stack applications.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    During this internship, I gained practical experience in developing end-to-end web applications, 
                    working with modern frameworks and databases, and collaborating in a professional development environment.
                  </p>
                </div>
              </div>
            </div>
          </FadeSection>
        </div>
      </div>
    </section>
    
  );
};

const GraduationCap = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14v7" />
  </svg>
);

export default Projects;
