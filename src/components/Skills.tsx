import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Systems & Infrastructure",
    skills: ["Linux Administration", "Windows 7/10/11", "MacOS Sonoma", "Virtualization", "Cloud Technologies", "SCCM"]
  },
  {
    title: "Networking & Security",
    skills: ["Network Administration", "Security Practices", "Configuration Management", "Risk Management"]
  },
  {
    title: "Leadership & Strategy",
    skills: ["Strategic Vision", "Decision Making", "Team Empowerment", "Stakeholder Management", "Conflict Resolution"]
  },
  {
    title: "Core Competencies",
    skills: ["Time Management", "Communication", "Innovation", "Project Leadership"]
  }
];

const Skills = () => {
  return (
    <section className="py-24 relative" id="skills">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-display text-primary text-sm tracking-widest mb-4">
            <span className="text-muted-foreground">$</span> cat skills.json
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gradient">
            Technical Arsenal
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.5 }}
              className="card-gradient border border-border/50 rounded-xl p-6 hover:border-primary/30 transition-all duration-300"
            >
              <h3 className="font-display text-lg font-semibold text-primary mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    className="px-3 py-1.5 text-sm font-display bg-muted/50 text-foreground rounded-lg border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all duration-200"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
