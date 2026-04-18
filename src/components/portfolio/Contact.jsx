import { motion } from "framer-motion";
export const Contact = () => {
    return (<section id="contact" className="relative py-20 md:py-44 bg-gradient-sage text-primary-foreground overflow-hidden">
      {/* Soft glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[360px] md:w-[600px] md:h-[600px] rounded-full bg-accent/20 blur-3xl pointer-events-none"/>

      <div className="relative max-w-5xl mx-auto px-5 md:px-10 text-center">
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="font-serif italic text-sm opacity-70 mb-8">
          — let's build something
        </motion.p>

        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }} className="font-serif font-light text-[clamp(2.5rem,7vw,6.5rem)] leading-[0.95] tracking-tight text-balance mb-12">
          Have an idea worth <em className="italic">building</em>? Let's talk.
        </motion.h2>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="mailto:sitanshuranjan15@gmail.com" className="group inline-flex items-center gap-2 sm:gap-3 max-w-full bg-background text-foreground rounded-full pl-5 sm:pl-8 pr-2 py-2.5 sm:py-3 text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] hover:bg-accent transition-all duration-500">
            <span className="truncate">sitanshuranjan15@gmail.com</span>
            <span className="w-9 h-9 sm:w-10 sm:h-10 shrink-0 rounded-full bg-foreground text-background flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
              →
            </span>
          </a>
          <a href="tel:+917460919906" className="text-sm tracking-wide opacity-80 hover:opacity-100 transition-opacity">
            +91 74609 19906
          </a>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.5 }} className="mt-16 md:mt-24 pt-8 md:pt-10 border-t border-primary-foreground/15 flex flex-col md:flex-row gap-4 md:gap-6 justify-between items-center text-[10px] sm:text-xs uppercase tracking-[0.2em] opacity-70 text-center">
          <span>© {new Date().getFullYear()} Sitanshu Ranjan</span>
          <span>New Delhi, India</span>
          <div className="flex gap-6">
            <a href="#" className="hover:opacity-100 transition-opacity">LinkedIn</a>
            <a href="#" className="hover:opacity-100 transition-opacity">GitHub</a>
          </div>
        </motion.div>
      </div>
    </section>);
};
