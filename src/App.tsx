import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';

const SectionOne = lazy(() => import('./sections/SectionOne'));

export default function App() {
  return (
    <div className="min-h-screen bg-paper text-slate-900 antialiased">
      <a href="#main" className="skip-link">Skip to content</a>
      <Navbar />
      <main id="main">
        <Hero />
        <Suspense fallback={<div className="px-6 py-20 text-center">Loading content...</div>}>
          <SectionOne />
        </Suspense>
      </main>
    </div>
  );
}