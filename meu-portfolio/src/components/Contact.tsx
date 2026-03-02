import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contato" className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="text-primary font-mono text-lg block mb-2">
              05.
            </span>
            contato
          </h2>
          <div className="w-20 h-0.5 bg-primary mx-auto mb-8" />
        </motion.div>

        <motion.p
          className="text-muted-foreground text-lg max-w-lg mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Estou sempre aberto a novas oportunidades e projetos interessantes.
          Vamos conversar?
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-4 px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a
            href="mailto:guiclemente2003@gmail.com"
            className="flex items-center gap-2 px-5 py-3 border border-border rounded-md text-muted-foreground hover:text-primary hover:border-primary/40 transition-all font-mono text-sm"
          >
            <Mail size={16} />
            email
          </a>
          <a
            href="https://github.com/GuiSebax"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 border border-border rounded-md text-muted-foreground hover:text-primary hover:border-primary/40 transition-all font-mono text-sm"
          >
            <Github size={16} />
            github
          </a>
          <a
            href="https://www.linkedin.com/in/guilherme-clemente-29064b230/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 border border-border rounded-md text-muted-foreground hover:text-primary hover:border-primary/40 transition-all font-mono text-sm"
          >
            <Linkedin size={16} />
            linkedin
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
