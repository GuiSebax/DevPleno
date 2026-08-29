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
import { useLanguage, Lang } from "@/hooks/use-language";

interface ProjectContent {
  title: string;
  description: string;
  longDescription: string;
  features: string[];
  role: string;
  challenge: string;
}

interface Project {
  id: string;
  techs: string[];
  github: string | null;
  live: string | null;
  images: string[];
  content: Record<Lang, ProjectContent>;
}

const projects: Project[] = [
  {
    id: "saas-billing",
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
    images: [
      "/billing1.png",
      "/billing2.png",
      "/billing3.png",
      "/billing4.png",
      "/billing5.png",
      "/billing6.png",
      "/billing7.png",
    ],
    content: {
      pt: {
        title: "SaaS Multi-Tenant Billing Platform",
        description:
          "Plataforma B2B de gestão de projetos multiempresa (multi-tenant) com isolamento de dados via Row Level Security no PostgreSQL, billing recorrente via Stripe e deploy completo em containers na AWS.",
        longDescription:
          "Plataforma B2B inspirada em Notion/Linear onde cada tenant é uma organização com membros, projetos e tarefas. O grande foco do projeto foi resolver multi-tenancy de verdade: isolamento de dados garantido no nível do banco via PostgreSQL Row Level Security (RLS) com FORCE ROW SECURITY, contexto de tenant propagado com SET LOCAL dentro de transações (nunca SET SESSION, que vazaria entre requisições em um connection pool) e organization_id gravado por trigger no banco — a aplicação nunca envia esse campo. O backend é uma API modular em NestJS com autenticação JWT (access token de 15min + refresh token rotation de 7 dias, com detecção de reuso de token comprometido), e o billing é feito via Stripe (Checkout, Webhooks e Customer Portal), com processamento assíncrono dos webhooks em fila (BullMQ + Redis) para responder à Stripe em menos de 5 segundos e garantir idempotência. O projeto inteiro foi versionado no Git desde o primeiro commit, com ambiente reproduzível via Docker e Docker Compose (Postgres + Redis) tanto em desenvolvimento quanto em produção, e publicado na AWS (ECS Fargate para API e worker, RDS PostgreSQL gerenciado e S3 para armazenamento de arquivos), com segredos geridos via variáveis de ambiente/Secrets Manager e pipeline de CI/CD no GitHub Actions rodando lint, testes unitários e testes de integração contra um banco real antes de cada deploy.",
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
      },
      en: {
        title: "SaaS Multi-Tenant Billing Platform",
        description:
          "B2B multi-company (multi-tenant) project management platform with data isolation via PostgreSQL Row Level Security, recurring billing through Stripe, and full container deployment on AWS.",
        longDescription:
          "A B2B platform inspired by Notion/Linear where each tenant is an organization with members, projects, and tasks. The core focus of the project was solving multi-tenancy for real: data isolation guaranteed at the database level via PostgreSQL Row Level Security (RLS) with FORCE ROW SECURITY, tenant context propagated with SET LOCAL inside transactions (never SET SESSION, which would leak across requests in a connection pool), and organization_id written by a database trigger — the application never sends that field. The backend is a modular NestJS API with JWT authentication (15-minute access token + 7-day refresh token rotation, with compromised-token reuse detection), and billing runs through Stripe (Checkout, Webhooks, and Customer Portal), with webhook processing handled asynchronously in a queue (BullMQ + Redis) to respond to Stripe in under 5 seconds and guarantee idempotency. The entire project has been version-controlled in Git since the first commit, with a reproducible environment via Docker and Docker Compose (Postgres + Redis) in both development and production, deployed on AWS (ECS Fargate for the API and worker, managed RDS PostgreSQL, and S3 for file storage), secrets managed via environment variables/Secrets Manager, and a CI/CD pipeline in GitHub Actions running lint, unit tests, and integration tests against a real database before every deploy.",
        features: [
          "Real multi-tenant isolation via PostgreSQL RLS (not just a WHERE organization_id = ? filter)",
          "Complete recurring billing with Stripe (Checkout, Webhooks, and Customer Portal)",
          "JWT authentication with refresh token rotation and compromised-token detection",
          "Asynchronous, idempotent webhook processing with BullMQ + Redis",
          "Observability: structured logs, Prometheus metrics, and health checks",
          "100% dockerized environment (dev and production) with AWS deploy (ECS + RDS + S3)",
          "Unit and integration tests plus a GitHub Actions CI/CD pipeline",
          "Full Git version history with architecture documentation and ADRs",
        ],
        role: "Fullstack Developer",
        challenge:
          "Guaranteeing data isolation between organizations even in the face of application bugs — solved by putting the rule in the database (RLS + FORCE ROW SECURITY) instead of relying solely on code-level filters — plus structuring a reliable, auditable deploy pipeline (Docker → AWS) and asynchronous Stripe webhook processing.",
      },
    },
  },
  {
    id: "finance-control",
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
    images: [
      "/finance1.png",
      "/finance2.png",
      "/finance3.png",
      "/finance4.png",
      "/finance5.png",
    ],
    content: {
      pt: {
        title: "Finance Control — Controle de Gastos Pessoais",
        description:
          "Aplicação web para controle de entradas, saídas e saldo por conta, com dashboards e gráficos de gastos, autenticação segura e deploy full-Docker com backups automáticos.",
        longDescription:
          "Finance Control é uma plataforma pessoal de controle financeiro construída em Next.js (App Router) com Prisma e PostgreSQL, permitindo cadastrar contas, categorizar entradas e saídas e acompanhar o saldo em tempo real por conta e no total. O dashboard traz gráficos de gastos por categoria e evolução mensal (Recharts), com filtros por período. A autenticação é feita com Auth.js (NextAuth) e senhas com hash forte, e todas as validações de entrada rodam no servidor com Zod. A aplicação é PWA — instalável na tela inicial do celular — para acesso tanto do computador quanto do smartphone. Toda a infraestrutura roda em Docker Compose com quatro serviços: banco PostgreSQL, aplicação Next.js, proxy reverso Caddy (HTTPS automático via Let's Encrypt) e um serviço de backup que roda pg_dump a cada 24h, compacta o dump e mantém retenção configurável (14 dias por padrão), com os backups replicados para um bucket S3 na AWS. Todo o histórico de desenvolvimento foi versionado no Git, evoluindo em fases documentadas (MVP → análise → controle avançado → polimento), com deploy final em uma instância AWS EC2.",
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
      },
      en: {
        title: "Finance Control — Personal Expense Tracker",
        description:
          "Web application to track income, expenses, and balance per account, with dashboards and spending charts, secure authentication, and a fully-Dockerized deploy with automatic backups.",
        longDescription:
          "Finance Control is a personal finance platform built with Next.js (App Router), Prisma, and PostgreSQL, letting users register accounts, categorize income and expenses, and track balance in real time per account and overall. The dashboard shows spending-by-category and monthly-evolution charts (Recharts), with period filters. Authentication runs on Auth.js (NextAuth) with strong password hashing, and every input is validated server-side with Zod. The app is a PWA — installable on a phone's home screen — for access from both desktop and mobile. The whole infrastructure runs on Docker Compose with four services: PostgreSQL, the Next.js app, a Caddy reverse proxy (automatic HTTPS via Let's Encrypt), and a backup service that runs pg_dump every 24h, compresses the dump, and keeps a configurable retention (14 days by default), replicating backups to an AWS S3 bucket. The whole development history was version-controlled in Git across documented phases (MVP → analysis → advanced controls → polish), with the final deploy on an AWS EC2 instance.",
        features: [
          "Fast income/expense entry with categorization (including subcategories)",
          "Real-time balance, total and per account",
          "Dashboard with spending-by-category and monthly-evolution charts (Recharts)",
          "PWA — installable on mobile, responsive on any device",
          "Secure authentication with Auth.js and data validation with Zod",
          "100% Docker Compose infrastructure (app + database + proxy + backup)",
          "Automatic HTTPS via Caddy and daily PostgreSQL backups replicated to S3",
          "Production deploy on AWS (EC2) with full Git version history",
        ],
        role: "Fullstack Developer",
        challenge:
          "Orchestrating a complete, resilient infrastructure in a single docker-compose (app, database, proxy with automatic HTTPS, and scheduled backup), guaranteeing per-user data isolation and a restorable daily database backup that never depends on manual intervention.",
      },
    },
  },
  {
    id: "nest-express-api",
    techs: ["Node.js", "TypeScript", "Express.js", "NestJS", "Prisma ORM", "PostgreSQL"],
    github: "https://github.com/GuiSebax/Nest-Express-API",
    live: null,
    images: [],
    content: {
      pt: {
        title: "Nest & Express API",
        description:
          "Backend que reúne duas implementações da mesma API — uma em Express.js e outra em NestJS — para comparar arquitetura, padrões e produtividade entre um framework minimalista e um framework opinativo dentro do ecossistema Node.js.",
        longDescription:
          "As duas APIs implementam o mesmo domínio (autenticação JWT, validação de dados, persistência via Prisma) para permitir uma comparação direta: Express exige mais decisões manuais de estrutura e middleware, enquanto o NestJS já impõe uma arquitetura modular baseada em módulos, controllers e providers. O objetivo foi entender na prática os trade-offs de produtividade, testabilidade e curva de aprendizado de cada abordagem.",
        features: [
          "Duas APIs independentes (Express e NestJS) no mesmo repositório",
          "Autenticação baseada em JWT",
          "Validação de dados e tratamento de erros",
          "Persistência via Prisma ORM",
          "Comparação prática de arquitetura e produtividade entre os dois frameworks",
        ],
        role: "Backend Developer",
        challenge:
          "Manter o mesmo domínio e regras de negócio em duas arquiteturas diferentes, garantindo consistência funcional enquanto se compara produtividade e organização entre Express e NestJS.",
      },
      en: {
        title: "Nest & Express API",
        description:
          "Backend project pairing two implementations of the same API — one in Express.js, one in NestJS — to compare architecture, patterns, and productivity between a minimalist framework and an opinionated one within the Node.js ecosystem.",
        longDescription:
          "Both APIs implement the same domain (JWT authentication, data validation, persistence via Prisma) to allow a direct comparison: Express requires more manual decisions around structure and middleware, while NestJS already enforces a modular architecture based on modules, controllers, and providers. The goal was to understand, in practice, the productivity, testability, and learning-curve trade-offs of each approach.",
        features: [
          "Two independent APIs (Express and NestJS) in the same repository",
          "JWT-based authentication",
          "Data validation and error handling",
          "Persistence via Prisma ORM",
          "Practical comparison of architecture and productivity between both frameworks",
        ],
        role: "Backend Developer",
        challenge:
          "Keeping the same domain and business rules across two different architectures, ensuring functional consistency while comparing productivity and organization between Express and NestJS.",
      },
    },
  },
  {
    id: "marketplace",
    techs: ["Node.js", "Express", "TypeScript", "React", "Vite", "Tailwind CSS", "REST API"],
    github: "https://github.com/GuiSebax/MarketPlace",
    live: null,
    images: ["/inicial_marketplace.png", "/produtos_marketplace.png", "/cadastro_marketplace.png"],
    content: {
      pt: {
        title: "Marketplace — Fullstack Application",
        description:
          "Aplicação fullstack em monorepo, com frontend em React/Vite e backend em Node.js/Express, focada em integração entre camadas e boas práticas de arquitetura.",
        longDescription:
          "Monorepo reunindo frontend (Vite + React) e backend (Node.js + Express + TypeScript) no mesmo repositório, com tipos e schemas compartilhados entre as camadas. O projeto também serviu para avaliar o uso de IA como apoio ao desenvolvimento, mantendo toda decisão arquitetural e regra de negócio sob revisão manual.",
        features: [
          "Arquitetura fullstack em monorepo",
          "Frontend em React com Vite e Tailwind CSS",
          "Backend em Express com API REST",
          "Autenticação e controle de acesso",
          "Compartilhamento de tipos entre frontend e backend",
        ],
        role: "Fullstack Developer",
        challenge:
          "Estruturar um monorepo consistente com reuso de tipos entre frontend e backend, avaliando o uso de IA como apoio sem comprometer as decisões técnicas.",
      },
      en: {
        title: "Marketplace — Fullstack Application",
        description:
          "Full-stack application built as a monorepo with a Vite + React frontend and a Node.js/Express backend, focused on integration between layers and good architectural practices.",
        longDescription:
          "A monorepo bringing frontend (Vite + React) and backend (Node.js + Express + TypeScript) together in the same repository, with types and schemas shared between layers. The project also served to evaluate AI as a development aid, keeping every architectural decision and business rule under manual review.",
        features: [
          "Full-stack architecture in a monorepo",
          "React frontend with Vite and Tailwind CSS",
          "Express backend with a REST API",
          "Authentication and access control",
          "Shared types between frontend and backend",
        ],
        role: "Fullstack Developer",
        challenge:
          "Structuring a consistent monorepo with type reuse between frontend and backend, while evaluating AI as a development aid without compromising technical decisions.",
      },
    },
  },
  {
    id: "padilha",
    techs: ["React", "TypeScript", "Vite", "Tailwind CSS", "Vercel (deploy)"],
    github: null,
    live: "https://www.padilhaepadilha.com.br/",
    images: [
      "/advocacia_photo1.png",
      "/advocacia_photo2.png",
      "/advocacia_photo3.png",
      "/advocacia_photo4.png",
    ],
    content: {
      pt: {
        title: "Padilha & Padilha Advogados",
        description:
          "Site institucional com duas landing pages independentes para um escritório de advocacia, focadas em conversão de leads via tráfego pago.",
        longDescription:
          "Duas landing pages completamente independentes — Direito do Agronegócio e Licitações & Contratos Administrativos — cada uma com público, tom e proposta de valor próprios, seguindo rigorosamente o branding fornecido pelo cliente. Construídas com foco total em conversão: CTA visível sem scroll, botão flutuante de WhatsApp e formulário simplificado. Deploy na Vercel com domínio customizado via Registro.br e SSL automático.",
        features: [
          "Duas landing pages independentes com foco em conversão",
          "Identidade visual fiel ao branding do cliente",
          "Botão flutuante de WhatsApp e formulário simplificado",
          "Design mobile-first",
          "Domínio customizado com SSL e deploy contínuo via Vercel",
        ],
        role: "Frontend Developer",
        challenge:
          "O maior desafio foi o deploy. O projeto gerado estava em TanStack Start com SSR, arquitetura incompatível com a Vercel, o que causou erros de 404 em produção. Foi necessário entender a estrutura do projeto, configurar o vercel.json com rewrites e ajustar as configurações de build para que o roteamento funcionasse corretamente em produção.",
      },
      en: {
        title: "Padilha & Padilha Advogados",
        description:
          "Professional website with two independent landing pages for a law firm, focused on lead conversion through paid traffic.",
        longDescription:
          "Two fully independent landing pages — Agribusiness Law and Public Bids & Administrative Contracts — each with its own audience, tone, and value proposition, strictly following the client's branding. Built with full focus on conversion: no-scroll CTA, floating WhatsApp button, and a simplified contact form. Deployed on Vercel with a custom domain via Registro.br and automatic SSL.",
        features: [
          "Two independent landing pages focused on conversion",
          "Visual identity faithful to the client's branding",
          "Floating WhatsApp button and simplified contact form",
          "Mobile-first design",
          "Custom domain with SSL and continuous deploy via Vercel",
        ],
        role: "Frontend Developer",
        challenge:
          "The main challenge was deployment: the generated project used TanStack Start with SSR, an architecture incompatible with Vercel, causing 404 errors in production. It took understanding the project structure, configuring vercel.json with rewrites, and adjusting build settings to get routing working correctly in production.",
      },
    },
  },
  {
    id: "task-manager",
    techs: ["Node.js", "Express.js", "TypeScript", "SQLite", "JWT", "React", "Tailwind CSS"],
    github: "https://github.com/GuiSebax/task-manager",
    live: null,
    images: [
      "/taskmanager_photo1.png",
      "/taskmanager_photo2.png",
      "/taskmanager_photo3.png",
      "/taskmanager_photo4.png",
    ],
    content: {
      pt: {
        title: "Personal Task Manager",
        description:
          "Aplicação fullstack completa de gerenciamento de tarefas pessoais, com autenticação própria via JWT, CRUD completo e um dashboard com UX polida para acompanhar o progresso das tarefas.",
        longDescription:
          "Personal Task Manager é uma aplicação fullstack de gerenciamento de tarefas construída para ir além de um CRUD básico. O backend é uma API em Node.js com Express e TypeScript, com autenticação própria via JWT — hash de senha, geração e validação de token e middleware de proteção de rotas — e persistência em SQLite. O frontend é em React com Tailwind CSS, com foco explícito em UX: dashboard com resumo de tarefas, indicadores de progresso e histórico, feedback visual em cada ação (criar, concluir, editar, excluir) e um fluxo de autenticação sem fricção do cadastro ao primeiro uso. O contrato entre frontend e backend segue convenções REST consistentes, com tratamento de erros previsível tanto no cliente quanto na API.",
        features: [
          "Autenticação própria com JWT (hash de senha, geração e validação de token)",
          "CRUD completo de tarefas com validação no backend",
          "Dashboard com resumo de tarefas, progresso e histórico",
          "Interface responsiva com UX polida em cada interação (criar, concluir, editar, excluir)",
          "API REST em Node.js/Express com TypeScript",
          "Persistência de dados em SQLite",
        ],
        role: "Fullstack Developer",
        challenge:
          "Implementar autenticação segura do zero (sem depender de um provedor externo) e desenhar um fluxo de UX que deixasse o gerenciamento de tarefas rápido e sem fricção, do cadastro ao uso diário.",
      },
      en: {
        title: "Personal Task Manager",
        description:
          "Complete full-stack personal task management application, with its own JWT authentication, full CRUD, and a polished-UX dashboard to track task progress.",
        longDescription:
          "Personal Task Manager is a full-stack task management application built to go beyond a basic CRUD. The backend is a Node.js API with Express and TypeScript, with its own JWT authentication — password hashing, token generation and validation, and route-protection middleware — and SQLite persistence. The frontend is built in React with Tailwind CSS, with an explicit focus on UX: a dashboard with task summaries, progress indicators and history, visual feedback on every action (create, complete, edit, delete), and a frictionless auth flow from sign-up to first use. The contract between frontend and backend follows consistent REST conventions, with predictable error handling on both the client and the API.",
        features: [
          "Custom JWT authentication (password hashing, token generation and validation)",
          "Complete task CRUD with backend validation",
          "Dashboard with task summary, progress, and history",
          "Responsive interface with polished UX on every interaction (create, complete, edit, delete)",
          "REST API in Node.js/Express with TypeScript",
          "Data persistence in SQLite",
        ],
        role: "Fullstack Developer",
        challenge:
          "Implementing secure authentication from scratch (without relying on an external provider) and designing a UX flow that kept task management fast and frictionless, from sign-up to daily use.",
      },
    },
  },
];

const uiText = {
  pt: {
    heading: "projetos",
    screenshots: "screenshots",
    role: "cargo",
    features: "features",
    mainChallenge: "desafio_principal",
    stack: "stack",
    code: "código",
    viewLive: "ver_live",
    viewDetails: "Ver detalhes",
    close: "Fechar",
    prevImage: "Imagem anterior",
    nextImage: "Próxima imagem",
    expand: "Ampliar imagem",
  },
  en: {
    heading: "projects",
    screenshots: "screenshots",
    role: "role",
    features: "features",
    mainChallenge: "main_challenge",
    stack: "stack",
    code: "code",
    viewLive: "view_live",
    viewDetails: "View details",
    close: "Close",
    prevImage: "Previous image",
    nextImage: "Next image",
    expand: "Expand image",
  },
} satisfies Record<Lang, Record<string, string>>;

const ImageGallery = ({
  images,
  lang,
}: {
  images: string[];
  lang: Lang;
}) => {
  const [current, setCurrent] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const t = uiText[lang];

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
          aria-label={t.expand}
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
                aria-label={t.close}
              >
                <X size={20} />
              </button>

              <motion.img
                key={current}
                src={images[current]}
                alt={`Screenshot ${current + 1}`}
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
                    aria-label={t.prevImage}
                  >
                    <ChevronLeft size={22} />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      next();
                    }}
                    className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 bg-background/60 hover:bg-background/90 text-foreground rounded-full p-2 transition-colors"
                    aria-label={t.nextImage}
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
  lang,
  onClose,
}: {
  project: Project;
  lang: Lang;
  onClose: () => void;
}) => {
  const c = project.content[lang];
  const t = uiText[lang];

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
            <span className="ml-2 text-xs">{project.id}.md</span>
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
                <span className="font-mono text-sm text-foreground font-semibold">{t.screenshots}</span>
                <span className="font-mono text-xs text-muted-foreground">({project.images.length})</span>
              </div>
              <ImageGallery images={project.images} lang={lang} />
            </div>
          )}

          <div>
            <h3 className="font-mono text-2xl font-bold text-foreground mb-2">{c.title}</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">{c.longDescription}</p>
          </div>

          <div className="flex items-center gap-3">
            <Target size={15} className="text-primary shrink-0" />
            <div>
              <span className="font-mono text-xs text-muted-foreground block">{t.role}</span>
              <span className="text-foreground text-sm">{c.role}</span>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-3">
              <Layers size={15} className="text-primary" />
              <span className="font-mono text-sm text-foreground font-semibold">{t.features}</span>
            </div>
            <ul className="space-y-2">
              {c.features.map((feature) => (
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
              <span className="font-mono text-sm text-foreground font-semibold">{t.mainChallenge}</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed bg-secondary/50 border border-border rounded-lg p-4">
              {c.challenge}
            </p>
          </div>

          <div>
            <span className="font-mono text-sm text-foreground font-semibold block mb-3">{t.stack}</span>
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
                {t.code}
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
                {t.viewLive}
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
  const { lang } = useLanguage();
  const t = uiText[lang];

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
            {t.heading}
          </h2>
          <div className="section-line" />
        </motion.div>

        <div className="flex flex-col gap-6">
          {projects.map((project, i) => {
            const c = project.content[lang];
            return (
              <motion.article
                key={project.id}
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
                        alt={`${c.title} preview`}
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
                          {project.id}.ts
                        </span>
                      </div>

                      <div className="flex items-start justify-between gap-4">
                        <h3 className="font-mono text-xl font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                          {c.title}
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
                            aria-label={t.viewDetails}
                          >
                            <ExternalLink size={18} />
                          </button>
                        </div>
                      </div>

                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {c.description}
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
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            lang={lang}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
