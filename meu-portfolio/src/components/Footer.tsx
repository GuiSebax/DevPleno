const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-mono text-xs text-muted-foreground">
          Desenvolvido com <span className="text-primary">React</span> +{" "}
          <span className="text-primary">TypeScript</span>
        </p>
        <a
          href="#"
          className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors"
        >
          {"<gc />"}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
