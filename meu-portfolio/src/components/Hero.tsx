import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { useLanguage, Lang } from "@/hooks/use-language";

const WhatsAppIcon = ({ size = 22 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const content: Record<
  Lang,
  {
    badge: string;
    kicker: string;
    role: string;
    description: React.ReactNode;
    ctaProjects: string;
    ctaContact: string;
    cv: string;
  }
> = {
  pt: {
    badge: "disponível para novos projetos",
    kicker: "hello_world",
    role: "Desenvolvedor Fullstack Pleno",
    description: (
      <>
        Construo aplicações fullstack em produção — do design de API REST e
        modelagem de dados no PostgreSQL ao deploy em containers na AWS.
        Atualmente lidero o desenvolvimento do Seven+ na{" "}
        <span className="text-primary">Accion Sistemas</span>, com{" "}
        <span className="text-primary">React</span>,{" "}
        <span className="text-primary">Next.js</span>,{" "}
        <span className="text-primary">NestJS</span> e{" "}
        <span className="text-primary">Spring Boot</span>.
      </>
    ),
    ctaProjects: "ver_projetos()",
    ctaContact: "contato()",
    cv: "curriculo.pdf",
  },
  en: {
    badge: "available for new projects",
    kicker: "hello_world",
    role: "Fullstack Developer",
    description: (
      <>
        I build production fullstack applications — from REST API design and
        data modeling in PostgreSQL to containerized deploys on AWS.
        Currently leading development of Seven+ at{" "}
        <span className="text-primary">Accion Sistemas</span>, with{" "}
        <span className="text-primary">React</span>,{" "}
        <span className="text-primary">Next.js</span>,{" "}
        <span className="text-primary">NestJS</span> and{" "}
        <span className="text-primary">Spring Boot</span>.
      </>
    ),
    ctaProjects: "view_projects()",
    ctaContact: "contact()",
    cv: "resume.pdf",
  },
};

const cvHref: Record<Lang, string> = {
  pt: "/curriculo.pdf",
  en: "/CurriculoEN.pdf",
};

const Hero = () => {
  const { lang } = useLanguage();
  const t = content[lang];

  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary/4 blur-[140px] pointer-events-none" />

      <div className="max-w-5xl w-full relative z-10">
        {/* Status badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span
            className="w-2 h-2 rounded-full bg-primary"
            style={{ animation: "pulse-glow 2s ease-in-out infinite" }}
          />
          <span className="font-mono text-xs text-primary tracking-wide">
            {t.badge}
          </span>
        </motion.div>

        <motion.p
          className="font-mono text-primary mb-4 text-sm tracking-wider"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {">"} {t.kicker}
        </motion.p>

        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="text-foreground">Guilherme Clemente</span>
          <br />
          <span className="gradient-text">{t.role}</span>
        </motion.h1>

        <motion.p
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          {t.description}
        </motion.p>

        <motion.div
          className="flex gap-4 flex-wrap mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <a
            href="#projetos"
            className="px-6 py-3 bg-primary text-primary-foreground font-mono text-sm rounded-md hover:opacity-90 hover:shadow-lg hover:shadow-primary/20 transition-all"
          >
            {t.ctaProjects}
          </a>
          <a
            href="#contato"
            className="px-6 py-3 border border-primary/60 text-primary font-mono text-sm rounded-md hover:bg-primary/10 hover:border-primary transition-all"
          >
            {t.ctaContact}
          </a>
          <a
            href={cvHref[lang]}
            download
            className="inline-flex items-center gap-2 px-6 py-3 border border-border text-muted-foreground font-mono text-sm rounded-md hover:text-primary hover:border-primary/60 transition-all"
          >
            <Download size={15} />
            {t.cv}
          </a>
        </motion.div>

        <motion.div
          className="flex items-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.65 }}
        >
          <a
            href="https://github.com/GuiSebax"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/guilherme-clemente-29064b230/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={22} />
          </a>
          <a
            href="mailto:guiclemente2003@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Email"
          >
            <Mail size={22} />
          </a>
          <a
            href="https://wa.me/554497090593"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="WhatsApp"
          >
            <WhatsAppIcon size={22} />
          </a>
          <div className="h-px w-12 bg-border" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
