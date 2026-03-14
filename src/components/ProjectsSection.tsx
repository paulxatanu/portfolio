import { motion } from "framer-motion";
import { FolderGit2, Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "AWS Autometic face recognization",
    description: "Built a cloud-based face recognition system using AWS Rekognition to detect and match faces from uploaded images. Integrated Amazon S3 for image storage and DynamoDB for metadata logging, including similarity score and timestamps.",
    tech: ["AWS S3","AWS recognization", "Docker", "AWS RDS"],
    github: "https://github.com/paulxatanu/face-recognizer-aws",
    //live: "",
  },
  {
    title: "AWS VPC Terraform Project",
    description: "Provisioned and managed cloud infrastructure on AWS using Terraform, automating the deployment of resources such as EC2 instances, networking, and security configurations.Implemented Infrastructure as Code (IaC) to enable reproducible, scalable, and version-controlled infrastructure management. ",
    tech: ["Terraform", "AWS VPC", "AWS EC2", "Apache Web Server"],
    github: "https://github.com/paulxatanu/terraform-vpc-project",
    //live: "",
  },
  {
    title: "Recipe Finder",
    description: "Developed the frontend UI using HTML and CSS of a recipe finder website",
    tech: ["HTML5", "CSS3"],
    github: "https://github.com/paulxatanu/recipe-finder",
    live: "",
  },
  {
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website built with React and Framer Motion with smooth animations.",
    tech: ["React", "TypeScript", "Tailwind", "Framer Motion"],
    github: "https://github.com/paulxatanu/your-intro-port",
    //live: "",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-2 flex items-center gap-3">
            <FolderGit2 className="text-primary" size={28} />
            <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground mb-2">Hands-on work demonstrating my technical journey</p>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded mb-8" />
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-xl p-6 border border-border card-hover group"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
                <div className="flex gap-2">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    <Github size={18} />
                  </a>
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="px-2 py-1 text-xs rounded bg-primary/10 text-primary font-mono">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
