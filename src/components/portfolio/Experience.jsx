import { motion } from "framer-motion";
const experiences = [
    {
        company: "Tata Consultancy Services",
        role: "System Engineer",
        period: "Nov 2024 — Present",
        project: "SMB ION Customer",
        bullets: [
            "Designed and developed 5+ enterprise eForms using Java, JavaScript, AJAX, and MySQL across 4+ client implementations, reducing form processing time by 20%.",
            "Implemented server-side validation and business logic with Core Java and JDBC, improving data accuracy by 30%.",
            "Built and integrated RESTful APIs for form submission, validation, and backend data processing.",
            "Resolved production issues through systematic debugging and root cause analysis, reducing defects by 25%.",
        ],
    },
    {
        company: "Tata Consultancy Services",
        role: "Assistant System Engineer",
        period: "Nov 2022 — Oct 2024",
        project: "SMB ION Customer",
        bullets: [
            "Developed and maintained full-stack web applications for 7+ client implementations using Java, JavaScript, HTML5, CSS3, SQL, and MySQL.",
            "Built HRMS-style forms and online admission e-Forms for educational institutions, managing high-volume data capture.",
            "Implemented frontend UI components, backend logic, RESTful Web APIs, and JSON-based services aligned with business needs.",
            "Collaborated with QA teams during testing cycles and contributed to code reviews and technical documentation.",
        ],
    },
];
export const Experience = () => {
    return (<section id="experience" className="py-20 md:py-44 bg-gradient-mist relative">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }} className="max-w-3xl mb-12 md:mb-20">
          <p className="font-serif italic text-sm text-foreground/60 mb-6">— experience</p>
          <h2 className="font-serif font-light text-[clamp(2rem,5vw,4.5rem)] leading-[1.05] tracking-tight text-balance">
            Three years of building, debugging, and shipping at scale.
          </h2>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, i) => (<motion.article key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.9, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }} className="grid md:grid-cols-12 gap-6 md:gap-12 pb-10 md:pb-12 border-b border-border last:border-0">
              <div className="md:col-span-4">
                <div className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
                  {exp.period}
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl leading-tight text-foreground mb-2">
                  {exp.role}
                </h3>
                <div className="text-sm sm:text-base text-foreground/70">{exp.company}</div>
                <div className="mt-4 inline-block text-[10px] sm:text-xs uppercase tracking-[0.15em] px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground">
                  {exp.project}
                </div>
              </div>

              <ul className="md:col-span-8 space-y-4 md:space-y-5">
                {exp.bullets.map((b, j) => (<li key={j} className="flex gap-3 sm:gap-4 text-sm sm:text-base text-foreground/80 leading-relaxed">
                    <span className="font-serif italic text-primary text-xs sm:text-sm pt-1 min-w-[2rem] sm:min-w-[2.5rem]">
                      0{j + 1}
                    </span>
                    <span>{b}</span>
                  </li>))}
              </ul>
            </motion.article>))}
        </div>

        {/* Education */}
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }} className="mt-14 md:mt-20 grid md:grid-cols-12 gap-6 md:gap-12 pt-12 md:pt-16 border-t border-border">
          <div className="md:col-span-4">
            <p className="font-serif italic text-sm text-foreground/60 mb-3">— education & certifications</p>
          </div>
          <div className="md:col-span-8 space-y-8">
            <div>
              <h3 className="font-serif text-xl sm:text-2xl md:text-3xl text-foreground mb-2 leading-snug">
                B.Tech, Electronics & Communication Engineering
              </h3>
              <p className="text-sm sm:text-base text-foreground/70">
                Buddha Institute of Technology, Gorakhpur · 2018 — 2022 · CGPA 7.9 / 10
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
            "Java, Spring Boot, REST APIs & Microservices — Udemy",
            "Git and GitHub Essentials — Udemy",
        ].map((c) => (<div key={c} className="p-5 rounded-2xl bg-card border border-border">
                  <p className="text-sm text-foreground/80">{c}</p>
                </div>))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>);
};
