import { motion } from "framer-motion";

const highlights = [
  "React, Next.js & TypeScript no frontend",
  "Spring Boot & NestJS no backend",
  "PostgreSQL, Docker e Cloud na infra",
  "Ciclo Scrum completo com foco em escala",
];

const About = () => {
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
            sobre_mim
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
            <p className="text-muted-foreground leading-relaxed">
              Desenvolvedor Fullstack Pleno com mais de{" "}
              <span className="text-foreground font-medium">2 anos de experiência</span>{" "}
              construindo aplicações web e mobile robustas. Atualmente na{" "}
              <span className="text-foreground font-medium">Accion Sistemas</span>, onde
              lidero o desenvolvimento do{" "}
              <span className="text-primary font-medium">Seven+</span> — uma
              plataforma estratégica de gestão de vendas B2B usada por múltiplos
              clientes.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Apaixonado por código limpo, arquitetura bem pensada e entrega de
              valor real. Trabalho em todo o ciclo — da arquitetura de sistemas ao
              deploy em produção.
            </p>
            <ul className="space-y-3 pt-2">
              {highlights.map((item) => (
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
              <span className="ml-2 font-mono text-xs text-muted-foreground">sobre.ts</span>
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
                <span className="text-primary">cargo</span>:{" "}
                <span className="text-code-string">"Fullstack Pleno"</span>,
              </p>
              <p className="pl-5">
                <span className="text-primary">experiência</span>:{" "}
                <span className="text-code-string">"2+ anos"</span>,
              </p>
              <p className="pl-5">
                <span className="text-primary">localização</span>:{" "}
                <span className="text-code-string">"Maringá, PR"</span>,
              </p>
              <p className="pl-5">
                <span className="text-primary">foco</span>: [
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
                <span className="text-primary">disponível</span>:{" "}
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
