export const profile = {
  name: "Karthi C",
  role: "Java Backend Developer | Full Stack Developer",
  location: "Tamil Nadu, India",
  email: "karthichinnathai@gmail.com",
  github: "https://github.com/Karthi247",
  linkedin: "https://www.linkedin.com/in/karthi-c2470",
  introduction:
    "I am a Java Backend Developer with practical experience building web applications using Java, Spring Boot, React, and MySQL. I enjoy developing scalable backend systems, designing REST APIs, solving real-world problems, and learning modern software technologies.",
};

export const skillGroups = [
  { title: "Backend", skills: ["Java", "Spring Boot", "Spring MVC", "Spring Security", "Hibernate / JPA", "REST APIs", "Microservices"] },
  { title: "Frontend", skills: ["React.js", "JavaScript", "HTML5", "CSS3", "Bootstrap"] },
  { title: "Database", skills: ["MySQL", "SQL", "Database Design"] },
  { title: "Tools & DevOps", skills: ["Git", "GitHub", "Maven", "Docker", "Jenkins", "GitHub Actions", "Linux"] },
  { title: "Cloud", skills: ["AWS EC2", "AWS RDS", "AWS S3", "VPC", "IAM", "Lambda", "API Gateway", "CloudWatch"] },
];

export const projects = [
  {
    title: "Government Welfare Advisory System",
    category: "Civic technology · Full stack",
    type: "Full Stack",
    description: "A platform for discovering government welfare schemes, assessing potential eligibility, and managing applications. A Spring Boot API connects the React interface, MySQL data, and a Flask machine learning service.",
    technologies: ["Java", "Spring Boot", "React", "MySQL", "Python", "Flask", "Machine Learning"],
    repository: "https://github.com/Karthi247/Government-Welfare-Advisory-System",
    visual: "welfare",
    mark: "01",
  },
  {
    title: "Task Management System",
    category: "Productivity · Full stack",
    type: "Full Stack",
    description: "A role-based application for organizing projects, assigning tasks, and following team progress. The React frontend works with a Spring Boot API and MySQL database.",
    technologies: ["Java", "Spring Boot", "React", "MySQL", "Spring Security", "JWT"],
    repository: "https://github.com/Karthi247/Task-Management-System",
    visual: "tasks",
    mark: "02",
  },
  {
    title: "Employee Management System",
    category: "Business tools · Backend",
    type: "Backend",
    description: "A Spring Boot and JSP application for maintaining employee records and organizing departments through a centralized web interface.",
    technologies: ["Java", "Spring Boot", "Spring MVC", "JSP", "MySQL", "Maven"],
    repository: "https://github.com/Karthi247/Employee_Management_System",
    visual: "employees",
    mark: "03",
  },
  {
    title: "Job Application Tracker",
    category: "Career tools · Full stack",
    type: "Full Stack",
    description: "A Java and Spring Boot application for organizing job applications, with JSP views for tracking application details and progress.",
    technologies: ["Java", "Spring Boot", "JSP", "MySQL", "Hibernate / JPA"],
    repository: "https://github.com/Karthi247/Job_Application_Tracker",
    visual: "jobs",
    mark: "04",
  },
  {
    title: "Event Registration System",
    category: "Events · Full stack",
    type: "Full Stack",
    description: "An event management and registration system concept, planned around a Java, Spring Boot, React, and MySQL stack.",
    technologies: ["Java", "Spring Boot", "React.js", "MySQL", "Hibernate / JPA", "REST APIs"],
    repository: "https://github.com/Karthi247/Event_Registration_Management_System",
    visual: "events",
    mark: "05",
  },
  {
    title: "Student Management System",
    category: "Education · Backend",
    type: "Full Stack",
    description: "A student and course records application with JSP views for student access, profiles, and academic information.",
    technologies: ["Java", "Spring Boot", "JSP", "MySQL", "Hibernate / JPA"],
    repository: "https://github.com/Karthi247/Student_Management_System",
    visual: "students",
    mark: "06",
  },
];

export const featuredProjects = projects.slice(0, 3);

export const education = {
  degree: "Bachelor of Engineering in Computer Science",
  institution: "Government College of Engineering, Erode",
  cgpa: "8.02",
};

export const internship = {
  title: "Full Stack Development Intern",
  description: "Worked with Java, Spring Boot, React, and MySQL while contributing to REST API development, CRUD implementation, database schema design, and responsive frontend integration.",
  technologies: ["Java", "Spring Boot", "React", "MySQL", "REST APIs"],
};
