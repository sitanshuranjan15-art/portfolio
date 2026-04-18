import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
const navItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Journal", href: "#journal" },
];
export const Nav = () => {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 30);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);
    // Lock body scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);
    return (<motion.header initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }} className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled || open ? "py-3 md:py-4 bg-background/80 backdrop-blur-xl" : "py-5 md:py-7"}`}>
      <div className="max-w-7xl mx-auto px-5 md:px-10 flex items-center justify-between gap-4">
        <a href="#top" onClick={() => setOpen(false)} className="flex items-center gap-2 group min-w-0">
          <span className="w-2 h-2 rounded-full bg-primary group-hover:bg-accent transition-colors shrink-0"/>
          <span className="font-serif text-lg md:text-xl tracking-tight text-foreground truncate">
            sitanshu<span className="text-muted-foreground">—ranjan</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (<a key={item.label} href={item.href} className="text-xs uppercase tracking-[0.2em] text-foreground/70 hover:text-foreground transition-colors">
              {item.label}
            </a>))}
        </nav>

        <div className="flex items-center gap-2">
          <a href="#contact" className="hidden sm:inline-flex group items-center gap-2 bg-background/80 backdrop-blur border border-border rounded-full pl-5 pr-2 py-2 text-xs uppercase tracking-[0.2em] hover:bg-foreground hover:text-background transition-all duration-300">
            Get in touch
            <span className="w-7 h-7 rounded-full bg-foreground group-hover:bg-background flex items-center justify-center transition-colors">
              <span className="w-1.5 h-1.5 rounded-full bg-background group-hover:bg-foreground transition-colors"/>
            </span>
          </a>

          <button type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen((v) => !v)} className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-border bg-background/80 backdrop-blur text-foreground">
            {open ? <X className="w-4 h-4"/> : <Menu className="w-4 h-4"/>}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (<motion.nav initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }} className="md:hidden mt-3 mx-5 rounded-3xl border border-border bg-background/95 backdrop-blur-xl shadow-soft overflow-hidden">
            <ul className="flex flex-col p-2">
              {navItems.map((item) => (<li key={item.label}>
                  <a href={item.href} onClick={() => setOpen(false)} className="block px-5 py-4 text-xs uppercase tracking-[0.2em] text-foreground/80 hover:text-foreground hover:bg-secondary/60 rounded-2xl transition-colors">
                    {item.label}
                  </a>
                </li>))}
              <li className="p-2">
                <a href="#contact" onClick={() => setOpen(false)} className="group flex items-center justify-between gap-2 bg-foreground text-background rounded-full pl-5 pr-2 py-2.5 text-xs uppercase tracking-[0.2em]">
                  Get in touch
                  <span className="w-8 h-8 rounded-full bg-background flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-foreground"/>
                  </span>
                </a>
              </li>
            </ul>
          </motion.nav>)}
      </AnimatePresence>
    </motion.header>);
};
