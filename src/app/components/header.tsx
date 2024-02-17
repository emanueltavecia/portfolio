export function Header() {
  return(
    <div className="bg-zinc-900 rounded-b-lg">
      <header className="max-w-5xl w-full mx-auto px-4 md:px-8 flex flex-col md:flex-row gap-4 items-center justify-between py-9 ">
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