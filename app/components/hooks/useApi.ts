import { ApiResponse } from "apisauce";
import { useState } from "react";

function useApi(apiFn: (...args: any) => Promise<ApiResponse<any, any>>): {
  request: () => void;
  data: any[];
  isLoading: boolean;
  error: any;
} {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const request = async (...args: any) => {
    setIsLoading(true);
    const response = await apiFn(...args);
    setIsLoading(false);

    if (!response.ok) {
      setError(true);
      return;
    }

    setError(false);
    setData(response.data);
  };

  return {
    request,
    data,
    isLoading,
    error,
  };
}

export default useApi;
