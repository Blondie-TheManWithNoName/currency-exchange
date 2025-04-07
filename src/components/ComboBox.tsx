import { getEmojiByCurrencyCode } from "country-currency-emoji-flags";

export default function ComboBox({ id, currency }: { id: number; currency?: string[] }) {
  console.log(currency);
  return (
    <div className="flex flex-col items-center">
      <label htmlFor={`currency-${id}`} className="text-black text-xl w-full text-left">
        To
      </label>
      <select name={`currency-${id}`} id={`currency-${id}`} className="min-w-28 text-black py-2 px-2 max-h-12 border-primary border-1 text-xl" defaultValue="USD">
        {currency?.map((item) => {
          const flag = getEmojiByCurrencyCode(item);
          if (!flag) return null;
          return (
            <option key={item} value={item} className="flex flex-row items-center justify-between">
              {flag} {item}
            </option>
          );
        })}
      </select>
    </div>
  );
}
