import { useEffect, useState } from "react";
import axios from "axios";

const useFetchData = (url: string) => {
  const [URL, setURL] = useState(url);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<any>(null);
  const [data, setData] = useState<any>(null);

  const fetchData = async () => {
    setIsLoading(true);
    setData(null);
    try {
      const data = await axios.get(URL).then((res) => res.data);
      setData(data);
    } catch (e) {
      setIsError(e);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [URL]);

  return { setURL, isLoading, isError, setIsError, data };
};

export default useFetchData;
