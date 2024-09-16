import { Plus } from "lucide-react";
import Image from "next/image";

import letStartImage from "@/assets/images/lets-start.png";
import logo from "@/assets/images/logo.svg";

export const Empty = () => {
  return (
    <>
      <main className="h-full flex flex-col gap-8 justify-center items-center">
        <div className="flex gap-3 items-center">
          <Image src={logo} alt="Logo" width={0} height={0} sizes="100vw" />
          <h1 className="text-zinc-300 font-semibold">in.orbit</h1>
        </div>

        <Image src={letStartImage} alt="Logo" width={0} height={0} sizes="100vw" />
        <p className="w-[340px] text-center">
          Você ainda não cadastrou nenhuma meta, que tal cadastrar um agora mesmo?
        </p>
        <button className="flex gap-2 items-center justify-center px-4 py-2.5 rounded-md text-violet-50 bg-violet-700 hover:bg-violet-800 transition-all">
          <Plus size={16} />
          Cadastrar meta
        </button>
      </main>
    </>
  );
};
