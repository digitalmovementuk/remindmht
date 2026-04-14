export default function SectionOne() {
  return (
    <section className="bg-paper px-6 py-24 text-slate-900">
      <div className="mx-auto max-w-7xl text-center">
        <p className="text-xs uppercase tracking-[0.15em] text-navy">Why Re;mind</p>
        <h2 className="mx-auto mt-4 max-w-4xl text-4xl font-extrabold leading-tight text-navy md:text-6xl">Therapy is not one size fits all.</h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-700">We see your mental health care as an individual journey — as unique as you are. No scripts. No checklists. No arbitrary timelines.</p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-[20px] bg-white p-8 shadow-card">No Scripts. Ever.</div>
          <div className="rounded-[20px] bg-white p-8 shadow-card">Your Pace, Your Path.</div>
          <div className="rounded-[20px] bg-white p-8 shadow-card">Expert. Flexible. Here.</div>
        </div>
      </div>
    </section>
  );
}