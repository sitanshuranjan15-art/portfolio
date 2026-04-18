import { motion } from "framer-motion";
const journal = [
    {
        tag: "Backend",
        title: "Server-side validation that quietly improved data accuracy by 30%",
        excerpt: "How careful Core Java + JDBC checks at the API layer caught the errors form fields were missing.",
    },
    {
        tag: "Process",
        title: "Cutting defects 25% with a debugging ritual, not a tool",
        excerpt: "A repeatable root-cause workflow we adopted across sprints to chase down production noise.",
    },
    {
        tag: "Architecture",
        title: "Designing eForms that scale across 7+ client implementations",
        excerpt: "Lessons in keeping a shared form engine flexible without spawning a maintenance nightmare.",
    },
];
export const Journal = () => {
    return (<section id="journal" className="py-20 md:py-44 bg-background">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }} className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-16">
          <div className="max-w-2xl">
            <p className="font-serif italic text-sm text-foreground/60 mb-6">— journal</p>
            <h2 className="font-serif font-light text-[clamp(2rem,5vw,4.5rem)] leading-[1.05] tracking-tight text-balance">
              Notes on building, breaking, and shipping software.
            </h2>
          </div>
          <a href="#contact" className="text-xs uppercase tracking-[0.2em] text-foreground/70 hover:text-foreground transition-colors">
            View all →
          </a>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {journal.map((post, i) => (<motion.article key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }} className="group p-6 sm:p-8 rounded-[1.75rem] sm:rounded-[2rem] bg-card border border-border hover:border-primary/30 hover:shadow-soft transition-all duration-500 cursor-pointer flex flex-col">
              <div className="aspect-[4/3] rounded-2xl mb-5 sm:mb-6 bg-gradient-hero relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-serif italic text-5xl sm:text-6xl text-foreground/20">0{i + 1}</span>
                </div>
              </div>
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
                {post.tag}
              </span>
              <h3 className="font-serif text-xl sm:text-2xl leading-snug text-foreground mb-3 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-sm text-foreground/70 leading-relaxed mt-auto">{post.excerpt}</p>
            </motion.article>))}
        </div>
      </div>
    </section>);
};
