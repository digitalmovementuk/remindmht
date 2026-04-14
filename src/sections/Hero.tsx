export default function Hero() {
  return (
    <section className="relative min-h-screen bg-navy text-white">
      <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(0,0,0,0.45)_0%,rgba(10,8,30,0.65)_100%)]" />
      <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-10 px-6 py-24 md:grid-cols-2">
        <div>
          <p className="mb-6 text-xs uppercase tracking-[0.15em] text-white/85">Bespoke Mental Health Care · Whiteley, UK</p>
          <h1 className="max-w-3xl text-6xl font-extrabold leading-none md:text-8xl">Your Mind,<br /><span className="bg-gradient-to-r from-white to-magenta bg-clip-text text-transparent">Your Healing.</span></h1>
          <p className="mt-8 max-w-md text-lg text-white/88">Therapy that's as unique as you are — expert support without scripts, checklists, or arbitrary timelines.</p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="#book" className="rounded-full bg-white px-8 py-4 font-semibold text-navy">Begin Your Journey</a>
            <a href="#approach" className="text-white underline-offset-4 hover:underline">Explore Our Therapies →</a>
          </div>
        </div>
        <form id="book" className="rounded-[20px] bg-white/10 p-6 backdrop-blur-md">
          <h2 className="mb-4 text-2xl font-bold">Book a Session</h2>
          <label className="block text-sm">Name<input className="mt-2 w-full rounded-full border border-white/20 bg-white/95 px-4 py-3 text-slate-900" /></label>
          <label className="mt-4 block text-sm">Email<input className="mt-2 w-full rounded-full border border-white/20 bg-white/95 px-4 py-3 text-slate-900" /></label>
          <button className="mt-6 w-full rounded-full bg-coral px-4 py-3 font-semibold text-white">Request Consultation</button>
        </form>
      </div>
    </section>
  );
}