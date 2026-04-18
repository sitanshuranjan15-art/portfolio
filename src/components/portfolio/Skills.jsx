import { motion } from "framer-motion";
const skillGroups = [
    {
        title: "Languages",
        items: ["Java", "Core Java", "JavaScript", "SQL", "HTML5", "CSS3"],
    },
    {
        title: "Backend",
        items: ["Spring Boot", "REST APIs", "Microservices", "JDBC", "JSON"],
    },
    {
        title: "Frontend",
        items: ["React.js", "AJAX", "JavaScript", "Responsive UI"],
    },
    {
        title: "Databases",
        items: ["MySQL", "Joins", "Indexing", "Stored Procedures", "Query Optimization"],
    },
    {
        title: "Tools",
        items: ["Eclipse", "VS Code", "GitHub", "Jenkins", "Postman"],
    },
    {
        title: "Practices",
        items: ["Agile / Scrum", "SDLC", "CI/CD", "JUnit", "Code Reviews", "RCA"],
    },
];
const marqueeItems = [
    "Java", "Spring Boot", "REST APIs", "MySQL", "JavaScript",
    "React", "Microservices", "JDBC", "Agile", "JUnit", "GitHub", "Jenkins",
];
export const Skills = () => {
    return (<section id="skills" className="py-20 md:py-44 bg-background relative overflow-hidden">
      {/* Marquee */}
      <div className="absolute top-8 md:top-12 left-0 right-0 overflow-hidden border-y border-border/50 py-4 md:py-6 bg-secondary/40">
        <div className="marquee-track flex gap-8 md:gap-12 whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (<span key={i} className="font-serif italic text-2xl sm:text-3xl md:text-5xl text-foreground/30">
              {item} <span className="text-accent not-italic mx-4 md:mx-6">✦</span>
            </span>))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-10 pt-28 md:pt-40">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }} className="max-w-3xl mb-12 md:mb-20">
          <p className="font-serif italic text-sm text-foreground/60 mb-6">— the toolkit</p>
          <h2 className="font-serif font-light text-[clamp(2rem,5vw,4.5rem)] leading-[1.05] tracking-tight text-balance">
            Every project is different. These are the tools I reach for.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-[2rem] overflow-hidden shadow-soft">
          {skillGroups.map((group, i) => (<motion.div key={group.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.7, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }} className="bg-card p-6 sm:p-8 md:p-10 hover:bg-secondary/50 transition-colors duration-500 group">
              <div className="flex items-baseline justify-between mb-5 md:mb-6">
                <h3 className="font-serif text-xl sm:text-2xl text-foreground">{group.title}</h3>
                <span className="text-xs text-muted-foreground font-mono">0{i + 1}</span>
              </div>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (<li key={item} className="text-xs uppercase tracking-[0.12em] px-3 py-1.5 rounded-full bg-background border border-border text-foreground/75 group-hover:border-primary/30 transition-colors">
                    {item}
                  </li>))}
              </ul>
            </motion.div>))}
        </div>
      </div>
    </section>);
};
