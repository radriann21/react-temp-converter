import { useContext } from "react";
import { ConverterContext } from "../context/ConverterContext";

export const ConverterInput = () => {
  const { handleTempChange } = useContext(ConverterContext);

  return (
    <div className="w-full">
      <input
        onChange={handleTempChange}
        className="bg-transparent outline-none font-bold font-global text-sm border-b-2 pb-1 border-slate-700"
        type="text"
        placeholder="Enter temperature..."
      />
    </div>
  );
};
