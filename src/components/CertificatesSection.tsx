import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const certificates = [
  {
    title: "Social Networks",
    issuer: "NPTEL",
    date: "2025",
    link: "https://drive.google.com/file/d/132N69JRQoY51XKy7Rle1emahKUcLai4H/view?usp=sharing",
  },
  {
    title: "Computer Communications Specialization",
    issuer: "Coursera",
    date: "2024",
    link: "https://drive.google.com/file/d/1Ibd9W9VNNpx6mGVZI2ydxjSXT9_N3XbL/view?usp=sharing",
  },
  {
    title: "Packet Switching Networks and Algorithms",
    issuer: "Coursera",
    date: "2024",
    link: "https://drive.google.com/file/d/1W8Ym8FiVFPSWiG81sD4OrStDqq7RFG0P/view?usp=sharing",
  },
  {
    title: "TCP/IP and Advanced Topics",
    issuer: "Coursera",
    date: "2024",
    link: "https://drive.google.com/file/d/1xinsyYNqAC3fSpzVA7-s1S-atPky94TN/view?usp=sharing",
  },
];

const CertificatesSection = () => {
  return (
    <section id="certificates" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-2 flex items-center gap-3">
            <Award className="text-primary" size={28} />
            <span className="text-gradient">Certificates</span>
          </h2>
          <p className="text-muted-foreground mb-2">Upload your certificates and they'll be viewable here</p>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded mb-8" />
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-xl p-6 border border-border card-hover group"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">{cert.title}</h3>
                  <p className="text-sm text-primary font-mono mt-1">{cert.issuer}</p>
                  <p className="text-xs text-muted-foreground mt-1">{cert.date}</p>
                </div>
                {cert.link && (
                  <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
