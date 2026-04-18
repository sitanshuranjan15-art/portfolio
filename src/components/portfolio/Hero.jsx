import { motion } from "framer-motion";
import heroPortrait from "@/assets/hero-portrait.jpg";
export const Hero = () => {
    return (<section id="top" className="relative min-h-screen w-full overflow-hidden bg-gradient-hero">
      {/* Portrait */}
      <motion.div initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }} className="absolute inset-0">
        <img src={heroPortrait} alt="Sitanshu Ranjan portrait" width={1920} height={1080} className="w-full h-full object-cover object-center mix-blend-luminosity opacity-95"/>
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/20 to-transparent"/>
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent"/>
      </motion.div>

      {/* Decorative swirl */}
      <svg className="absolute top-1/4 -right-20 md:right-1/4 w-[420px] h-[420px] md:w-[700px] md:h-[700px] opacity-30 md:opacity-40 pointer-events-none" viewBox="0 0 600 600" fill="none">
        <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 3, ease: "easeInOut" }} d="M 100 300 Q 200 100, 400 200 T 500 450 Q 350 550, 200 450 T 100 300" stroke="hsl(var(--background))" strokeWidth="1.5" fill="none"/>
      </svg>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-10 pt-32 md:pt-48 pb-16 md:pb-20 min-h-screen flex flex-col justify-end">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }} className="max-w-5xl">
          <p className="font-serif italic text-xs sm:text-sm md:text-base text-foreground/70 mb-4 md:mb-6">
            — software engineer · new delhi, india
          </p>
          <h1 className="font-serif font-light text-[clamp(2.5rem,11vw,8.5rem)] leading-[0.95] tracking-tight text-foreground text-balance">
            Code That <em className="italic font-normal">Shapes</em>
            <br />
            Real Outcomes.
          </h1>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.7, ease: [0.22, 1, 0.36, 1] }} className="mt-10 md:mt-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6 md:gap-8 max-w-6xl">
          <p className="font-sans text-sm sm:text-base md:text-lg text-foreground/80 leading-relaxed max-w-md">
            I'm Sitanshu — a Java developer at TCS, building scalable enterprise applications, REST APIs, and intuitive interfaces that quietly do the heavy lifting.
          </p>
          <a href="#experience" className="group inline-flex items-center gap-3 bg-primary text-primary-foreground rounded-full pl-6 md:pl-7 pr-2 py-2 text-[11px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.25em] hover:shadow-soft transition-all duration-500 self-start md:self-auto">
            Explore my work
            <span className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-background/20 flex items-center justify-center group-hover:bg-background group-hover:text-primary transition-colors">
              ↓
            </span>
          </a>
        </motion.div>
      </div>
    </section>);
};
