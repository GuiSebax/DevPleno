import { useState } from "react";
import { createPortal } from "react-dom";
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
  Maximize2,
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
    title: "SaaS Multi-Tenant Billing Platform",
    description:
      "Plataforma B2B de gestão de projetos multiempresa (multi-tenant) com isolamento de dados via Row Level Security no PostgreSQL, billing recorrente via Stripe e deploy completo em containers na AWS.",
    longDescription:
      "Plataforma B2B inspirada em Notion/Linear onde cada tenant é uma organização com membros, projetos e tarefas. O grande foco do projeto foi resolver multi-tenancy de verdade: isolamento de dados garantido no nível do banco via PostgreSQL Row Level Security (RLS) com FORCE ROW SECURITY, contexto de tenant propagado com SET LOCAL dentro de transações (nunca SET SESSION, que vazaria entre requisições em um connection pool) e organization_id gravado por trigger no banco — a aplicação nunca envia esse campo. O backend é uma API modular em NestJS com autenticação JWT (access token de 15min + refresh token rotation de 7 dias, com detecção de reuso de token comprometido), e o billing é feito via Stripe (Checkout, Webhooks e Customer Portal), com processamento assíncrono dos webhooks em fila (BullMQ + Redis) para responder à Stripe em menos de 5 segundos e garantir idempotência. O projeto inteiro foi versionado no Git desde o primeiro commit, com ambiente reproduzível via Docker e Docker Compose (Postgres + Redis) tanto em desenvolvimento quanto em produção, e publicado na AWS (ECS Fargate para API e worker, RDS PostgreSQL gerenciado e S3 para armazenamento de arquivos), com segredos geridos via variáveis de ambiente/Secrets Manager e pipeline de CI/CD no GitHub Actions rodando lint, testes unitários e testes de integração contra um banco real antes de cada deploy.",
    techs: [
      "Next.js",
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "Row Level Security",
      "Drizzle ORM",
      "Redis",
      "BullMQ",
      "Stripe",
      "Docker",
      "AWS (ECS, RDS, S3)",
      "GitHub Actions (CI/CD)",
    ],
    github: "https://github.com/GuiSebax/SaaS-Multi-Tenant-Billing",
    live: null,
    features: [
      "Isolamento multi-tenant real via PostgreSQL RLS (não apenas WHERE organization_id = ?)",
      "Billing recorrente completo com Stripe (Checkout, Webhooks e Customer Portal)",
      "Autenticação JWT com refresh token rotation e detecção de token comprometido",
      "Processamento assíncrono e idempotente de webhooks com BullMQ + Redis",
      "Observabilidade: logs estruturados, métricas Prometheus e health checks",
      "Ambiente 100% dockerizado (dev e produção) com deploy na AWS (ECS + RDS + S3)",
      "Testes unitários e de integração + pipeline de CI/CD no GitHub Actions",
      "Versionamento completo no Git com documentação de arquitetura e ADRs",
    ],
    role: "Fullstack Developer",
    challenge:
      "Garantir isolamento de dados entre organizações mesmo diante de bugs na aplicação — resolvido colocando a regra no banco (RLS + FORCE ROW SECURITY) em vez de confiar apenas em filtros no código, além de estruturar o pipeline de deploy (Docker → AWS) e o processamento assíncrono de webhooks do Stripe de forma confiável e auditável.",
    images: [
      "/billing1.png",
      "/billing2.png",
      "/billing3.png",
      "/billing4.png",
      "/billing5.png",
      "/billing6.png",
      "/billing7.png",
    ],
  },
  {
    title: "Finance Control — Controle de Gastos Pessoais",
    description:
      "Aplicação web para controle de entradas, saídas e saldo por conta, com dashboards e gráficos de gastos, autenticação segura e deploy full-Docker com backups automáticos.",
    longDescription:
      "Finance Control é uma plataforma pessoal de controle financeiro construída em Next.js (App Router) com Prisma e PostgreSQL, permitindo cadastrar contas, categorizar entradas e saídas e acompanhar o saldo em tempo real por conta e no total. O dashboard traz gráficos de gastos por categoria e evolução mensal (Recharts), com filtros por período. A autenticação é feita com Auth.js (NextAuth) e senhas com hash forte, e todas as validações de entrada rodam no servidor com Zod. A aplicação é PWA — instalável na tela inicial do celular — para acesso tanto do computador quanto do smartphone. Toda a infraestrutura roda em Docker Compose com quatro serviços: banco PostgreSQL, aplicação Next.js, proxy reverso Caddy (HTTPS automático via Let's Encrypt) e um serviço de backup que roda pg_dump a cada 24h, compacta o dump e mantém retenção configurável (14 dias por padrão), com os backups replicados para um bucket S3 na AWS. Todo o histórico de desenvolvimento foi versionado no Git, evoluindo em fases documentadas (MVP → análise → controle avançado → polimento), com deploy final em uma instância AWS EC2.",
    techs: [
      "Next.js",
      "TypeScript",
      "Prisma ORM",
      "PostgreSQL",
      "Auth.js (NextAuth)",
      "Tailwind CSS",
      "Recharts",
      "Docker",
      "Docker Compose",
      "Caddy (HTTPS automático)",
      "AWS (EC2 + S3)",
      "Zod",
    ],
    github: "https://github.com/GuiSebax/FinanceControl",
    live: null,
    features: [
      "Registro rápido de entradas e saídas com categorização (com subcategorias)",
      "Saldo em tempo real, total e por conta",
      "Dashboard com gráficos de gastos por categoria e evolução mensal (Recharts)",
      "PWA — instalável no celular, uso responsivo em qualquer dispositivo",
      "Autenticação segura com Auth.js e validação de dados com Zod",
      "Infraestrutura 100% Docker Compose (app + banco + proxy + backup)",
      "HTTPS automático via Caddy e backups diários automáticos do PostgreSQL replicados para S3",
      "Deploy em produção na AWS (EC2) com versionamento completo no Git",
    ],
    role: "Fullstack Developer",
    challenge:
      "Orquestrar uma infraestrutura completa e resiliente em um único docker-compose (app, banco, proxy com HTTPS automático e backup agendado), garantindo que os dados de cada usuário fiquem isolados e que um backup diário e restaurável do banco exista sempre, sem depender de intervenção manual.",
    images: [
      "/finance1.png",
      "/finance2.png",
      "/finance3.png",
      "/finance4.png",
      "/finance5.png",
    ],
  },
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
  const [zoomed, setZoomed] = useState(false);

  if (images.length === 0) return null;

  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);
  const next = () => setCurrent((c) => (c + 1) % images.length);

  return (
    <div className="space-y-2">
      <div className="relative w-full h-[260px] sm:h-[360px] md:h-[440px] rounded-lg overflow-hidden bg-black/40 group flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            src={images[current]}
            alt={`Screenshot ${current + 1}`}
            className="max-w-full max-h-full object-contain cursor-zoom-in"
            onClick={() => setZoomed(true)}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
          />
        </AnimatePresence>

        <button
          onClick={() => setZoomed(true)}
          className="absolute top-2 right-2 bg-background/75 hover:bg-background/95 text-foreground rounded-md p-1.5 opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm"
          aria-label="Ampliar imagem"
        >
          <Maximize2 size={14} />
        </button>

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
        <div className="flex gap-2 overflow-x-auto pb-1">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`relative w-16 sm:w-20 shrink-0 aspect-video rounded overflow-hidden border-2 transition-all ${
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

      {createPortal(
        <AnimatePresence>
          {zoomed && (
            <motion.div
              className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 backdrop-blur-md p-4 sm:p-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setZoomed(false)}
            >
              <button
                onClick={() => setZoomed(false)}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 text-foreground/80 hover:text-primary bg-background/60 hover:bg-background/90 rounded-full p-2 transition-colors"
                aria-label="Fechar"
              >
                <X size={20} />
              </button>

              <motion.img
                key={current}
                src={images[current]}
                alt={`Screenshot ${current + 1} ampliado`}
                className="max-w-full max-h-full object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.15 }}
              />

              {images.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      prev();
                    }}
                    className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 bg-background/60 hover:bg-background/90 text-foreground rounded-full p-2 transition-colors"
                    aria-label="Imagem anterior"
                  >
                    <ChevronLeft size={22} />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      next();
                    }}
                    className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 bg-background/60 hover:bg-background/90 text-foreground rounded-full p-2 transition-colors"
                    aria-label="Próxima imagem"
                  >
                    <ChevronRight size={22} />
                  </button>
                  <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 font-mono text-xs text-foreground/70 bg-background/60 px-2.5 py-1 rounded-md">
                    {current + 1} / {images.length}
                  </div>
                </>
              )}
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
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
        className="relative bg-card border border-border rounded-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto"
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
