import React from 'react';

const POSTS = [
  { id: 1, title: "The Silent Shift: How Interface Design is Moving Toward Ambient Intelligence", date: "Oct 24", cat: "Design" },
  { id: 2, title: "Why Minimalism is Reclaiming the Modern Workspace", date: "Oct 22", cat: "Architecture" },
  { id: 3, title: "The Future of Independent Journalism in the Age of AI", date: "Oct 20", cat: "Media" },
  { id: 4, title: "Synthesizing Sound: The Emotional Resonance of Modern Tech", date: "Oct 18", cat: "Tech" },
  { id: 5, title: "Notes on the New Aesthetic of the Digital Nomad", date: "Oct 15", cat: "Culture" },
  { id: 6, title: "The Case for Slow Software in a Fast-Paced World", date: "Oct 12", cat: "Engineering" }
];

const SearchIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
);

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-blue-50 antialiased">
      <nav className="fixed top-0 w-full z-50 bg-white/95 border-b border-gray-100 py-4">
        <div className="max-w-xl mx-auto px-6 flex justify-between items-center">
          <a href="/" className="text-base font-bold tracking-tighter">LUMINA</a>
          <div className="flex items-center gap-6 text-[10px] font-bold uppercase tracking-widest text-gray-400">
            <button className="hover:text-black" aria-label="Search"><SearchIcon /></button>
            <a href="#archive" className="hover:text-black">Archive</a>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-24 px-6 max-w-xl mx-auto">
        <header className="mb-24">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-[1.1] serif">
            Refined reporting for the curious.
          </h1>
          <p className="text-gray-500 text-xl mb-10 leading-relaxed italic border-l-2 border-gray-100 pl-6 serif">
            Independent analysis on design and technology, published weekly.
          </p>
        </header>

        <section id="archive">
          <div className="flex items-center justify-between border-b border-gray-900 pb-2 mb-2 font-bold text-[10px] uppercase tracking-[0.3em]">
            <span>The Archive</span>
          </div>
          <div className="divide-y divide-gray-50">
            {POSTS.map(post => (
              <a key={post.id} href="#" className="block group py-8">
                <div className="flex items-center gap-3 mb-3 text-[10px] font-bold uppercase tracking-widest">
                  <span className="text-gray-400">{post.date}</span>
                  <span className="w-1 h-1 rounded-full bg-gray-200"></span>
                  <span className="text-blue-600">{post.cat}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-medium tracking-tight leading-[1.2] group-hover:text-blue-600 transition-colors serif">{post.title}</h2>
              </a>
            ))}
          </div>
        </section>
      </main>

      <style dangerouslySetInnerHTML={{ __html: `
        .serif { font-family: ui-serif, Georgia, serif; }
        body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; }
      `}} />
    </div>
  );
}