import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
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
            disponível para novos projetos
          </span>
        </motion.div>

        <motion.p
          className="font-mono text-primary mb-4 text-sm tracking-wider"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {">"} hello_world
        </motion.p>

        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="text-foreground">Guilherme Clemente</span>
          <br />
          <span className="gradient-text">Fullstack Developer</span>
        </motion.h1>

        <motion.p
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          Desenvolvedor pleno apaixonado por criar soluções robustas e
          escaláveis. Experiência com{" "}
          <span className="text-primary">React</span>,{" "}
          <span className="text-primary">Next.js</span>,{" "}
          <span className="text-primary">Spring Boot</span> e mais.
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
            ver_projetos()
          </a>
          <a
            href="#contato"
            className="px-6 py-3 border border-primary/60 text-primary font-mono text-sm rounded-md hover:bg-primary/10 hover:border-primary transition-all"
          >
            contato()
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
          <div className="h-px w-12 bg-border" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
