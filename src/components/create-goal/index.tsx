import { CheckCircle2, Circle, X } from "lucide-react";

export function CreateGoal() {
  return (
    <div className="fixed inset-0 w-full h-full bg-[rgb(0,0,0,0.4)] backdrop-blur-sm">
      <aside className="w-[400px] h-screen absolute right-0 bg-zinc-950 p-8 text-zinc-300 flex flex-col gap-6 ">
        <header className="space-y-3">
          <div className="flex justify-between">
            <h2 className="text-zinc-50 font-semibold text-lg">Cadastrar meta</h2>
            <button className="text-zinc-600">
              <X size={16} />
            </button>
          </div>
          <p className="text-zinc-400 w-full text-sm">
            Adicione atividades que te fazem bem e que você quer continuar praticando toda semana.
          </p>
        </header>

        <div className="space-y-2">
          <label htmlFor="activity" className="text-zinc-100 text-sm">
            Qual a atividade?
          </label>
          <input
            type="text"
            name="activity"
            id="activity"
            placeholder="Praticar exercícios, meditar, etc..."
            className="bg-black border border-zinc-900 outline-none text-zinc-400 px-4 h-12 w-full rounded-lg"
          />
        </div>

        <div className="h-full flex flex-col justify-between">
          <div className="space-y-2">
            <span className="text-zinc-100 text-sm">Quantas vezes na semana?</span>

            <div className="px-4 py-2.5 rounded-lg flex justify-between items-center border border-pink-500 bg-[rgba(236,72,153,0.05)]">
              <CheckCircle2 size={16} className="text-pink-400" />
              <span className="text-zinc-300"> 1x na semana</span>
              <span className="text-lg">🥱</span>
            </div>

            <div className="px-4 py-2.5 rounded-lg flex justify-between items-center bg-black">
              <Circle size={16} className="text-zinc-600" />
              <span className="text-zinc-300"> 2x na semana</span>
              <span className="text-lg">🙂</span>
            </div>

            <div className="px-4 py-2.5 rounded-lg flex justify-between items-center bg-black">
              <Circle size={16} className="text-zinc-600" />
              <span className="text-zinc-300"> 3x na semana</span>
              <span className="text-lg">😎</span>
            </div>

            <div className="px-4 py-2.5 rounded-lg flex justify-between items-center bg-black">
              <Circle size={16} className="text-zinc-600" />
              <span className="text-zinc-300"> 4x na semana</span>
              <span className="text-lg">😜</span>
            </div>

            <div className="px-4 py-2.5 rounded-lg flex justify-between items-center bg-black">
              <Circle size={16} className="text-zinc-600" />
              <span className="text-zinc-300"> 5x na semana</span>
              <span className="text-lg">🤨</span>
            </div>

            <div className="px-4 py-2.5 rounded-lg flex justify-between items-center bg-black">
              <Circle size={16} className="text-zinc-600" />
              <span className="text-zinc-300"> 6x na semana</span>
              <span className="text-lg">🤯</span>
            </div>

            <div className="px-4 py-2.5 rounded-lg flex justify-between items-center bg-black">
              <Circle size={16} className="text-zinc-600" />
              <span className="text-zinc-300"> Todos os dias da semana</span>
              <span className="text-lg">🔥</span>
            </div>
          </div>

          <div className="flex gap-3 items-center w-full">
            <button className="w-full flex justify-center items-center transition-all bg-zinc-900 hover:bg-zinc-800  text-zinc-400 px-4 py-2.5 font-medium text-sm rounded-lg">
              Fechar
            </button>
            <button className="w-full flex justify-center items-center transition-all bg-violet-700 hover:bg-violet-800  text-violet-50 px-4 py-2.5 font-medium text-sm rounded-lg">
              Salvar
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
}
