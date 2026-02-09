import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, ExternalLink } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-24 relative" id="contact">
      <div className="absolute inset-0 bg-glow" />
      
      <div className="container px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="font-display text-primary text-sm tracking-widest mb-4">
            <span className="text-muted-foreground">$</span> ./connect.sh
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gradient mb-6">
            Let's Build Something
          </h2>
          <p className="text-muted-foreground mb-10">
            Ready to discuss your next project or explore collaboration opportunities? 
            I'm always excited to connect with fellow tech enthusiasts and innovators.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button 
              variant="hero" 
              asChild
            >
              <a href="mailto:cordesir@gmail.com">
                <Mail size={18} />
                Send Email
              </a>
            </Button>
            <Button 
              variant="hero-outline" 
              asChild
            >
              <a href="https://linkedin.com/in/corey-desir" target="_blank" rel="noopener noreferrer">
                <Linkedin size={18} />
                Connect on LinkedIn
              </a>
            </Button>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col items-center gap-4"
          >
            <a 
              href="tel:+19142950542"
              className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
            >
              <Phone size={18} />
              <span>+1 (914) 295-0542</span>
            </a>
            
            <div className="flex items-center gap-6 mt-4">
              <a 
                href="http://bit.ly/2IjN1V0"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <ExternalLink size={14} />
                Patent #1
              </a>
              <a 
                href="http://bit.ly/2JK5deo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <ExternalLink size={14} />
                Patent #2
              </a>
              <a 
                href="https://bit.ly/CryptocurrencyAlphabet"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <ExternalLink size={14} />
                My Book
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
