import { motion } from "framer-motion";

const experiences = [
  {
    company: "Accion Sistemas",
    role: "Desenvolvedor Fullstack Pleno N2",
    period: "Mar 2026 → Atualmente",
    duration: "...",
    techs: [
      "React",
      "Spring Boot",
      "TypeScript",
      "Tailwind",
      "PostgreSQL",
      "Docker",
    ],
    description:
      "Continuo como líder do projeto do Seven+ que está ganhando cada vez mais volume, sendo utilizado por clientes e recebendo muitos feedbacks ótimos de usabilidade, escalabilidade e de fácil acesso para os mesmo. Obtendo um desenvolvimento completo e correto durante todo o ciclo Scrum.",
  },
  {
    company: "Accion Sistemas",
    role: "Desenvolvedor Fullstack Pleno N1",
    period: "Junho 2025 → Fevereiro 2026",
    duration: "8 meses",
    techs: [
      "React",
      "Spring Boot",
      "TypeScript",
      "Tailwind",
      "PostgreSQL",
      "Docker",
    ],
    description:
      "Liderei o desenvolvimento técnico do Seven+, uma plataforma estratégica de gestão de vendas B2B na Accion Sistemas. Fui o responsável por todo o ciclo de vida do produto -- desde a arquitetura do sistema e otimização do backend até a implementação do front-end e a implantação em nuvem.",
  },
  {
    company: "Accion Sistemas",
    role: "Desenvolvedor Fullstack Trainee",
    period: "Mar 2025 → Junho 2025",
    duration: "4 meses",
    techs: [
      "React",
      "Spring Boot",
      "TypeScript",
      "Tailwind",
      "PostgreSQL",
      "Docker",
      "Android Studio",
    ],
    description:
      "Comecei como um desenvolvedor trainne lidando com pequenos problemas desenvolvidos em Android Studio, e outro projetos legados para conseguir entender as regras de negócio.",
  },
  {
    company: "Universidade Estadual de Maringá",
    role: "Desenvolvedor Fullstack Trainee",
    period: "Agosto 2023 → Agosto 2024",
    duration: "~1 anos",
    techs: ["React", "Spring Boot", "PostgreSQL", "Docker"],
    description:
      "Estagiário em desenvolvimento web com foco em Full-Stack no projeto 'Uma Solução Tecnológica para a Vigilância Entomológica e Controle de Vetores das Arboviroses no Paraná', o qual tem como objetivo o desenvolvimento de aplicação web e mobile para auxiliar na detecção e controle de surtos e focos de dengue, a arbovirose mais prevalente no Brasil. Com essa motivação, a SESA/PR (Secretaria de Saúde do Estado do Paraná), o Ministério Público do Estado do Paraná, o Departamento de Informática da universidade Estadual de Maringá (UEM) e o Centro Universitário Ingá (UNINGA) firmam parceria no desenvolvimento de instrumentos mais eficazes para o acompanhamento e supervisão da doença.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="text-primary font-mono text-lg block mb-2">
              04.
            </span>
            experiência
          </h2>
          <div className="w-20 h-0.5 bg-primary mb-12" />
        </motion.div>

        <div className="flex flex-col gap-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              className="bg-card border border-border rounded-lg p-6 card-hover"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              {/* Barra de título estilo terminal */}
              <div className="flex items-center gap-2 mb-4 font-mono text-sm text-muted-foreground">
                <span className="w-3 h-3 rounded-full bg-destructive/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-code-string/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-primary/80 inline-block" />
                <span className="ml-2">
                  {exp.company.toLowerCase().replace(/\s/g, "_")}.ts
                </span>
              </div>

              {/* Conteúdo */}
              <div className="font-mono text-sm leading-7 text-muted-foreground mb-4">
                <p>
                  <span className="text-accent">const</span>{" "}
                  <span className="text-foreground">exp</span> = {"{"}
                </p>
                <p className="pl-6">
                  <span className="text-primary">empresa</span>:{" "}
                  <span className="text-code-string">"{exp.company}"</span>,
                </p>
                <p className="pl-6">
                  <span className="text-primary">cargo</span>:{" "}
                  <span className="text-code-string">"{exp.role}"</span>,
                </p>
                <p className="pl-6">
                  <span className="text-primary">período</span>:{" "}
                  <span className="text-code-string">"{exp.period}"</span>{" "}
                  <span className="text-muted-foreground/50 text-xs">
                    // {exp.duration}
                  </span>
                </p>
                <p>{"}"}</p>
              </div>

              {/* Descrição */}
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed pl-1 border-l-2 border-primary/30">
                {exp.description}
              </p>

              {/* Techs */}
              <div className="flex flex-wrap gap-2">
                {exp.techs.map((tech) => (
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

export default Experience;
