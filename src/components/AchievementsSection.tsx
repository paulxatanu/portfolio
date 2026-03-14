import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

const achievements = [
  {
    title: "150+ Problems solved in Leetcode and GFG",
    description: "Various types of problems including Arrays, LinkedList, Stack, Queue, Tree are solved in leetcode and gfg",
    year: "2026",
  },
  {
    title: "Top 25% students.",
    description: "in Data Structure and Algorithms Course by GFG",
    year: "2024",
  },
  
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-2 flex items-center gap-3">
            <Trophy className="text-primary" size={28} />
            <span className="text-gradient">Achievements</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded mb-8" />
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {achievements.map((ach, index) => (
            <motion.div
              key={ach.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-xl p-6 border border-border card-hover"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-mono px-2 py-1 rounded bg-accent/20 text-accent">{ach.year}</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">{ach.title}</h3>
              <p className="text-sm text-muted-foreground">{ach.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
