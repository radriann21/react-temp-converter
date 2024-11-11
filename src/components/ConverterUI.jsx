import { ConverterMode } from "./ConverterMode";
import { ConverterInput } from "./ConverterInput";
import { useContext } from "react";
import { ConverterContext } from "../context/ConverterContext";

export const ConverterUI = () => {
  const { result } = useContext(ConverterContext);

  return (
    <section className="mt-8">
      <section className="border-b-2 border-slate-500 text-center">
        <h3 className="font-bold">Result</h3>
        <span>{result}</span>
      </section>

      <section className="w-full flex items-center justify-between mt-8 space-x-8">
        <ConverterMode />
        <ConverterInput />
      </section>
    </section>
  );
};
