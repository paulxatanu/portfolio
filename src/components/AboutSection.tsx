import { motion } from "framer-motion";
import { User } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-2 flex items-center gap-3">
            <User className="text-primary" size={28} />
            <span className="text-gradient">About Me</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded mb-8" />

          <div className="bg-card rounded-xl p-6 sm:p-8 border border-border glow-border">
            <p className="text-muted-foreground leading-relaxed mb-4">
              I'm an aspiring Cloud & DevOps Engineer passionate about building scalable, automated, and reliable cloud infrastructures. I enjoy working with modern cloud technologies to design systems that are secure, efficient, and capable of handling real-world workloads.

My learning approach is project-driven — I build and deploy cloud-based applications to understand how systems operate end-to-end, from infrastructure provisioning to monitoring and automation. Through hands-on experience with cloud services, DevOps tools, and infrastructure as code, I continuously work on improving system performance, reliability, and scalability.

            </p>
            <p className="text-muted-foreground leading-relaxed">
              My approach is hands-on — I build projects to understand how systems work end-to-end, 
              from intuitive frontend interfaces to robust backend architectures. I believe in writing clean, 
              maintainable code and continuously improving my craft.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
