import Image from "next/image";

import { Plus } from "lucide-react";

import logo from "@/assets/images/logo.svg";
import { Divider } from "../Divider";
import { ProgressBar } from "../ProgressBar";

export const GoalsList = () => {
  return (
    <main className="h-full py-10 flex flex-col gap-8 items-center">
      <div className="w-[480px] space-y-6">
        <header className="flex justify-between">
          <div className="flex gap-3 items-center">
            <Image src={logo} alt="Logo" width={0} height={0} sizes="100vw" />
            <h1 className="text-zinc-300 font-semibold">05 a 12 de Agosto</h1>
          </div>
          <button className="flex gap-2 items-center justify-center px-3 py-1.5 rounded-md text-violet-50 bg-violet-700 hover:bg-violet-800 transition-all">
            <Plus size={16} />
            Cadastrar meta
          </button>
        </header>

        <div className="space-y-3">
          <ProgressBar percentage={60} />
          <p className="text-xs text-zinc-400">
            Você completou <span className="text-zinc-100">8</span> de <span className="text-zinc-100">15</span> metas
            nessa semana
          </p>
        </div>

        <Divider />

        <div className="flex gap-2 flex-wrap">
          <button className="flex gap-2 justify-center items-center px-3 py-2 bg-zinc-950 hover:bg-zinc-900 text-zinc-300 text-sm rounded-lg border border-zinc-900">
            <Plus className="text-zinc-600" size={16} />
            Meditar
          </button>
          <button className="flex gap-2 justify-center items-center px-3 py-2 bg-zinc-950 hover:bg-zinc-900 text-zinc-300 text-sm rounded-lg border border-zinc-900">
            <Plus className="text-zinc-600" size={16} />
            Praticar exercícios
          </button>
          <button className="flex gap-2 justify-center items-center px-3 py-2 bg-zinc-950 hover:bg-zinc-900  text-zinc-300 text-sm rounded-lg border border-zinc-900">
            <Plus className="text-zinc-600" size={16} />
            Acordar cedo
          </button>
        </div>

        <div className="space-y-6">
          <h2 className="text-zinc-100 font-medium text-xl">Sua semana</h2>
          <p className="text-zinc-400 text-sm">Você ainda não completou nenhuma meta essa semana</p>
        </div>
      </div>
    </main>
  );
};
