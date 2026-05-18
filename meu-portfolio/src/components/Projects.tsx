import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  X,
  Layers,
  Target,
  Lightbulb,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Images,
} from "lucide-react";

interface Project {
  title: string;
  description: string;
  longDescription: string;
  techs: string[];
  github: string | null;
  live: string | null;
  features: string[];
  role: string;
  challenge: string;
  images: string[];
}

const projects: Project[] = [
  {
    title: "Nest & Express API",
    description:
      "Um projeto backend que reúne duas implementações de API utilizando Express.js e Nest.js, com o objetivo de comparar arquiteturas, padrões e a experiência de desenvolvimento entre os dois frameworks dentro do ecossistema Node.js.",
    longDescription:
      "Um projeto backend que reúne duas implementações de API utilizando Express.js e Nest.js, com o objetivo de comparar arquiteturas, padrões e a experiência de desenvolvimento entre os dois frameworks dentro do ecossistema Node.js. Ambas as APIs abordam o mesmo conjunto de conceitos e funcionalidades, permitindo uma comparação prática entre uma abordagem mais flexível e minimalista, representada pelo Express, e outra mais estruturada e opinionada, ofereicda pelo NestJS",
    techs: ["Node.js", "TypeScript", "Express.js", "NestJS", "Prisma ORM", "PostgreSQL"],
    github: "https://github.com/GuiSebax/Nest-Express-API",
    live: null,
    features: [
      "Duas APIs independentes (Express e NestJS) no mesmo repositório",
      "Autenticação baseada em token (JWT)",
      "Validação de dados e tratamento de erros",
      "Integração com banco de dados via Prisma ORM",
      "Arquitetura modular e separação de responsabilidades",
      "Comparação prática de padrões e estrutura entre frameworks",
    ],
    role: "Backend Developer",
    challenge:
      "Manter o mesmo domínio e regras de negócio em duas arquiteturas diferentes, garantindo consistência funcional enquanto se exploram abordagens distintas de organização, abstração e escalabilidade.",
    images: [],
  },
  {
    title: "League of Legends Application",
    description:
      "Aplicação web desenvolvida com Next.js e Spring Boot que consome a API Data Dragon para exibir informações dos campeões do League of Legends.",
    longDescription:
      "Aplicação fullstack desenvolvida com Next.js no frontend e Spring Boot no backend, responsável por consumir a API oficial Data Dragon da Riot Games para obtenção dos dados dos campeões do League of Legends. A aplicação exibe informações como nome, imagem e lore (blurb) de cada campeão, com foco em organização de código, separação de responsabilidades e boas práticas de consumo de APIs externas.",
    techs: ["Next.js", "React", "TypeScript", "Spring Boot", "Java", "REST API"],
    github: "https://github.com/GuiSebax/League-Of-Legends-Application",
    live: null,
    features: [
      "Listagem de campeões do League of Legends",
      "Consumo da API Data Dragon",
      "Exibição de nome, imagem e lore dos campeões",
      "Backend intermediando e organizando o consumo da API externa",
      "Arquitetura separada entre frontend e backend",
    ],
    role: "Fullstack Developer",
    challenge:
      "Integrar e organizar o consumo da API Data Dragon através de um backend em Spring Boot, garantindo uma comunicação eficiente com o frontend em Next.js e mantendo uma estrutura de código limpa e escalável.",
    images: ["/lol_photo1.png", "/lol_photo2.png"],
  },
  {
    title: "Marketplace — Fullstack Application",
    description:
      "Aplicação fullstack desenvolvida em um monorepo com frontend em Vite + React e backend em Node.js com Express, focada na integração entre camadas e boas práticas de arquitetura.",
    longDescription:
      "Aplicação fullstack desenvolvida como um monorepo, reunindo frontend e backend no mesmo repositório. O frontend foi construído com Vite e React, enquanto o backend utiliza Node.js com Express e TypeScript. O projeto teve como objetivo a construção de uma aplicação funcional e a prática de integração entre as camadas, além da avaliação do uso de IA como ferramenta de apoio ao desenvolvimento, mantendo todas as decisões arquiteturais, regras de negócio e validações sob controle e revisão manual.",
    techs: ["Node.js", "Express", "TypeScript", "React", "Vite", "Tailwind CSS", "REST API"],
    github: "https://github.com/GuiSebax/MarketPlace",
    live: null,
    features: [
      "Arquitetura fullstack em monorepo",
      "Frontend em React com Vite e Tailwind CSS",
      "Backend em Express com API REST",
      "Autenticação e controle de acesso",
      "Compartilhamento de tipos e schemas entre frontend e backend",
      "Organização de código com foco em legibilidade e manutenção",
    ],
    role: "Fullstack Developer",
    challenge:
      "Estruturar um monorepo consistente, garantindo reutilização de tipos entre frontend e backend, além de avaliar o uso de IA como apoio ao desenvolvimento sem comprometer decisões técnicas e qualidade do código.",
    images: ["/inicial_marketplace.png", "/produtos_marketplace.png", "/cadastro_marketplace.png"],
  },
  {
    title: "Padilha & Padilha Advogados",
    description:
      "Desenvolvimento de site profissional com duas landing pages independentes para escritório de advocacia, focadas em conversão de leads via tráfego pago.",
    longDescription:
      "O projeto nasceu da necessidade de um escritório de advocacia familiar de criar uma presença digital estratégica para suportar campanhas de Google Ads e Meta Ads. O escritório atua em duas frentes distintas — Direito do Agronegócio, conduzido pelo Dr. Gustavo Padilha, e Licitações & Contratos Administrativos, conduzido pela Dra. Francielle Padilha — o que exigiu a criação de duas landing pages completamente independentes, cada uma com seu público, tom de comunicação e proposta de valor específicos. Todo o projeto foi construído com foco em conversão: mínimo de cliques para o contato, CTA visível sem scroll, botão flutuante de WhatsApp e formulário simplificado. A identidade visual seguiu rigorasamente o branding do escritório, com paleta de cores, tipografia e assets gráficos fornecidos pelo cliente. O deploy foi realizado na Vercel com domínio customizado configurado via Registro.br, incluindo configuração completa de registros DNS e certificado SSL automático.",
    techs: ["React", "TypeScript", "Vite", "Tailwind CSS", "Vercel (deploy)"],
    github: null,
    live: "https://www.padilhaepadilha.com.br/",
    features: [
      "Duas landing pages independentes com foco em conversão",
      "Identidade visual fiel ao branding do cliente",
      "Botão flutuante de WhatsApp",
      "Formulário de contato simplificado",
      "Design mobile-first",
      "Domínio customizado com SSL",
      "Integração contínua via GitHub + Vercel",
    ],
    role: "Frontend Developer",
    challenge:
      "O maior desafio foi o deploy. O projeto gerado estava em TanStack Start com SSR, arquitetura incompatível com a Vercel, o que causou erros de 404 em produção. Foi necessário entender a estrutura do projeto, configurar o vercel.json com rewrites e ajustar as configurações de build para que o roteamento funcionasse corretamente em produção.",
    images: [
      "/advocacia_photo1.png",
      "/advocacia_photo2.png",
      "/advocacia_photo3.png",
      "/advocacia_photo4.png",
    ],
  },
  {
    title: "Personal Task Manager",
    description:
      "Aplicação fullstack para gerenciamento de tarefas pessoais, permitindo controle de tarefas e visualização de progresso por meio de um dashboard interativo.",
    longDescription:
      "Personal Task Manager é uma aplicação fullstack desenvolvida para auxiliar usuários no controle de suas tarefas pessoais, oferecendo funcionalidades como cadastro e autenticação segura, gerenciamento completo de tarefas e visualização de progresso. O sistema conta com um backend em Node.js utilizando Express e TypeScript, responsável pela lógica de negócio, autenticação via JWT e persistência de dados em SQLite. No frontend, a aplicação foi construída em React com Tailwind CSS, focando em uma interface responsiva e intuitiva, com dashboard interativo que apresenta resumo de tarefas, gráficos de progresso e histórico de tarefas.",
    techs: ["Node.js", "Express.js", "TypeScript", "Supabase", "Clerk", "Next.js", "Tailwind CSS"],
    github: "https://github.com/GuiSebax/task-manager",
    live: null,
    features: [
      "Autenticação de usuários com Clerk",
      "Cadastro e login com senhas criptografadas",
      "CRUD completo de tarefas",
      "Dashboard interativo com resumo de tarefas e progresso atual",
      "Interface responsiva com Tailwind CSS",
    ],
    role: "Fullstack Developer",
    challenge:
      "Estruturar uma aplicação fullstack completa com autenticação segura, integração entre frontend e backend e visualização clara de tarefas, mantendo uma arquitetura organizada e código de fácil manutenção.",
    images: [
      "/taskmanager_photo1.png",
      "/taskmanager_photo2.png",
      "/taskmanager_photo3.png",
      "/taskmanager_photo4.png",
    ],
  },
];

const ImageGallery = ({ images }: { images: string[] }) => {
  const [current, setCurrent] = useState(0);

  if (images.length === 0) return null;

  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);
  const next = () => setCurrent((c) => (c + 1) % images.length);

  return (
    <div className="space-y-2">
      <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-secondary/30 group">
        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            src={images[current]}
            alt={`Screenshot ${current + 1}`}
            className="w-full h-full object-cover"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
          />
        </AnimatePresence>

        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/75 hover:bg-background/95 text-foreground rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/75 hover:bg-background/95 text-foreground rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm"
            >
              <ChevronRight size={16} />
            </button>
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === current ? "bg-primary w-4" : "bg-foreground/40 hover:bg-foreground/60 w-1.5"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="flex gap-2">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`relative flex-1 aspect-video rounded overflow-hidden border-2 transition-all ${
                i === current
                  ? "border-primary"
                  : "border-border/50 hover:border-border opacity-60 hover:opacity-80"
              }`}
            >
              <img src={img} alt={`Thumbnail ${i + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const ProjectModal = ({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={onClose} />
      <motion.div
        className="relative bg-card border border-border rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 30, scale: 0.95 }}
        transition={{ duration: 0.3 }}
      >
        <div className="sticky top-0 bg-card/95 backdrop-blur-sm border-b border-border p-5 flex items-center justify-between z-10">
          <div className="flex items-center gap-2 font-mono text-sm text-muted-foreground">
            <span className="w-3 h-3 rounded-full bg-destructive/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-code-string/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-primary/80 inline-block" />
            <span className="ml-2 text-xs">
              {project.title.toLowerCase().replace(/\s+/g, "-")}.md
            </span>
          </div>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground transition-colors">
            <X size={18} />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {project.images.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Images size={15} className="text-primary" />
                <span className="font-mono text-sm text-foreground font-semibold">screenshots</span>
                <span className="font-mono text-xs text-muted-foreground">({project.images.length})</span>
              </div>
              <ImageGallery images={project.images} />
            </div>
          )}

          <div>
            <h3 className="font-mono text-2xl font-bold text-foreground mb-2">{project.title}</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">{project.longDescription}</p>
          </div>

          <div className="flex items-center gap-3">
            <Target size={15} className="text-primary shrink-0" />
            <div>
              <span className="font-mono text-xs text-muted-foreground block">role</span>
              <span className="text-foreground text-sm">{project.role}</span>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-3">
              <Layers size={15} className="text-primary" />
              <span className="font-mono text-sm text-foreground font-semibold">features</span>
            </div>
            <ul className="space-y-2">
              {project.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle size={13} className="text-primary shrink-0 mt-0.5" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2">
              <Lightbulb size={15} className="text-primary" />
              <span className="font-mono text-sm text-foreground font-semibold">desafio_principal</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed bg-secondary/50 border border-border rounded-lg p-4">
              {project.challenge}
            </p>
          </div>

          <div>
            <span className="font-mono text-sm text-foreground font-semibold block mb-3">stack</span>
            <div className="flex flex-wrap gap-2">
              {project.techs.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono text-primary/80 bg-primary/10 px-3 py-1.5 rounded border border-primary/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-3 pt-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg text-muted-foreground hover:text-primary hover:border-primary/40 transition-all font-mono text-sm"
              >
                <Github size={15} />
                código
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-mono text-sm"
              >
                <ExternalLink size={15} />
                ver_live
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projetos" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="text-primary font-mono text-lg block mb-2">03.</span>
            projetos
          </h2>
          <div className="section-line" />
        </motion.div>

        <div className="flex flex-col gap-6">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              className="bg-card border border-border rounded-xl overflow-hidden card-hover group"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
            >
              <div
                className={`flex flex-col ${
                  project.images.length > 0 ? "md:flex-row md:min-h-[300px]" : ""
                }`}
              >
                {/* Image side */}
                {project.images.length > 0 && (
                  <div
                    className="relative md:w-[56%] shrink-0 overflow-hidden cursor-pointer aspect-video md:aspect-auto"
                    onClick={() => setSelectedProject(project)}
                  >
                    <img
                      src={project.images[0]}
                      alt={`${project.title} preview`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Edge blend on desktop */}
                    <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-transparent via-transparent to-card/70" />
                    {/* Bottom fade on mobile */}
                    <div className="absolute inset-0 md:hidden bg-gradient-to-t from-card/60 to-transparent" />
                    {/* Subtle hover overlay */}
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/4 transition-colors duration-500" />

                    {project.images.length > 1 && (
                      <div className="absolute bottom-3 right-3 flex items-center gap-1.5 bg-background/80 backdrop-blur-sm text-xs font-mono px-2.5 py-1 rounded-md text-foreground/80 border border-border/50">
                        <Images size={11} />
                        {project.images.length}
                      </div>
                    )}
                  </div>
                )}

                {/* Content side */}
                <div className="flex-1 p-6 md:p-8 flex flex-col justify-between gap-5">
                  <div className="space-y-4">
                    {/* Terminal dots */}
                    <div className="flex items-center gap-1.5">
                      <span className="w-3 h-3 rounded-full bg-red-500/70" />
                      <span className="w-3 h-3 rounded-full bg-yellow-400/70" />
                      <span className="w-3 h-3 rounded-full bg-primary/70" />
                      <span className="ml-2 font-mono text-xs text-muted-foreground/70">
                        {project.title.toLowerCase().replace(/\s+/g, "_")}.ts
                      </span>
                    </div>

                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-mono text-xl font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                        {project.title}
                      </h3>
                      <div className="flex gap-2.5 text-muted-foreground shrink-0 pt-0.5">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary transition-colors"
                            aria-label="GitHub"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Github size={18} />
                          </a>
                        )}
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="hover:text-primary transition-colors"
                          aria-label="Ver detalhes"
                        >
                          <ExternalLink size={18} />
                        </button>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.techs.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono text-primary/80 bg-primary/10 px-2.5 py-1 rounded-md border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
