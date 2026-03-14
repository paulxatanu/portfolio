import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const trainings = [
  {
    title: "Data Structures Algorithms and OOPS : CPP",
    organization: "CSE Pathshala",
    period: "May 2025 – July 2025",
    description: "Intensive 12-week program covering DSA, Oops concepts.",
    skills: ["Problem Solving", "DSA", "OOPS"],
  }
];

const TrainingSection = () => {
  return (
    <section id="training" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-2 flex items-center gap-3">
            <Briefcase className="text-primary" size={28} />
            <span className="text-gradient">Training & Experience</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded mb-8" />
        </motion.div>

        <div className="space-y-6">
          {trainings.map((training, index) => (
            <motion.div
              key={training.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-card rounded-xl p-6 border border-border card-hover"
            >
              <h3 className="text-lg font-semibold text-foreground">{training.title}</h3>
              <p className="text-primary font-mono text-sm mt-1">{training.organization}</p>
              <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                <Calendar size={12} /> {training.period}
              </p>
              <p className="text-sm text-muted-foreground mt-3">{training.description}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {training.skills.map((s) => (
                  <span key={s} className="px-2 py-1 text-xs rounded bg-primary/10 text-primary font-mono">{s}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainingSection;
