import { motion } from "framer-motion";

const techStack = [
  {
    category: "Frontend",
    icon: "◈",
    techs: ["React", "Next.js", "React Native", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Backend",
    icon: "◉",
    techs: ["Node.js", "NestJS", "Spring Boot", "REST APIs", "GraphQL"],
  },
  {
    category: "Database",
    icon: "◎",
    techs: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "SQLite"],
  },
  {
    category: "DevOps & Cloud",
    icon: "⬡",
    techs: ["Docker", "Docker Compose", "AWS (EC2, S3, RDS)", "CI/CD (GitHub Actions)", "Git", "Linux"],
  },
  {
    category: "Arquitetura & Segurança",
    icon: "◇",
    techs: ["Multi-tenant / RLS", "JWT & OAuth2", "Stripe / Billing", "Testes automatizados", "LGPD & OWASP"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="text-primary font-mono text-lg block mb-2">02.</span>
            tech_stack
          </h2>
          <div className="section-line" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {techStack.map((group, i) => (
            <motion.div
              key={group.category}
              className="bg-card border border-border rounded-xl p-6 card-hover"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div className="flex items-center gap-2.5 mb-5">
                <span className="text-primary text-lg leading-none">{group.icon}</span>
                <h3 className="font-mono text-sm font-semibold text-foreground">
                  {group.category}
                </h3>
              </div>
              <ul className="space-y-2.5">
                {group.techs.map((tech) => (
                  <li key={tech} className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0" />
                    <span className="text-sm text-muted-foreground font-mono">{tech}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
