import { AxiosError, AxiosPromise } from "axios";
import { useEffect, useState } from "react";

function useApi<T = void, E = void>(fetch: () => AxiosPromise) {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState<T>();
  const [error, setError] = useState<E>();

  async function ApiCall() {
    try {
      const data = await fetch();
      setIsLoading(false);
      // @ts-ignore
      setData(data.data as T);
    } catch (e) {
      setIsLoading(false);
      setError((e as AxiosError).response?.data as E);
      setIsError(true);
    }
  }
  useEffect(() => {
    if (isLoading) {
      ApiCall();
    }
  }, []);

  return { isError, isLoading, data, error };
}

export default useApi;
