export function Header() {
  return(
    <div className="bg-zinc-900/70 backdrop-blur-md rounded-b-lg fixed top-0 left-0 right-0">
      <header className="max-w-5xl w-full mx-auto px-4 py-5 md:py-7 md:px-8 flex flex-col md:flex-row gap-4 items-center justify-between">
        <span className="font-bold text-xl md:font-lg">Emanuel Tavecia</span>
        <nav>
          <ul className="flex gap-5 md:gap-7 font-medium">
            <li><a href="#projects">Projetos</a></li>
            <li><a href="#certificates">Certificações</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
        </nav>
      </header>
    </div>
  )
}