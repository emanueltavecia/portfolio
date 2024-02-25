import { ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-zinc-900 items-center py-8 px-5 mt-16 flex flex-col gap-1 rounded-t-lg">
      <p className="text-center">Desenvolvido com Next.js</p>
      <p className="text-center font-medium">By Emanuel Tavecia &copy; {new Date().getFullYear()}</p>
      <a href="#top" className="mt-3 p-2 bg-slate-900 rounded-md border-2 border-zinc-500">
        <ArrowUp />
      </a>
    </footer>
  )
}