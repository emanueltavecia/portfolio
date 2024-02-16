export function Header() {
  return(
    <header className="flex justify-between py-9">
      <span className="font-bold">Emanuel Tavecia</span>
      <nav>
        <ul className="flex gap-7 font-medium">
          <li><a href="#projects">Projetos</a></li>
          <li><a href="#certificates">Certificações</a></li>
          <li><a href="#contact">Contato</a></li>
        </ul>
      </nav>
    </header>
  )
}