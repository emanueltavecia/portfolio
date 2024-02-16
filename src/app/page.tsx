import { Header } from "./components/header";
import { About } from "./components/about";

export default function Home() {
  return (
    <div className="max-w-5xl w-full mx-auto">
      <Header />

      <main className="mt-8 flex flex-col gap-10">
        <About />

        <div id="projects">
          <h2 className="text-xl font-bold mb-5">Projetos</h2>

          <div className="grid grid-cols-3">
            <div className="bg-gray-950 rounded-md p-5 hover:scale-105">
              <p className="font-semibold">Notes App</p>
              <img src="https://github.com/emanueltavecia/nlw-notes/blob/main/.github/screenshot.png?raw=true" alt="" />
            </div>
            
          </div>
        </div>
      </main>
    </div>
  );
}
