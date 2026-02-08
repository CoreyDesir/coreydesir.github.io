import { motion } from "framer-motion";
import { Award, BookOpen, Mic, ExternalLink } from "lucide-react";

const accomplishments = [
  {
    icon: Award,
    title: "Patent Awarded",
    description: "Media content access designation",
    link: "http://bit.ly/2IjN1V0",
    id: "US20160357667A1"
  },
  {
    icon: Award,
    title: "Patent Pending",
    description: "Data organization",
    link: "http://bit.ly/2JK5deo",
    id: "US20170206214A1"
  },
  {
    icon: BookOpen,
    title: "Published Author",
    description: "\"The Cryptocurrency Alphabet\" - A comprehensive guide to cryptocurrency economics and 26 cryptocurrencies",
    link: "https://bit.ly/CryptocurrencyAlphabet",
    id: null
  }
];

const media = [
  {
    icon: Mic,
    title: "Linux Insider",
    description: "Data Science & Cryptocurrency Feature",
    link: "https://www.linuxinsider.com/story/Digging-for-Bitcoin-Is-a-Labor-of-Love-86021.html"
  },
  {
    icon: Mic,
    title: "Carry On Friends Podcast",
    description: "Introduction to Cryptocurrency",
    link: "http://www.carryonfriends.com/getting-started-in-cryptocurrency-with-corey-stedman/"
  }
];

const certifications = [
  { name: "CompTIA A+ Certified Technician", year: "2023" },
  { name: "Microsoft Certified Professional: Networking & Security Fundamentals", year: "2023" },
  { name: "Certified Bitcoin Professional (CBP)", year: "2020" },
  { name: "Six Sigma White Belt", year: "2023" },
  { name: "BTA - Certified Blockchain Business Fundamentals", year: "2023" }
];

const Accomplishments = () => {
  return (
    <section className="py-24 relative" id="accomplishments">
      <div className="absolute left-0 top-1/3 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-display text-primary text-sm tracking-widest mb-4">
            <span className="text-muted-foreground">$</span> ls achievements/
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gradient">
            Accomplishments
          </h2>
        </motion.div>

        {/* Patents & Publications */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {accomplishments.map((item, index) => (
            <motion.a
              key={item.title}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group card-gradient border border-border/50 rounded-xl p-6 hover:border-primary/50 hover:glow-sm transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <item.icon size={20} className="text-primary" />
                </div>
                <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors ml-auto" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-2">{item.description}</p>
              {item.id && (
                <span className="font-display text-xs text-primary/70">{item.id}</span>
              )}
            </motion.a>
          ))}
        </div>

        {/* Media Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-12"
        >
          <h3 className="font-display text-xl font-semibold text-center mb-6 text-foreground">
            Media Features
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {media.map((item, index) => (
              <motion.a
                key={item.title}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="group flex items-center gap-4 p-4 rounded-xl border border-border/50 hover:border-primary/50 bg-muted/20 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center shrink-0">
                  <item.icon size={22} className="text-secondary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-display font-medium text-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-muted-foreground text-sm truncate">{item.description}</p>
                </div>
                <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h3 className="font-display text-xl font-semibold text-center mb-6 text-foreground">
            Certifications
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="px-4 py-2 rounded-full border border-border/50 bg-muted/30 hover:border-primary/50 transition-all duration-200"
              >
                <span className="font-display text-sm text-foreground">{cert.name}</span>
                <span className="text-primary text-xs ml-2">({cert.year})</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Accomplishments;
