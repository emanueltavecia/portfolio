import { ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-zinc-900 items-center py-8 px-5 mt-16 flex flex-col gap-4 rounded-t-lg">
      <p className="text-center font-medium">Desenvolvido com Next.js por Emanuel Tavecia</p>
      <a href="#top" className="p-2 bg-slate-900 rounded-md border-2 border-zinc-500">
        <ArrowUp />
      </a>
    </footer>
  )
}