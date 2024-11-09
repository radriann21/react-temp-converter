import { ConverterMode } from "./ConverterMode";
import { ConverterInput } from "./ConverterInput";

export const ConverterUI = () => {
  return (
    <section className="mt-8">
      <section className="border-b-2 border-slate-500 text-center">
        <h3 className="font-bold">Result</h3>
        <span>30°</span>
      </section>

      <section className="w-full flex items-center justify-between mt-8">
        <ConverterMode />
        <ConverterInput />
      </section>
    </section>
  );
};
