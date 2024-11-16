import axios from "axios";
import { useState } from "react";

const useFetchData = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [response, setResponse] = useState<any>(null);

  const fetchData = async (link: string) => {
    setLoading(true);
    setError(null);

    try {
      const res = await axios.get(link);
      const data = { ...res.data, quantity: 0 };
      setResponse(() => data);
      setError(null);
    } catch (err) {
      setError("An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return { fetchData, loading, error, response };
};

export default useFetchData;
