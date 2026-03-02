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
} from "lucide-react";

interface Project {
  title: string;
  description: string;
  longDescription: string;
  techs: string[];
  github: string;
  live: string;
  features: string[];
  role: string;
  challenge: string;
}

const projects: Project[] = [
  {
    title: "Nest & Express API",
    description:
      "Um projeto backend que reúne duas implementações de API utilizando Express.js e Nest.js, com o objetivo de comparar arquiteturas, padrões e a experiência de desenvolvimento entre os dois frameworks dentro do ecossistema Node.js.",
    longDescription:
      "Um projeto backend que reúne duas implementações de API utilizando Express.js e Nest.js, com o objetivo de comparar arquiteturas, padrões e a experiência de desenvolvimento entre os dois frameworks dentro do ecossistema Node.js. Ambas as APIs abordam o mesmo conjunto de conceitos e funcionalidades, permitindo uma comparação prática entre uma abordagem mais flexível e minimalista, representada pelo Express, e outra mais estruturada e opinionada, ofereicda pelo NestJS",
    techs: [
      "Node.js",
      "TypeScript",
      "Express.js",
      "NestJS",
      "Prisma ORM",
      "PostgreSQL",
    ],
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
  },

  {
    title: "League of Legends Application",
    description:
      "Aplicação web desenvolvida com Next.js e Spring Boot que consome a API Data Dragon para exibir informações dos campeões do League of Legends.",
    longDescription:
      "Aplicação fullstack desenvolvida com Next.js no frontend e Spring Boot no backend, responsável por consumir a API oficial Data Dragon da Riot Games para obtenção dos dados dos campeões do League of Legends. A aplicação exibe informações como nome, imagem e lore (blurb) de cada campeão, com foco em organização de código, separação de responsabilidades e boas práticas de consumo de APIs externas.",
    techs: [
      "Next.js",
      "React",
      "TypeScript",
      "Spring Boot",
      "Java",
      "REST API",
    ],
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
  },

  {
    title: "Marketplace — Fullstack Application",
    description:
      "Aplicação fullstack desenvolvida em um monorepo com frontend em Vite + React e backend em Node.js com Express, focada na integração entre camadas e boas práticas de arquitetura.",
    longDescription:
      "Aplicação fullstack desenvolvida como um monorepo, reunindo frontend e backend no mesmo repositório. O frontend foi construído com Vite e React, enquanto o backend utiliza Node.js com Express e TypeScript. O projeto teve como objetivo a construção de uma aplicação funcional e a prática de integração entre as camadas, além da avaliação do uso de IA como ferramenta de apoio ao desenvolvimento, mantendo todas as decisões arquiteturais, regras de negócio e validações sob controle e revisão manual.",
    techs: [
      "Node.js",
      "Express",
      "TypeScript",
      "React",
      "Vite",
      "Tailwind CSS",
      "REST API",
    ],
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
  },

  {
    title: "Hyper Fit Project",
    description:
      "Aplicação frontend desenvolvida em React para uma loja de roupas esportivas, com foco em produtos voltados para academia e conforto durante o treino.",
    longDescription:
      "Hyper Fit Project é uma aplicação frontend desenvolvida em React para uma loja de roupas com foco em vestuário esportivo e itens voltados para academia, como camisas, shorts e tops. O projeto foi concebido para apresentar os produtos de forma clara e visualmente atrativa, priorizando a experiência do usuário, a navegação intuitiva e a responsividade. Durante o desenvolvimento, foram aplicados conceitos de componentização, reutilização de componentes e organização de layout, com foco em código limpo e estrutura escalável, permitindo que a aplicação possa evoluir futuramente para integrações com backend, carrinho de compras e outras funcionalidades comerciais.",
    techs: ["React", "JavaScript", "HTML", "CSS"],
    github: "https://github.com/GuiSebax/HyperFit-Brasil-Project",
    live: null,
    features: [
      "Catálogo de produtos esportivos",
      "Interface responsiva",
      "Componentização e reutilização de componentes",
      "Layout focado em experiência do usuário",
      "Estrutura preparada para futuras evoluções",
    ],
    role: "Frontend Developer",
    challenge:
      "Criar uma interface organizada e responsiva para apresentação de produtos, mantendo uma estrutura de componentes reutilizáveis e preparada para a evolução do projeto.",
  },

  {
    title: "Finance Me — Gerenciador de Finanças Pessoais",
    description:
      "Aplicação fullstack para gerenciamento de finanças pessoais, permitindo controle de transações, acompanhamento de metas financeiras e visualização de dados por meio de um dashboard interativo.",
    longDescription:
      "Finance Me é uma aplicação fullstack desenvolvida para auxiliar usuários no controle de suas finanças pessoais, oferecendo funcionalidades como cadastro e autenticação segura, gerenciamento completo de transações e acompanhamento de metas financeiras. O sistema conta com um backend em Node.js utilizando Express e TypeScript, responsável pela lógica de negócio, autenticação via JWT e persistência de dados em SQLite. No frontend, a aplicação foi construída em React com Tailwind CSS, focando em uma interface responsiva e intuitiva, com dashboard interativo que apresenta resumo financeiro, gráficos de saldo, histórico de transações e progresso de metas. O projeto prioriza organização de código, separação de responsabilidades e boas práticas de desenvolvimento fullstack.",
    techs: [
      "Node.js",
      "Express.js",
      "TypeScript",
      "SQLite",
      "JWT",
      "Bcrypt",
      "React",
      "Tailwind CSS",
      "Axios",
    ],
    github: "https://github.com/GuiSebax/Personal-Finance-Manager",
    live: null,
    features: [
      "Autenticação de usuários com JWT",
      "Cadastro e login com senhas criptografadas",
      "CRUD completo de transações financeiras",
      "Gerenciamento de metas financeiras com acompanhamento de progresso",
      "Dashboard financeiro com resumo de receitas, despesas e saldo",
      "Interface responsiva com Tailwind CSS",
    ],
    role: "Fullstack Developer",
    challenge:
      "Estruturar uma aplicação fullstack completa com autenticação segura, integração entre frontend e backend e visualização clara de dados financeiros, mantendo uma arquitetura organizada e código de fácil manutenção.",
  },

  {
    title: "Landing Page — Controle da Ansiedade",
    description:
      "Landing page desenvolvida em React com Tailwind CSS, focada em fornecer dicas, recursos e informações para auxiliar no controle da ansiedade.",
    longDescription:
      "Landing page desenvolvida em React com Tailwind CSS, com o objetivo de oferecer informações, dicas práticas e recursos voltados ao controle da ansiedade. A aplicação apresenta uma interface moderna, responsiva e de fácil navegação, priorizando clareza no conteúdo e uma experiência agradável ao usuário. Foram utilizadas animações suaves com Framer Motion para tornar a interação mais fluida, além de uma estrutura organizada que permite acesso rápido a seções como dicas, recursos úteis, depoimentos e chamada para ação por meio de um formulário de inscrição.",
    techs: ["React", "JavaScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/GuiSebax/Landing-Page",
    live: null,
    features: [
      "Seção com dicas e técnicas para controle da ansiedade",
      "Listagem de recursos e ferramentas informativas",
      "Área para depoimentos e relatos",
      "Formulário de inscrição para recebimento de conteúdos",
      "Layout responsivo para diferentes tamanhos de tela",
      "Animações suaves com Framer Motion",
    ],
    role: "Frontend Developer",
    challenge:
      "Criar uma landing page informativa e acessível, equilibrando design, animações e clareza de conteúdo, garantindo boa experiência do usuário e responsividade.",
  },
];

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
      <div
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={onClose}
      />
      <motion.div
        className="relative bg-card border border-border rounded-lg w-full max-w-2xl max-h-[85vh] overflow-y-auto"
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 30, scale: 0.95 }}
        transition={{ duration: 0.3 }}
      >
        {/* Header */}
        <div className="sticky top-0 bg-card/95 backdrop-blur-sm border-b border-border p-6 flex items-center justify-between">
          <div className="flex items-center gap-2 font-mono text-sm text-muted-foreground">
            <span className="w-3 h-3 rounded-full bg-destructive/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-code-string/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-primary/80 inline-block" />
            <span className="ml-2">
              {project.title.toLowerCase().replace(/\s+/g, "-")}.md
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Title */}
          <div>
            <h3 className="font-mono text-2xl font-bold text-foreground mb-2">
              {project.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          {/* Role */}
          <div className="flex items-center gap-3">
            <Target size={16} className="text-primary shrink-0" />
            <div>
              <span className="font-mono text-xs text-muted-foreground block">
                role
              </span>
              <span className="text-foreground text-sm">{project.role}</span>
            </div>
          </div>

          {/* Features */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Layers size={16} className="text-primary" />
              <span className="font-mono text-sm text-foreground font-semibold">
                features
              </span>
            </div>
            <ul className="space-y-2">
              {project.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <CheckCircle size={14} className="text-primary shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Challenge */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Lightbulb size={16} className="text-primary" />
              <span className="font-mono text-sm text-foreground font-semibold">
                desafio_principal
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed bg-secondary/50 border border-border rounded-md p-4">
              {project.challenge}
            </p>
          </div>

          {/* Tech Stack */}
          <div>
            <span className="font-mono text-sm text-foreground font-semibold block mb-3">
              stack
            </span>
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

          {/* Links */}
          <div className="flex gap-3 pt-2">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 border border-border rounded-md text-muted-foreground hover:text-primary hover:border-primary/40 transition-all font-mono text-sm"
            >
              <Github size={16} />
              código
            </a>
            {project.live !== null && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity font-mono text-sm"
              >
                <ExternalLink size={16} />
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
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="text-primary font-mono text-lg block mb-2">
              03.
            </span>
            projetos
          </h2>
          <div className="w-20 h-0.5 bg-primary mb-12" />
        </motion.div>

        <div className="space-y-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className="bg-card border border-border rounded-lg p-6 md:p-8 card-hover group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-mono text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-3 text-muted-foreground">
                  <a
                    href={project.github}
                    className="hover:text-primary transition-colors"
                    aria-label="GitHub"
                  >
                    <Github size={18} />
                  </a>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="hover:text-primary transition-colors"
                    aria-label="Ver detalhes"
                  >
                    <ExternalLink size={18} />
                  </button>
                </div>
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.techs.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono text-primary/80 bg-primary/10 px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
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
