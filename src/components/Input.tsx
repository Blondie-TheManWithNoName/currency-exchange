export default function InputText({ error }: { error: boolean }) {
  return (
    <div className="flex flex-col items-center relative">
      <label htmlFor="currency-0" className="text-black text-xl w-full text-left">
        Euros
      </label>
      <div className="flex items-center justify-center relative border-primary border-1 px-4 py-2 max-w-xs min-w-28 h-11">
        <input type="number" step=".01" placeholder="0" defaultValue={1} name="currency-0" className="text-2xl text-black border-0 w-[72%] focus:outline-none" />
        <span className="text-2xl">🇪🇺</span>
        <div className="w-[16%] text-xl ml-[2%]">EUR</div>
      </div>
      {error && <div className="text-red-500 text-md absolute -bottom-6">Please enter a valid number</div>}
    </div>
  );
}
