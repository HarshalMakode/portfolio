function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-red-600 border-b-4 border-black flex items-center justify-between px-6 h-[60px] shadow-lg">
      
      {/* Logo */}
      <div className="font-[Press_Start_2P] text-xs text-yellow-400 tracking-wider drop-shadow-[2px_2px_0_black]">
        Mr. Hypix
      </div>

      {/* Links */}
      <ul className="hidden md:flex gap-6 list-none text-[10px] font-[Press_Start_2P] text-white">
        <li><a href="#home" className="hover:text-yellow-400">HOME</a></li>
        <li><a href="#skills" className="hover:text-yellow-400">SKILL</a></li>
        <li><a href="#projects" className="hover:text-yellow-400">PROJECT</a></li>
        <li><a href="#edu" className="hover:text-yellow-400">EDUCATION</a></li>
        <li><a href="#contact" className="hover:text-yellow-400">BATTLE</a></li>
      </ul>

      {/* Pokeball */}
       <div className="relative w-8 h-8 rounded-full border-[3px] border-black bg-[linear-gradient(to_bottom,#E3350D_50%,white_50%)] animate-spin">
        <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-white border-[3px] border-black rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      </div>

    </nav>
  );
}

export default Nav;