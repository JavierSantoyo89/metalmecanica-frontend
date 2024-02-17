import { useState } from "react";
const useFetch = () => {
  const [dataFetch, setDataFetch] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const getFetch = async () => {
    try {
      const response = await fetch(
        "https://backendportfolio-r0uf.onrender.com/metalmecanica/employee/detailall"
      );
      const dataFetch = await response.json();
      setDataFetch(dataFetch);
      setIsLoading(false);
      // console.log(dataFetch);
      // console.log(dataFetch.data);
    } catch (error) {
      console.log(error);
      setError(error);
    }
  };
  return {
    data: dataFetch.data ||  [],
    count: dataFetch.count || 0,
    isLoading,
    error,
    getFetch,
  };
};

export default useFetch;
