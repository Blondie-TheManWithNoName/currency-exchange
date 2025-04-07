import { useEffect, useState } from "react";

const useCurrency = () => {
  const [data, setData] = useState(null);
  const url = "https://api.coinbase.com/v2/exchange-rates?currency=EUR";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data.data.rates));
  }, [url]);

  return data;
};

export default useCurrency;
