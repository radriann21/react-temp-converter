import { useContext } from "react";
import { ConverterContext } from "../context/ConverterContext";

export const ConverterMode = () => {
  const { state, handleChangeMode } = useContext(ConverterContext);

  return (
    <div className="w-[50%]">
      <select
        onChange={handleChangeMode}
        value={state.mode}
        className="font-global text-sm appearance-none text-slate-100 bg-gray-800 shadow-md border-none outline-none p-2 rounded-md cursor-pointer focus:border-none active:border-none"
      >
        <option value="celsius">Celsius</option>
        <option value="fahrenheit">Fahrenheit</option>
      </select>
    </div>
  );
};
