import { motion } from "framer-motion";
import { useLanguage, Lang } from "@/hooks/use-language";

interface AboutContent {
  heading: string;
  paragraphs: React.ReactNode[];
  highlights: string[];
  codeLabels: {
    filename: string;
    role: string;
    experience: string;
    location: string;
    education: string;
    focus: string;
    available: string;
  };
  codeValues: {
    role: string;
    education: string;
  };
}

const content: Record<Lang, AboutContent> = {
  pt: {
    heading: "sobre_mim",
    paragraphs: [
      <>
        Desenvolvedor Fullstack Pleno, formado em{" "}
        <span className="text-foreground font-medium">
          Ciência da Computação pela Universidade Estadual de Maringá
        </span>{" "}
        (2021–2025), com mais de{" "}
        <span className="text-foreground font-medium">2 anos de experiência</span>{" "}
        construindo aplicações web e mobile em produção. Atualmente na{" "}
        <span className="text-foreground font-medium">Accion Sistemas</span>, onde
        lidero o desenvolvimento do{" "}
        <span className="text-primary font-medium">Seven+</span> — uma
        plataforma estratégica de gestão de vendas B2B usada por múltiplos
        clientes, do design da API à infraestrutura em produção.
      </>,
      <>
        Trato API REST como um contrato: previsível, versionado e fácil de
        consumir por quem vem depois. Presto atenção especial à modelagem de
        dados — cardinalidade, integridade referencial e constraints que
        evitam problemas silenciosos meses depois — e meço meu trabalho pelo
        impacto real que uma feature gera no negócio, não apenas por fechar o
        ticket.
      </>,
    ],
    highlights: [
      "React, Next.js & TypeScript no frontend",
      "Spring Boot & NestJS no backend",
      "PostgreSQL, Docker e AWS na infraestrutura",
      "Integrações via API REST, multi-tenant e segurança de dados",
      "Ciclo Scrum completo com foco em escala",
    ],
    codeLabels: {
      filename: "sobre.ts",
      role: "cargo",
      experience: "experiência",
      location: "localização",
      education: "formação",
      focus: "foco",
      available: "disponível",
    },
    codeValues: {
      role: "Fullstack Pleno",
      education: "Ciência da Computação — UEM (2021–2025)",
    },
  },
  en: {
    heading: "about_me",
    paragraphs: [
      <>
        Mid-level (Pleno) Fullstack Developer, graduated in{" "}
        <span className="text-foreground font-medium">
          Computer Science from Universidade Estadual de Maringá
        </span>{" "}
        (2021–2025), with over{" "}
        <span className="text-foreground font-medium">2 years of experience</span>{" "}
        building production web and mobile applications. Currently at{" "}
        <span className="text-foreground font-medium">Accion Sistemas</span>,
        where I lead development of{" "}
        <span className="text-primary font-medium">Seven+</span> — a
        strategic B2B sales management platform used by multiple clients,
        end-to-end from API design to production infrastructure.
      </>,
      <>
        I treat REST APIs as a contract: predictable, versioned, and easy for
        whoever comes next to consume. I pay close attention to data
        modeling — cardinality, referential integrity, and constraints that
        prevent silent problems months down the line — and I measure my work
        by the actual business impact a feature has, not by closing the
        ticket.
      </>,
    ],
    highlights: [
      "React, Next.js & TypeScript on the frontend",
      "Spring Boot & NestJS on the backend",
      "PostgreSQL, Docker and AWS for infrastructure",
      "REST API integrations, multi-tenancy and data security",
      "Full Scrum cycle with a focus on scale",
    ],
    codeLabels: {
      filename: "about.ts",
      role: "role",
      experience: "experience",
      location: "location",
      education: "education",
      focus: "focus",
      available: "available",
    },
    codeValues: {
      role: "Mid-level Fullstack Developer",
      education: "Computer Science — UEM (2021–2025)",
    },
  },
};

const About = () => {
  const { lang } = useLanguage();
  const t = content[lang];

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="text-primary font-mono text-lg block mb-2">01.</span>
            {t.heading}
          </h2>
          <div className="section-line" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Text column */}
          <motion.div
            className="space-y-5"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {t.paragraphs.map((paragraph, i) => (
              <p key={i} className="text-muted-foreground leading-relaxed">
                {paragraph}
              </p>
            ))}
            <ul className="space-y-3 pt-2">
              {t.highlights.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span className="text-primary font-mono shrink-0">▹</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Code block column */}
          <motion.div
            className="bg-card border border-border rounded-xl p-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center gap-2 mb-5 pb-3 border-b border-border/50">
              <span className="w-3 h-3 rounded-full bg-destructive/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-code-string/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-primary/80 inline-block" />
              <span className="ml-2 font-mono text-xs text-muted-foreground">{t.codeLabels.filename}</span>
            </div>
            <div className="font-mono text-sm leading-7 text-muted-foreground">
              <p>
                <span className="text-accent">const</span>{" "}
                <span className="text-foreground">dev</span> = {"{"}
              </p>
              <p className="pl-5">
                <span className="text-primary">nome</span>:{" "}
                <span className="text-code-string">"Guilherme F. Clemente"</span>,
              </p>
              <p className="pl-5">
                <span className="text-primary">{t.codeLabels.role}</span>:{" "}
                <span className="text-code-string">"{t.codeValues.role}"</span>,
              </p>
              <p className="pl-5">
                <span className="text-primary">{t.codeLabels.experience}</span>:{" "}
                <span className="text-code-string">"2+ {lang === "pt" ? "anos" : "years"}"</span>,
              </p>
              <p className="pl-5">
                <span className="text-primary">{t.codeLabels.location}</span>:{" "}
                <span className="text-code-string">"Maringá, PR"</span>,
              </p>
              <p className="pl-5">
                <span className="text-primary">{t.codeLabels.education}</span>:{" "}
                <span className="text-code-string">"{t.codeValues.education}"</span>,
              </p>
              <p className="pl-5">
                <span className="text-primary">{t.codeLabels.focus}</span>: [
              </p>
              <p className="pl-10">
                <span className="text-code-string">"Web"</span>,{" "}
                <span className="text-code-string">"Mobile"</span>,
              </p>
              <p className="pl-10">
                <span className="text-code-string">"APIs"</span>,{" "}
                <span className="text-code-string">"Cloud"</span>
              </p>
              <p className="pl-5">],</p>
              <p className="pl-5">
                <span className="text-primary">{t.codeLabels.available}</span>:{" "}
                <span className="text-accent">true</span>,
              </p>
              <p>{"}"}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
