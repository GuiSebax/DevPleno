import { motion } from "framer-motion";

const experiences = [
  {
    company: "Accion Sistemas",
    role: "Desenvolvedor Fullstack Pleno N2",
    period: "Mar 2026 → Atualmente",
    duration: "atual",
    techs: ["React", "Spring Boot", "TypeScript", "Tailwind", "PostgreSQL", "Docker"],
    description:
      "Continuo como líder do projeto do Seven+ que está ganhando cada vez mais volume, sendo utilizado por clientes e recebendo muitos feedbacks ótimos de usabilidade, escalabilidade e de fácil acesso para os mesmos. Obtendo um desenvolvimento completo e correto durante todo o ciclo Scrum.",
  },
  {
    company: "Accion Sistemas",
    role: "Desenvolvedor Fullstack Pleno N1",
    period: "Jun 2025 → Fev 2026",
    duration: "8 meses",
    techs: ["React", "Spring Boot", "TypeScript", "Tailwind", "PostgreSQL", "Docker"],
    description:
      "Liderei o desenvolvimento técnico do Seven+, uma plataforma estratégica de gestão de vendas B2B na Accion Sistemas. Fui o responsável por todo o ciclo de vida do produto — desde a arquitetura do sistema e otimização do backend até a implementação do front-end e a implantação em nuvem.",
  },
  {
    company: "Accion Sistemas",
    role: "Desenvolvedor Fullstack Trainee",
    period: "Mar 2025 → Jun 2025",
    duration: "4 meses",
    techs: ["React", "Spring Boot", "TypeScript", "Tailwind", "PostgreSQL", "Docker", "Android Studio"],
    description:
      "Comecei como desenvolvedor trainee lidando com pequenos problemas desenvolvidos em Android Studio e outros projetos legados para iniciar o entendimento das regras de negócio.",
  },
  {
    company: "Universidade Estadual de Maringá",
    role: "Desenvolvedor Fullstack Estagiário",
    period: "Ago 2023 → Ago 2024",
    duration: "~1 ano",
    techs: ["React", "Spring Boot", "PostgreSQL", "Docker"],
    description:
      "Estagiário em desenvolvimento web full-stack no projeto 'Uma Solução Tecnológica para a Vigilância Entomológica e Controle de Vetores das Arboviroses no Paraná', desenvolvendo aplicações web e mobile para auxiliar na detecção e controle de surtos de dengue em parceria com SESA/PR e Ministério Público do Estado.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="text-primary font-mono text-lg block mb-2">04.</span>
            experiência
          </h2>
          <div className="section-line" />
        </motion.div>

        <div className="relative">
          {/* Timeline vertical line */}
          <div
            className="absolute top-3 bottom-3 w-px bg-border hidden md:block"
            style={{ left: "11px" }}
          />

          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <motion.div
                key={`${exp.company}-${exp.role}`}
                className="flex gap-0 md:gap-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex flex-col items-center shrink-0">
                  <div className="w-[23px] h-[23px] rounded-full border-2 border-primary bg-background flex items-center justify-center mt-5">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                </div>

                {/* Card */}
                <div className="flex-1 bg-card border border-border rounded-xl p-6 card-hover">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="font-mono text-lg font-bold text-foreground leading-tight">
                        {exp.role}
                      </h3>
                      <p className="text-primary font-mono text-sm mt-1">{exp.company}</p>
                    </div>
                    <div className="text-left sm:text-right shrink-0">
                      <p className="font-mono text-xs text-muted-foreground bg-secondary/60 px-2.5 py-1 rounded-md inline-block">
                        {exp.period}
                      </p>
                      <p className="font-mono text-xs text-muted-foreground/50 mt-1">
                        {exp.duration}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.techs.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono text-primary/70 bg-primary/10 px-2.5 py-1 rounded-md border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
