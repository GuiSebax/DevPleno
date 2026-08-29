import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download, Languages } from "lucide-react";
import { useLanguage, Lang } from "@/hooks/use-language";

const navItems: Record<Lang, { label: string; href: string }[]> = {
  pt: [
    { label: "sobre", href: "#about" },
    { label: "skills", href: "#skills" },
    { label: "projetos", href: "#projetos" },
    { label: "experiência", href: "#experience" },
    { label: "certificações", href: "#certificacoes" },
    { label: "contato", href: "#contato" },
  ],
  en: [
    { label: "about", href: "#about" },
    { label: "skills", href: "#skills" },
    { label: "projects", href: "#projetos" },
    { label: "experience", href: "#experience" },
    { label: "certifications", href: "#certificacoes" },
    { label: "contact", href: "#contato" },
  ],
};

const cvLabel: Record<Lang, string> = {
  pt: "curriculo.pdf",
  en: "resume.pdf",
};

const cvHref: Record<Lang, string> = {
  pt: "/curriculo.pdf",
  en: "/CurriculoEN.pdf",
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, toggleLang } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const items = navItems[lang];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border"
          : ""
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#"
          className="font-mono text-primary font-bold text-lg hover:text-glow transition-all"
        >
          {"<gc />"}
        </a>

        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href={cvHref[lang]}
            download
            className="inline-flex items-center gap-1.5 font-mono text-sm text-muted-foreground hover:text-primary transition-colors border border-border/60 hover:border-primary/50 px-3 py-1.5 rounded-md"
          >
            <Download size={13} />
            cv
          </a>
          <button
            onClick={toggleLang}
            className="inline-flex items-center gap-1.5 font-mono text-sm text-muted-foreground hover:text-primary transition-colors border border-border/60 hover:border-primary/50 px-3 py-1.5 rounded-md"
            aria-label="Toggle language"
          >
            <Languages size={13} />
            {lang.toUpperCase()}
          </button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={toggleLang}
            className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground hover:text-primary transition-colors border border-border/60 hover:border-primary/50 px-2.5 py-1.5 rounded-md"
            aria-label="Toggle language"
          >
            <Languages size={13} />
            {lang.toUpperCase()}
          </button>
          <button
            className="text-muted-foreground hover:text-primary transition-colors p-1"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="lg:hidden bg-background/95 backdrop-blur-md border-b border-border px-6 pb-6"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block font-mono text-sm text-muted-foreground hover:text-primary transition-colors py-3 border-b border-border/30 last:border-0"
              >
                {item.label}
              </a>
            ))}
            <a
              href={cvHref[lang]}
              download
              className="inline-flex items-center gap-2 font-mono text-sm text-muted-foreground hover:text-primary transition-colors py-3"
            >
              <Download size={14} />
              {cvLabel[lang]}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
