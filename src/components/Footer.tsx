import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="font-display text-sm text-muted-foreground">
            <span className="text-primary">©</span> {new Date().getFullYear()} Corey F. Stedman
          </p>
          <p className="font-display text-sm text-muted-foreground">
            Built with <span className="text-primary">passion</span> for technology
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
