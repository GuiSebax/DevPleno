import { motion } from "framer-motion";

const techStack = [
  {
    category: "Frontend",
    techs: ["React", "Next.js", "React Native", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Backend",
    techs: ["Node.js", "NestJS", "Spring Boot", "REST APIs", "GraphQL"],
  },
  { category: "Database", techs: ["PostgreSQL", "MongoDB", "Redis", "Prisma"] },
  { category: "DevOps", techs: ["Docker", "CI/CD", "Git", "Linux", "AWS"] },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="text-primary font-mono text-lg block mb-2">
              02.
            </span>
            tech_stack
          </h2>
          <div className="w-20 h-0.5 bg-primary mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {techStack.map((group, i) => (
            <motion.div
              key={group.category}
              className="bg-card border border-border rounded-lg p-6 card-hover"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-primary font-mono text-sm">{">"}</span>
                <h3 className="font-mono text-foreground font-semibold">
                  {group.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.techs.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 bg-secondary text-secondary-foreground text-sm font-mono rounded border border-border hover:border-primary/40 transition-colors cursor-default"
                  >
                    {tech}
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

export default Skills;
