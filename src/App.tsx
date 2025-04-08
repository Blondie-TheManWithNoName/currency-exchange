import ComboBox from "./components/ComboBox";
import Header from "./components/Header";
import InputText from "./components/Input";
import useCurrency from "./hooks/useCurrency";
import { useState } from "react";

function App() {
  const [convertData, setConvertData] = useState<{ currency: string; rate: number }[]>([]);
  const { data: currency, error: currencyError } = useCurrency();
  const [error, setError] = useState(false);

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const currenct0 = formData.get(`currency-0`);
    if (!currenct0 || isNaN(Number(currenct0)) || Number(currenct0) <= 0) {
      setError(true);
      return;
    }
    setError(false);
    if (!currency) return;
    const currenct1 = formData.get(`currency-1`);
    const currenct2 = formData.get(`currency-2`);
    const currenct3 = formData.get(`currency-3`);
    setConvertData([
      { currency: "EUR", rate: Number(currenct0) },
      { currency: currenct1 as string, rate: currency[currenct1 as string] },
      { currency: currenct2 as string, rate: currency[currenct2 as string] },
      { currency: currenct3 as string, rate: currency[currenct3 as string] },
    ]);
  }
  return (
    <>
      <Header />

      <main className="flex flex-col items-center justify-center w-full mt-[4rem] md:mt-[10rem]">
        <form className="flex flex-col md:flex-row gap-x-6 gap-y-3 w-full justify-center items-end px-20" onSubmit={submit}>
          {" "}
          <InputText error={error} />
          {currency && Array.from({ length: 3 }).map((_, index) => <ComboBox key={index} id={index + 1} currency={Object.keys(currency)} />)}
          {currencyError && <div className="text-red-500 text-md ">Error fetching the data, please try again later</div>}
          <input
            type="submit"
            className="min-w-24 text-white py-2 px-4 text-xl cursor-pointer max-h-11 bg-primary hover:bg-primary/50 disabled:bg-gray-400 disabled:cursor-not-allowed
"
            disabled={currencyError}
            value="Convert"
          />
        </form>
        <div className="flex flex-row w-full items-center justify-center mt-[4rem] md:mt-[10rem] bg-primary/90 py-4 text-white no-wrap">
          {convertData.map((item, index) =>
            index === 0 ? (
              <div className="text-4xl md:text-6xl font-semibold">
                <span className="text-[#FFC635]">
                  {convertData[0].rate} {convertData[0].currency}
                </span>{" "}
                =
              </div>
            ) : (
              <div key={index} className="p-2 text-2xl md:text-4xl no-wrap">
                {(Number(convertData[0].rate) * Number(item.rate)).toFixed(2)} {item.currency} {index === convertData.length - 1 ? "" : "="}
              </div>
            )
          )}
        </div>
      </main>
    </>
  );
}

export default App;
