export default function NavBar() {
  return (
    <header className="border-b border-[#e3ebf2] bg-white">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center gap-6 px-5">
        <a href="#" className="flex items-center gap-2.5 font-bold text-[#1e3a5f]">
          <span className="text-2xl">🌍</span>
          <span>Country Explorer</span>
        </a>

        <nav className="hidden flex-1 justify-center md:flex">
          <a href="#" className="text-sm font-medium text-[#0f8f8f]">Home</a>
        </nav>

        <div className="hidden w-64 items-center gap-2 rounded-lg border border-[#e3ebf2] bg-[#f7fafc] px-3 py-2 md:flex">
          <span className="text-[#0f8f8f]">🔍</span>
          <input
            type="text"
            placeholder="Search countries..."
            className="w-full bg-transparent text-sm outline-none"
          />
        </div>

        <div className="hidden rounded-full bg-slate-100 p-[3px] md:flex">
          <button className="h-7 w-7 rounded-full">☀</button>
          <button className="h-7 w-7 rounded-full bg-[#1e3a5f] text-white">☼</button>
        </div>

        <button className="ml-auto text-2xl text-[#1e3a5f] md:hidden" aria-label="Menu">☰</button>
      </div>
    </header>
  );
}