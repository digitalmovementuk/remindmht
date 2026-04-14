import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const links = [
  ['Services', '#services'],
  ['Our Approach', '#approach'],
  ['About Us', '#about'],
  ['Team', '#team'],
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-40 transition-all duration-300 ease-in-out ${
        isScrolled ? 'border-b border-white/10 bg-[rgba(10,10,20,0.6)] shadow-[0_8px_40px_rgba(0,0,0,0.2)] backdrop-blur-[14px]' : 'bg-transparent'
      }`}
      style={isScrolled ? { WebkitBackdropFilter: 'blur(14px)' } : undefined}
    >
      <nav aria-label="Primary navigation" className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 text-white md:px-8">
        <a href="#main" className="min-h-11 py-2 text-2xl font-bold leading-none tracking-normal">
          Re<span className="text-coral">;</span>mind
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="min-h-11 py-3 text-sm font-medium leading-5 text-white/90 transition hover:text-white">
              {label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <a href="#stories" className="min-h-11 py-3 text-sm font-medium leading-5 text-white/90 transition hover:text-white">Stories</a>
          <a href="#book" className="rounded-pill border border-white px-6 py-2.5 text-sm font-semibold leading-5 text-white transition duration-200 hover:bg-white hover:text-navy">
            Book a Session
          </a>
        </div>

        <button
          type="button"
          aria-label="Open navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
          className="flex min-h-11 min-w-11 items-center justify-center rounded-tag border border-white/30 text-white md:hidden"
        >
          <span className="sr-only">Open navigation menu</span>
          <span className="flex flex-col gap-1.5" aria-hidden="true">
            <span className="block h-0.5 w-6 bg-white" />
            <span className="block h-0.5 w-6 bg-white" />
            <span className="block h-0.5 w-6 bg-white" />
          </span>
        </button>
      </nav>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed inset-0 top-[76px] z-50 bg-navy px-6 py-8 text-white md:hidden"
          >
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
              className="flex flex-col gap-2"
            >
              {[...links, ['Stories', '#stories']].map(([label, href]) => (
                <motion.a
                  key={href}
                  href={href}
                  variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
                  onClick={() => setIsOpen(false)}
                  className="min-h-11 border-b border-white/10 py-4 text-2xl font-semibold leading-8"
                >
                  {label}
                </motion.a>
              ))}
              <motion.a
                href="#book"
                variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
                onClick={() => setIsOpen(false)}
                className="mt-6 min-h-11 rounded-pill border border-white px-6 py-3 text-center font-semibold leading-5"
              >
                Book a Session
              </motion.a>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
