import { motion } from "framer-motion";
import { Code2 } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [ "HCL", "C", "C++"],
  },
  {
    title: "Cloud Platforms",
    skills: ["AWS", "Amazon EC2", "Amazon S3", "Amazon CloudFront", "AWS IAM", "Amazon DynamoDB", "AWS Rekognition", "AWS Lambda"],
  },
  {
    title: "DevOps & Automation",
    skills: ["Docker", "Terraform", "CI/CD", "Jira", "Infrastructure as Code (IaC)"],
  },
  {
    title: "Operating Systems",
    skills: ["Linux", "Ubuntu", "Terminal/CLI", "System Administration Basics"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-2 flex items-center gap-3">
            <Code2 className="text-primary" size={28} />
            <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-muted-foreground mb-2">Technologies and tools I work with</p>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded mb-8" />
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {skillCategories.map((cat, index) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-xl p-6 border border-border card-hover"
            >
              <h3 className="text-sm font-mono text-primary mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm rounded-lg bg-secondary text-secondary-foreground border border-border hover:border-primary/40 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
