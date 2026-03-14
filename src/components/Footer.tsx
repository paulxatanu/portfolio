const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm text-muted-foreground font-mono">
          © {new Date().getFullYear()} Your Name. Built with <span className="text-primary">React</span> & <span className="text-accent">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
