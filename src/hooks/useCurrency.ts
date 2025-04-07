import { useEffect, useState } from "react";

const useCurrency = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const url = "https://api.coinbase.com/v2/exchange-rates?currency=EUR";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data.data.rates))
      .catch(() => setError(true));
  }, [url]);

  return { data, error };
};

export default useCurrency;
