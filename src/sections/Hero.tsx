import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FormEvent, MouseEvent, useEffect, useRef, useState } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const indicatorRef = useRef<HTMLDivElement | null>(null);
  const [videoReady, setVideoReady] = useState(false);
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([]);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion || !sectionRef.current || !videoRef.current) return undefined;

    const ctx = gsap.context(() => {
      gsap.to(videoRef.current, {
        yPercent: 16,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      gsap.to(indicatorRef.current, {
        opacity: 0,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: '80 top',
          end: '160 top',
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const createRipple = (event: MouseEvent<HTMLAnchorElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const id = Date.now();
    setRipples((current) => [...current, { id, x: event.clientX - rect.left, y: event.clientY - rect.top }]);
    window.setTimeout(() => setRipples((current) => current.filter((ripple) => ripple.id !== id)), 520);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <section ref={sectionRef} className="relative min-h-screen min-h-[100dvh] overflow-hidden bg-navy text-white">
      <div className={`hero-skeleton absolute inset-0 transition-opacity duration-500 ${videoReady ? 'opacity-0' : 'opacity-100'}`} aria-hidden="true" />
      <video
        ref={videoRef}
        className="absolute inset-0 h-[116%] w-full object-cover"
        src="/remindmht/videos/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        onCanPlay={() => setVideoReady(true)}
      />
      <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(0,0,0,0.45)_0%,rgba(10,8,30,0.65)_100%)]" />

      <div className="relative mx-auto grid min-h-screen min-h-[100dvh] max-w-7xl items-center gap-10 px-6 pb-24 pt-28 md:grid-cols-[1fr_416px] md:px-8 md:pb-28 md:pt-32">
        <div className="mx-auto max-w-3xl text-center md:mx-0 md:text-left">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.55 }}
            className="mb-6 flex items-center justify-center gap-3 text-[14px] font-medium uppercase leading-5 tracking-[0.15em] text-white/80 md:justify-start md:text-[11px]"
          >
            <span className="h-1 w-1 bg-coral" aria-hidden="true" />
            BESPOKE MENTAL HEALTH CARE · WHITELEY, UK
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="text-[52px] font-extrabold leading-[0.95] tracking-normal sm:text-[60px] md:text-[88px] lg:text-[104px] xl:text-[112px]"
          >
            Your Mind,<br />
            <span className="bg-gradient-to-r from-white to-magenta bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              Your Healing.
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.55 }}
            className="mx-auto mt-8 max-w-[440px] text-[16px] font-normal leading-7 text-white/90 md:mx-0 md:text-[19px]"
          >
            Therapy that's as unique as you are - expert support without scripts, checklists, or arbitrary timelines.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.55 }}
            className="mt-10 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center md:gap-6"
          >
            <motion.a
              href="#book"
              onClick={createRipple}
              whileHover={{ scale: 1.03, y: -2, boxShadow: '0 18px 48px rgba(255,255,255,0.22)' }}
              className="relative min-h-11 overflow-hidden rounded-pill bg-white px-[34px] py-3.5 text-center text-base font-semibold leading-5 text-navy"
            >
              Begin Your Journey
              {ripples.map((ripple) => (
                <span key={ripple.id} className="ripple" style={{ left: ripple.x, top: ripple.y }} />
              ))}
            </motion.a>
            <a href="#approach" className="min-h-11 py-3 text-center text-base font-semibold leading-5 text-white underline-offset-4 transition hover:underline md:ml-6">
              Explore Our Therapies →
            </a>
          </div>
        </div>

        <motion.form
          id="book"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.34, duration: 0.55 }}
          className="mx-auto w-full max-w-[416px] rounded-card border border-white/20 bg-white/[0.14] p-6 text-left shadow-card backdrop-blur-[18px]"
          aria-label="Book a consultation"
        >
          <h2 className="text-2xl font-bold leading-8 text-white">Start with a private conversation.</h2>
          <p className="mt-2 text-sm leading-6 text-white/80">Share the basics and we will respond with a calm first step.</p>
          <label className="mt-6 block text-sm font-medium leading-5 text-white" htmlFor="name">Name</label>
          <input id="name" name="name" autoComplete="name" className="mt-2 min-h-11 w-full rounded-tag border border-white/20 bg-white px-4 py-3 text-base leading-6 text-ink" />
          <label className="mt-4 block text-sm font-medium leading-5 text-white" htmlFor="email">Email</label>
          <input id="email" name="email" type="email" autoComplete="email" className="mt-2 min-h-11 w-full rounded-tag border border-white/20 bg-white px-4 py-3 text-base leading-6 text-ink" />
          <label className="mt-4 block text-sm font-medium leading-5 text-white" htmlFor="support">What would help right now?</label>
          <textarea id="support" name="support" rows={3} className="mt-2 min-h-[104px] w-full resize-none rounded-tag border border-white/20 bg-white px-4 py-3 text-base leading-6 text-ink" />
          <button type="submit" className="mt-6 min-h-11 w-full rounded-pill bg-coral px-6 py-3 text-base font-semibold leading-5 text-white shadow-glow transition duration-200 hover:scale-[1.02]">
            Request Consultation
          </button>
        </form>
      </div>

      <div ref={indicatorRef} className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/70 md:flex" aria-hidden="true">
        <span className="h-10 w-px bg-white/50" />
        <span className="animate-bounce text-2xl leading-none">⌄</span>
      </div>
    </section>
  );
}
