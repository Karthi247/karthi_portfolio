import { GraduationCap, Calendar } from "lucide-react";
import FadeSection from "./FadeSection"; // 👈 import your fade component

const Education = () => {
  const educationData = [
    {
      institution: "Government College of Engineering, Erode",
      degree: "B.E Computer Science Engineering",
      cgpa: "CGPA: 0.77",
      period: "April 2026 (pursuing)",
      description:
        "Currently pursuing Bachelor's degree in Computer Science Engineering with focus on software development and programming fundamentals.",
    },
    {
      institution: "Vishweshwarayah Hr. Sec. School, Thoppur",
      degree: "Higher Secondary Education",
      percentage: "Percentage: 82%",
      period: "March 2022",
      description:
        "Completed higher secondary education with strong performance in mathematics and science subjects.",
    },
    {
      institution: "St.Sebastain's High School, Nagalur",
      degree: "High School Education",
      percentage: "Percentage: 68%",
      period: "June 2020",
      description:
        "Completed high school education with strong performance in mathematics and science subjects.",
    },
  ];

  return (
    <FadeSection>
    <section id="education" className="py-20 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My educational journey and academic achievements that have shaped my
            technical foundation.
          </p>
        </div>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <FadeSection key={index}>
              <div className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-shadow duration-300">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                      <GraduationCap className="w-8 h-8 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-2">
                          {edu.degree}
                        </h3>
                        <p className="text-lg text-primary font-semibold mb-2">
                          {edu.institution}
                        </p>
                        <p className="text-accent font-medium">
                          {edu.cgpa || edu.percentage}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar size={16} />
                        <span className="font-medium">{edu.period}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </div>
              </div>
            </FadeSection>
          ))}
        </div>
      </div>
    </section>
    </FadeSection>
  );
};

export default Education;
