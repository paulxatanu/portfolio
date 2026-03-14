import { motion } from "framer-motion";
import { Download, ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:60px_60px]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.08),transparent_70%)]" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", duration: 0.8 }}
          className="w-32 h-32 mx-auto mb-6 rounded-full border-2 border-primary/50 glow-border overflow-hidden bg-secondary flex items-center justify-center"
        >
          <img src="/profile.jpeg" alt="Atanu Pal" className="w-full h-full object-cover object-center"
/>
        </motion.div>

        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-block px-4 py-1.5 mb-4 text-xs font-mono rounded-full border border-primary/30 text-primary bg-primary/5"
        >
          Open to Opportunities
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2"
        >
          Hi, I'm <span className="text-gradient">Atanu Pal</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-xl sm:text-2xl text-primary font-mono mb-6"
        >
          Cloud and DevOps Engineer
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-muted-foreground max-w-2xl mx-auto mb-8 text-base sm:text-lg"
        >
          Passionate cloud engineer, automating infrastructure through DevOps and scalable architecture. 
          Always learning, always building.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-8"
        >
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
          >
            <Download size={18} /> Download Resume
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground hover:border-primary/50 transition-colors"
          >
            View Projects <ArrowDown size={18} />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex justify-center gap-4"
        >
          <a href="https://github.com/paulxatanu" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-border hover:border-primary/50 text-muted-foreground hover:text-primary transition-all">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/atanu-pal-ap45/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-border hover:border-primary/50 text-muted-foreground hover:text-primary transition-all">
            <Linkedin size={20} />
          </a>
          <a href="mailto:palatanu4510@gmail.com" className="p-3 rounded-full border border-border hover:border-primary/50 text-muted-foreground hover:text-primary transition-all">
            <Mail size={20} />
          </a>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ArrowDown className="text-muted-foreground" size={24} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
