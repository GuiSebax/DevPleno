import { motion } from "framer-motion";

const TypingText = ({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) => {
  return (
    <span className={className}>
      {text}
      <span className="typing-cursor" />
    </span>
  );
};

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
      <div className="max-w-4xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary mb-4 text-sm tracking-wider">
            {">"} hello_world
          </p>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <span className="text-foreground">Guilherme Clemente</span>
          <br />
          <span className="gradient-text">Fullstack Developer</span>
        </motion.h1>

        <motion.p
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Desenvolvedor pleno apaixonado por criar soluções robustas e
          escaláveis. Experiência com{" "}
          <span className="text-primary">React</span>,{" "}
          <span className="text-primary">Next.js</span>,{" "}
          <span className="text-primary">NestJS</span>,{" "}
          <span className="text-primary">Spring</span> e mais.
        </motion.p>

        <motion.div
          className="flex gap-4 flex-wrap"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          <a
            href="#projetos"
            className="px-6 py-3 bg-primary text-primary-foreground font-mono text-sm rounded-md hover:opacity-90 transition-opacity"
          >
            ver_projetos()
          </a>
          <a
            href="#contato"
            className="px-6 py-3 border border-primary text-primary font-mono text-sm rounded-md hover:bg-primary/10 transition-colors"
          >
            contato()
          </a>
        </motion.div>

        <motion.div
          className="mt-16 font-mono text-xs text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <TypingText text="disponível para novos projetos" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
