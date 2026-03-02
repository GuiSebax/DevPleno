import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="text-primary font-mono text-lg block mb-2">
              01.
            </span>
            sobre_mim
          </h2>
          <div className="w-20 h-0.5 bg-primary mb-12" />
        </motion.div>

        <motion.div
          className="bg-card border border-border rounded-lg p-6 md:p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="flex items-center gap-2 mb-4 font-mono text-sm text-muted-foreground">
            <span className="w-3 h-3 rounded-full bg-destructive/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-code-string/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-primary/80 inline-block" />
            <span className="ml-2">sobre.ts</span>
          </div>
          <div className="font-mono text-sm leading-7 text-muted-foreground">
            <p>
              <span className="text-accent">const</span>{" "}
              <span className="text-foreground">dev</span> = {"{"}
            </p>
            <p className="pl-6">
              <span className="text-primary">nome</span>:{" "}
              <span className="text-code-string">Guilherme F. Clemente</span>,
            </p>
            <p className="pl-6">
              <span className="text-primary">cargo</span>:{" "}
              <span className="text-code-string">
                "Desenvolvedor Fullstack Pleno"
              </span>
              ,
            </p>
            <p className="pl-6">
              <span className="text-primary">experiência</span>:{" "}
              <span className="text-code-string">"2+ anos"</span>,
            </p>
            <p className="pl-6">
              <span className="text-primary">foco</span>: [
              <span className="text-code-string">"Web"</span>,{" "}
              <span className="text-code-string">"Mobile"</span>,{" "}
              <span className="text-code-string">"APIs"</span>,{" "}
              <span className="text-code-string">"Cloud"</span>]
            </p>
            <p className="pl-6">
              <span className="text-primary">paixão</span>:{" "}
              <span className="text-code-string">
                "Transformar ideias em código limpo e escalável"
              </span>
              ,
            </p>
            <p>{"}"}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
