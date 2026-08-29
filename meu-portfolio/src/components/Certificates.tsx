import { motion } from "framer-motion";
import { Award, Calendar, Clock, Download, User } from "lucide-react";
import { useLanguage, Lang } from "@/hooks/use-language";

interface Certificate {
  title: string;
  issuer: string;
  instructors?: string;
  date?: string;
  duration?: string;
  note: Record<Lang, string>;
  image: string;
  file: string;
}

const certificates: Certificate[] = [
  {
    title: "Claude Code in Action",
    issuer: "Anthropic",
    date: "2026",
    note: {
      pt: "Curso hands-on sobre como usar o Claude Code no dia a dia de desenvolvimento — fluxos agênticos, automação de tarefas repetitivas e boas práticas para usar a ferramenta em projetos reais sem perder o controle sobre as decisões técnicas.",
      en: "Hands-on course on using Claude Code in day-to-day development — agentic workflows, automating repetitive tasks, and best practices for using the tool on real projects without losing control over technical decisions.",
    },
    image: "/certificates/claude-code-in-action.png",
    file: "/certificates/claude-code-in-action.pdf",
  },
  {
    title: "Claude Code 101",
    issuer: "Anthropic",
    date: "2026",
    note: {
      pt: "Fundamentos do Claude Code: como estruturar prompts, usar ferramentas (tools), navegar em um repositório e integrar a IA como parte do fluxo de desenvolvimento em vez de um atalho descuidado.",
      en: "Claude Code fundamentals: structuring prompts, using tools, navigating a repository, and integrating AI as part of the development workflow rather than a careless shortcut.",
    },
    image: "/certificates/claude-code-101.png",
    file: "/certificates/claude-code-101.pdf",
  },
  {
    title: "React do Zero a Maestria (c/ hooks, router, API, Projetos)",
    issuer: "Udemy",
    instructors: "Matheus Battisti, Hora de Codar",
    date: "20 de junho de 2026",
    duration: "32 horas",
    note: {
      pt: "Revisão profunda do React moderno: hooks do zero, roteamento com React Router, consumo de APIs e construção de projetos práticos ponta a ponta, reforçando os fundamentos que uso todo dia no trabalho.",
      en: "Deep review of modern React: hooks from scratch, routing with React Router, API consumption, and building practical end-to-end projects, reinforcing the fundamentals I use daily at work.",
    },
    image: "/certificates/react.png",
    file: "/certificates/react.pdf",
  },
  {
    title: "Curso de Inglês Rápido: do Básico à Fluência Sem Enrolação",
    issuer: "Udemy",
    instructors: "Paulo Andrade, Ph.D. · Marcus A.",
    date: "21 de outubro de 2024",
    duration: "62.5 horas",
    note: {
      pt: "Curso intensivo de inglês para ganhar fluência e confiança na comunicação técnica — essencial para ler documentação, participar de reuniões e escrever em inglês no dia a dia como desenvolvedor.",
      en: "Intensive English course to build fluency and confidence in technical communication — essential for reading documentation, joining meetings, and writing in English as part of daily developer work.",
    },
    image: "/certificates/ingles.png",
    file: "/certificates/ingles.pdf",
  },
  {
    title: "Curso Web Moderno Completo com JavaScript 2022 + Projetos",
    issuer: "Udemy",
    instructors: "Leonardo Moura Leitão, Cod3r Cursos Online",
    date: "29 de junho de 2023",
    duration: "97.5 horas",
    note: {
      pt: "Curso completo de desenvolvimento web moderno com JavaScript — do fundamento da linguagem a projetos práticos, consolidando a base que uso até hoje em HTML, CSS e JS puro antes de qualquer framework.",
      en: "Complete modern web development course with JavaScript — from language fundamentals to practical projects, consolidating the foundation I still use today in HTML, CSS, and vanilla JS before reaching for any framework.",
    },
    image: "/certificates/web-moderno.png",
    file: "/certificates/web-moderno.pdf",
  },
  {
    title: "Programação em Python do básico ao avançado",
    issuer: "Udemy",
    instructors: "Geek University",
    date: "8 de março de 2022",
    duration: "63.5 horas",
    note: {
      pt: "Formação completa em Python, do básico à orientação a objetos e estruturas mais avançadas — minha porta de entrada para lógica de programação antes de migrar para o ecossistema web.",
      en: "Complete Python training, from the basics to object-oriented programming and more advanced structures — my entry point into programming logic before moving into the web ecosystem.",
    },
    image: "/certificates/python.png",
    file: "/certificates/python.pdf",
  },
];

const heading: Record<Lang, string> = {
  pt: "certificações",
  en: "certifications",
};

const downloadLabel: Record<Lang, string> = {
  pt: "baixar_certificado",
  en: "download_certificate",
};

const Certificates = () => {
  const { lang } = useLanguage();

  return (
    <section id="certificacoes" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="text-primary font-mono text-lg block mb-2">05.</span>
            {heading[lang]}
          </h2>
          <div className="section-line" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, i) => (
            <motion.article
              key={cert.title}
              className="bg-card border border-border rounded-xl overflow-hidden card-hover flex flex-col"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
            >
              <a
                href={cert.file}
                target="_blank"
                rel="noopener noreferrer"
                className="relative aspect-video overflow-hidden bg-secondary/30 block group"
              >
                <img
                  src={cert.image}
                  alt={`Certificado - ${cert.title}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-2 right-2 flex items-center gap-1.5 bg-background/80 backdrop-blur-sm text-xs font-mono px-2.5 py-1 rounded-md text-foreground/80 border border-border/50">
                  <Award size={11} className="text-primary" />
                  {cert.issuer}
                </div>
              </a>

              <div className="p-5 flex flex-col gap-3 flex-1">
                <h3 className="font-mono text-sm font-bold text-foreground leading-snug">
                  {cert.title}
                </h3>

                <p className="text-xs text-muted-foreground leading-relaxed flex-1">
                  {cert.note[lang]}
                </p>

                <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs font-mono text-muted-foreground/80 pt-1 border-t border-border/50">
                  {cert.instructors && (
                    <span className="flex items-center gap-1.5">
                      <User size={12} className="text-primary/70" />
                      {cert.instructors}
                    </span>
                  )}
                  {cert.date && (
                    <span className="flex items-center gap-1.5">
                      <Calendar size={12} className="text-primary/70" />
                      {cert.date}
                    </span>
                  )}
                  {cert.duration && (
                    <span className="flex items-center gap-1.5">
                      <Clock size={12} className="text-primary/70" />
                      {cert.duration}
                    </span>
                  )}
                </div>

                <a
                  href={cert.file}
                  download
                  className="flex items-center justify-center gap-2 px-4 py-2 border border-border rounded-lg text-muted-foreground hover:text-primary hover:border-primary/40 transition-all font-mono text-xs mt-1"
                >
                  <Download size={13} />
                  {downloadLabel[lang]}
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
