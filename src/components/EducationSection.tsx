import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const educationData = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Lovely Professional University",
    location: "Jalandhar, Punjab",
    period: "2023 – 2027",
    grade: "CGPA: 7.5/10",
    description: "Focused on cloud engineering, data structures, and DevOps.",
  },
  {
    degree: "Higher Secondary (12th)",
    institution: "Raniganj High School",
    location: "Raniganj, West Bengal",
    period: "2020 – 2022",
    grade: "Percentage: 90%",
    description: "Science stream with Mathematics.",
  },
  {
    degree: "Secondary (10th)",
    institution: "Asansol Ramakrishna Mission High School",
    location: "Asansol, West Bengal",
    period: "2020",
    grade: "Percentage: 92.75%",
    description: "Completed with distinction.",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-2 flex items-center gap-3">
            <GraduationCap className="text-primary" size={28} />
            <span className="text-gradient">Education</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded mb-8" />
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-transparent" />

          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative pl-12"
              >
                <div className="absolute left-2.5 top-2 w-3 h-3 rounded-full bg-primary glow-border" />
                <div className="bg-card rounded-xl p-6 border border-border card-hover">
                  <h3 className="text-lg font-semibold text-foreground">{edu.degree}</h3>
                  <p className="text-primary font-mono text-sm mt-1">{edu.institution}</p>
                  <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1"><Calendar size={14} /> {edu.period}</span>
                    <span className="flex items-center gap-1"><MapPin size={14} /> {edu.location}</span>
                  </div>
                  <span className="inline-block mt-2 px-3 py-1 text-xs rounded-full bg-primary/10 text-primary font-mono">{edu.grade}</span>
                  <p className="text-muted-foreground text-sm mt-3">{edu.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
