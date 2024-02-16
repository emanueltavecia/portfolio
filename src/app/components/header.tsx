export function Header() {
  return(
    <header className="flex flex-col md:flex-row gap-4 items-center justify-between py-9">
      <span className="font-bold text-xl md:font-lg">Emanuel Tavecia</span>
      <nav>
        <ul className="flex gap-5 md:gap-7 font-medium">
          <li><a href="#projects">Projetos</a></li>
          <li><a href="#certificates">Certificações</a></li>
          <li><a href="#contact">Contato</a></li>
        </ul>
      </nav>
    </header>
  )
}