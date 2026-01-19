import React from 'react';

/**
 * DATABASE (Git-Managed)
 * To add new articles, simply add a new object to this array.
 * This ensures the fastest possible load times and zero database latency.
 */
const POSTS = [
  { 
    id: 1, 
    title: "The Silent Shift: How Interface Design is Moving Toward Ambient Intelligence", 
    date: "Oct 24", 
    cat: "Design" 
  },
  { 
    id: 2, 
    title: "Why Minimalism is Reclaiming the Modern Workspace", 
    date: "Oct 22", 
    cat: "Architecture" 
  },
  { 
    id: 3, 
    title: "The Future of Independent Journalism in the Age of AI", 
    date: "Oct 20", 
    cat: "Media" 
  },
  { 
    id: 4, 
    title: "Synthesizing Sound: The Emotional Resonance of Modern Tech", 
    date: "Oct 18", 
    cat: "Tech" 
  },
  { 
    id: 5, 
    title: "Notes on the New Aesthetic of the Digital Nomad", 
    date: "Oct 15", 
    cat: "Culture" 
  },
  { 
    id: 6, 
    title: "The Case for Slow Software in a Fast-Paced World", 
    date: "Oct 12", 
    cat: "Engineering" 
  }
];

// --- Performance Icons (Inline SVGs) ---
const ArrowRight = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
);

const SearchIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
);

// --- UI Components ---

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-white/95 border-b border-gray-100 py-4">
    <div className="max-w-xl mx-auto px-6 flex justify-between items-center font-sans">
      <a href="/" className="text-base font-bold tracking-tighter">LUMINA</a>
      <div className="flex items-center gap-6">
        <button className="text-gray-400 hover:text-black transition-colors" aria-label="Search">
          <SearchIcon />
        </button>
        <a href="#archive" className="text-[10px] font-bold text-gray-400 uppercase tracking-widest hover:text-black">Archive</a>
      </div>
    </div>
  </nav>
);

const ArticleRow = ({ post }) => (
  <a href={`#`} className="block group py-8 border-b border-gray-50">
    <div className="flex items-center gap-3 mb-3 font-sans">
      <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">{post.date}</span>
      <span className="w-1 h-1 rounded-full bg-gray-200"></span>
      <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600">{post.cat}</span>
    </div>
    <h2 className="font-serif text-2xl md:text-3xl font-medium tracking-tight leading-[1.2] group-hover:text-blue-600 transition-colors duration-200">
      {post.title}
    </h2>
  </a>
);

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-blue-50 antialiased">
      <Navbar />

      <main className="pt-32 pb-24 px-6 max-w-xl mx-auto">
        {/* Editorial Header */}
        <header className="mb-24">
          <h1 className="font-serif text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-[1.1]">
            Refined reporting for the curious.
          </h1>
          <p className="font-serif text-gray-500 text-xl mb-10 leading-relaxed italic border-l-2 border-gray-100 pl-6">
            Independent analysis on design and technology, published weekly.
          </p>
          
          <form onSubmit={(e) => e.preventDefault()} className="relative flex items-center font-sans">
            <input 
              type="email" 
              placeholder="Email address" 
              className="w-full pl-5 pr-28 py-3.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-1 focus:ring-black focus:bg-white outline-none transition-all text-base"
              required
            />
            <button className="absolute right-1.5 px-5 py-2 bg-black text-white rounded-md font-bold text-sm hover:bg-gray-800 transition-colors flex items-center gap-2">
              Join <ArrowRight />
            </button>
          </form>
          <p className="mt-4 font-sans text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold">Volume III • Edition 2024</p>
        </header>

        {/* Article Feed */}
        <section id="archive">
          <div className="flex items-center justify-between border-b border-gray-900 pb-2 mb-2 font-sans">
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">The Archive</span>
          </div>
          
          <div className="divide-y divide-gray-50">
            {POSTS.map(post => (
              <ArticleRow key={post.id} post={post} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="font-sans text-[10px] font-bold uppercase tracking-widest text-gray-300">End of Feed</p>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-32 pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6 font-sans">
          <div className="flex gap-6 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
            <a href="#" className="hover:text-black">About</a>
            <a href="#" className="hover:text-black">Twitter</a>
            <a href="#" className="hover:text-black">RSS</a>
          </div>
          <p className="text-[10px] font-bold text-gray-300 uppercase tracking-[0.2em]">© 2024 Lumina Press</p>
        </footer>
      </main>

      {/* Zero-Latency Typography */}
      <style dangerouslySetInnerHTML={{ __html: `
        .font-serif {
          font-family: ui-serif, Georgia, "Times New Roman", Times, serif;
        }
        .font-sans {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
        }
      `}} />
    </div>
  );
}