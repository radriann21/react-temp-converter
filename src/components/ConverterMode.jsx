export const ConverterMode = () => {
  return (
    <div className="w-[50%]">
      <select className="font-global text-slate-100 bg-gray-800 shadow-md border-none outline-none p-2 rounded-md cursor-pointer">
        <option value="celsius">Celsius</option>
        <option value="fahrenheit">Fahrenheit</option>
      </select>
    </div>
  );
};
