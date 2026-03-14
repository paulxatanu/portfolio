import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-2 flex items-center gap-3">
            <Send className="text-primary" size={28} />
            <span className="text-gradient">Contact Me</span>
          </h2>
          <p className="text-muted-foreground mb-2">Let's connect and build something amazing together</p>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded mb-8" />
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6">
          <motion.a
            href="mailto:palatanu4510@gmail.com"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0 }}
            className="bg-card rounded-xl p-6 border border-border card-hover text-center group"
          >
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Mail className="text-primary" size={24} />
            </div>
            <h3 className="font-semibold text-foreground mb-1">Email</h3>
            <p className="text-sm text-muted-foreground">palatanu4510@gmail.com</p>
          </motion.a>

          <motion.a
            href="https://github.com/paulxatanu"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-card rounded-xl p-6 border border-border card-hover text-center group"
          >
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Github className="text-primary" size={24} />
            </div>
            <h3 className="font-semibold text-foreground mb-1">GitHub</h3>
            <p className="text-sm text-muted-foreground">github.com/paulxatanu</p>
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/atanu-pal-ap45/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-card rounded-xl p-6 border border-border card-hover text-center group"
          >
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Linkedin className="text-primary" size={24} />
            </div>
            <h3 className="font-semibold text-foreground mb-1">LinkedIn</h3>
            <p className="text-sm text-muted-foreground">linkedin.com/in/atanu-pal-ap45/</p>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
