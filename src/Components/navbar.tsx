function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-center backdrop-blur-sm space-x-6 py-4 z-50">
      <a
        className="nav-link text-black hover:text-orange-700 transition-colors duration-300"
      >
        Elemento 1
      </a>
      <a
        className="nav-link text-black hover:text-orange-700 transition-colors duration-300"
      >
        Elemento 2
      </a>
      <a
        className="nav-link text-black hover:text-orange-700 transition-colors duration-300"
      >
        Elemento 3
      </a>
      <a
        className="nav-link text-black hover:text-orange-700 transition-colors duration-300"
      >
        Elemento 4 
      </a>
    </nav>
  );
}
export default Navbar;
