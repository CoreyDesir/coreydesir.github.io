import { motion } from "framer-motion";
import { Building2, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Technical Support Engineer",
    company: "WIN Fertility / WIN Healthcare",
    location: "Greenwich, CT",
    period: "Jun 2024 – Present",
    highlights: [
      "Imaged and deployed 30+ Laptops with Windows 10/11 using Manage Engine over PXE Boot",
      "Managed Mitel PBX, provisioning phones, extensions and Toll Free numbers",
      "Supported 200+ users via Active Directory, Exchange, and VMWare Horizon"
    ]
  },
  {
    title: "Quality Assurance/Desk Engineer",
    company: "Zumbach Electronics",
    location: "Mt Kisco, NY",
    period: "Oct 2023 – May 2024",
    highlights: [
      "Implemented new document archiving system improving organization efficiency",
      "Built and assembled 50+ industrial computers to rigorous quality standards",
      "Calibrated over 100 lasers maintaining precise operational performance",
      "Developed comprehensive engineer onboarding manual"
    ]
  },
  {
    title: "Cryptocurrency Researcher",
    company: "REDACTED (under NDA)",
    location: "Remote",
    period: "Sep 2022 – Oct 2023",
    highlights: [
      "Researched cryptocurrency functionality for real world applications and use cases",
      "Wrote documentation for developed products",
      "Served as project manager, directing development",
      "Performed Q&A testing for Linux and macOS deployment",
      "Packaged software for distribution on Linux repositories"
    ]
  },
  {
    title: "Smarthands Datacenter Engineer",
    company: "Regeneron via Unisys",
    location: "Tarrytown, NY",
    period: "Oct 2019 – Sep 2022",
    highlights: [
      "Provided support to over 1000 users on Active Directory",
      "Built, racked, and stacked HP ProLiant Windows and Linux Servers",
      "Configured network components including Cisco switches",
      "Managed data archival with Tape Backup and Iron Mountain"
    ]
  },
  {
    title: "Co-Founder / CTO / Product Manager",
    company: "Digital Exchange Innovations/Node Capital",
    location: "NYC",
    period: "Sep 2017 – Sep 2019",
    highlights: [
      "Spearheaded development of Pouch cryptocurrency wallet using JavaScript, VueJS, Electron",
      "Designed PRSM financial forecasting tool architecture with Python and Ruby",
      "Secured funding through Quake.vc accelerator program",
      "Developed cross-platform software for macOS and Debian/Ubuntu"
    ]
  },
  {
    title: "Windows/Mac Sys Admin (Part Time)",
    company: "Dominican Women Development Center",
    location: "NYC",
    period: "Feb 2017 – Sep 2022",
    highlights: [
      "Constructed server with RAID 1 configuration and Debian-based Linux",
      "Rejuvenated 50+ workstations with Windows 7 reinstallation",
      "Pioneered G Suite migration with Outlook PST archive transfer",
      "Designed network infrastructure for new facility"
    ]
  }
];

const Experience = () => {
  return (
    <section className="py-24 relative" id="experience">
      {/* Background accent */}
      <div className="absolute right-0 top-1/2 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="container px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-display text-primary text-sm tracking-widest mb-4">
            <span className="text-muted-foreground">$</span> git log --oneline
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gradient">
            Work Experience
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title + exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-[11px] top-6 w-0.5 h-full bg-gradient-to-b from-primary/50 to-transparent" />
              )}
              
              {/* Timeline dot */}
              <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full border-2 border-primary bg-background flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
              </div>

              <div className="card-gradient border border-border/50 rounded-xl p-6 hover:border-primary/30 transition-all duration-300 ml-4">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-2 text-primary mt-1">
                      <Building2 size={14} />
                      <span className="text-sm">{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-1 text-muted-foreground text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={14} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, hIndex) => (
                    <li 
                      key={hIndex}
                      className="text-muted-foreground text-sm flex items-start gap-3"
                    >
                      <span className="text-primary mt-1.5 text-xs">▸</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
