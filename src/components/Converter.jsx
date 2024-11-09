import { ConverterUI } from "./ConverterUI";

export const Converter = () => {
  return (
    <article className="flex items-center flex-col w-[40%] bg-neutral-900 rounded-md shadow-lg p-8 text-slate-100">
      <h1 className="font-bold text-center text-2xl">Temperature Converter</h1>
      <ConverterUI />
      <button className="mt-4 w-48 p-2 bg-black text-white font-bold rounded-md border-none outline-none cursor-pointer transition-colors ease-linear duration-300 hover:bg-zinc-900">
        Transform
      </button>
    </article>
  );
};
