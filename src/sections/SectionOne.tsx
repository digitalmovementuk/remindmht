import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const features = [
  {
    icon: '✦',
    color: 'text-coral',
    heading: 'No Scripts. Ever.',
    body: 'Your therapy begins with your story, not a template. Each session is shaped around what you need now.',
  },
  {
    icon: '◎',
    color: 'text-navy',
    heading: 'Your Pace, Your Path.',
    body: 'Move steadily, pause when needed, and choose support that respects the rhythm of real life.',
  },
  {
    icon: '❋',
    color: 'text-magenta',
    heading: 'Expert. Flexible. Here.',
    body: 'Work with experienced therapists who adapt the approach, timing, and focus around you.',
  },
];

const stats = [
  ['6', 'Therapeutic Approaches'],
  ['7', 'Days a Week Availability'],
  ['100%', 'Bespoke to You'],
];

function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });
  const [count, setCount] = useState(0);
  const numeric = Number.parseInt(value, 10);
  const suffix = value.includes('%') ? '%' : '';

  useEffect(() => {
    if (!isInView) return undefined;
    const duration = 900;
    const startedAt = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - startedAt) / duration, 1);
      setCount(Math.round(numeric * progress));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isInView, numeric]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function SectionOne() {
  return (
    <section id="approach" className="bg-paper px-6 py-24 text-ink md:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="text-center"
        >
          <p className="flex items-center justify-center gap-3 text-sm font-semibold uppercase leading-5 tracking-[0.15em] text-navy">
            <span className="h-1 w-1 bg-coral" aria-hidden="true" />
            WHY RE;MIND
          </p>
          <h2 className="mx-auto mt-4 max-w-[720px] text-[36px] font-extrabold leading-[1.08] text-navy md:text-[64px]">
            Therapy is not one size fits all.
          </h2>
          <p className="mx-auto mt-6 max-w-[600px] text-base font-normal leading-7 text-[#444] md:text-xl md:leading-8">
            We see your mental health care as an individual journey - as unique as you are. No scripts. No checklists. No arbitrary timelines.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="mx-auto mt-14 grid max-w-5xl items-center gap-8 md:grid-cols-[0.9fr_1.1fr]"
        >
          <img
            src="/remindmht/therapy-room.svg"
            alt="A quiet therapy room with a chair, plant, and warm daylight"
            className="h-auto w-full rounded-card shadow-card"
            loading="lazy"
          />
          <div className="grid gap-6 md:grid-cols-1">
            {features.map((feature) => (
              <motion.article
                key={feature.heading}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45 }}
                className="rounded-card bg-white p-8 text-left shadow-card transition duration-300 hover:-translate-y-1.5 hover:shadow-cardStrong"
              >
                <span className={`text-3xl leading-8 ${feature.color}`} aria-hidden="true">{feature.icon}</span>
                <h3 className="mt-4 text-2xl font-bold leading-8 text-navy">{feature.heading}</h3>
                <p className="mt-3 text-base leading-7 text-[#444]">{feature.body}</p>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55 }}
        className="mx-auto mt-20 max-w-7xl overflow-hidden rounded-card bg-navy text-white"
      >
        <div className="grid gap-8 px-6 py-12 text-center md:grid-cols-3 md:px-10">
          {stats.map(([value, label]) => (
            <div key={label}>
              <p className="text-[56px] font-extrabold leading-none md:text-[72px]">
                <CountUp value={value} />
              </p>
              <p className="mt-4 text-[13px] font-medium uppercase leading-5 tracking-[0.15em] text-white/70">{label}</p>
            </div>
          ))}
        </div>
        <div className="border-t border-white/10 px-6 py-12 text-center md:px-10">
          <h3 className="text-[32px] font-extrabold leading-[1.12] md:text-[44px]">Ready to take the first step?</h3>
          <p className="mx-auto mt-4 max-w-[560px] text-base leading-7 text-white/80">
            A free consultation gives you space to ask questions, understand your options, and choose what feels right.
          </p>
          <motion.a
            href="#book"
            whileHover={{ scale: 1.03, boxShadow: '0 18px 48px rgba(255,107,107,0.32)' }}
            className="mt-8 inline-flex min-h-11 items-center justify-center rounded-pill bg-coral px-8 py-3 text-base font-semibold leading-5 text-white"
          >
            Book a Free Consultation
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
