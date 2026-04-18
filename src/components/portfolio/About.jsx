import { motion } from "framer-motion";
import aboutImage from "@/assets/about-image.jpg";
export const About = () => {
    return (<section id="about" className="relative py-20 md:py-44 bg-gradient-mist">
      <div className="max-w-7xl mx-auto px-5 md:px-10 grid md:grid-cols-12 gap-10 md:gap-20 items-center">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }} className="md:col-span-5">
          <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-soft">
            <img src={aboutImage} alt="About Sitanshu" loading="lazy" width={1200} height={1400} className="w-full h-full object-cover"/>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }} className="md:col-span-7">
          <p className="font-serif italic text-sm text-foreground/60 mb-6">— about</p>
          <h2 className="font-serif font-light text-[clamp(2rem,5vw,4.5rem)] leading-[1.05] tracking-tight text-balance mb-10">
            There may not be a single switch, but there is a clear path through complex systems.
          </h2>
          <div className="space-y-6 text-foreground/75 leading-relaxed max-w-xl">
            <p>
              For over three years at <span className="text-foreground font-medium">Tata Consultancy Services</span>, I've designed and shipped enterprise web applications used across multiple client implementations — eForms, HRMS-style portals, online admission systems, and the APIs that make them work.
            </p>
            <p>
              My craft sits at the intersection of <em className="font-serif italic">Java backends</em> and the small front-end details that make a product feel inevitable. I care about clean validation, careful debugging, and writing code that quietly survives the next sprint.
            </p>
          </div>

          <div className="mt-10 md:mt-12 grid grid-cols-3 gap-4 sm:gap-8 max-w-md">
            {[
            { num: "3+", label: "Years at TCS" },
            { num: "7+", label: "Client deliveries" },
            { num: "30%", label: "Accuracy lift" },
        ].map((s) => (<div key={s.label}>
                <div className="font-serif text-2xl sm:text-3xl md:text-4xl text-primary mb-2">{s.num}</div>
                <div className="text-[10px] sm:text-xs uppercase tracking-[0.12em] sm:tracking-[0.15em] text-muted-foreground leading-tight">{s.label}</div>
              </div>))}
          </div>
        </motion.div>
      </div>
    </section>);
};
