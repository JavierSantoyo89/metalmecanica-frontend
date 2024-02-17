import { useState } from "react";
const useFetch = () => {
  const [ setData] = useState([]);
  const [ setError] = useState();
  const getFetch = async () => {
    try {
      const response = await fetch(
        "https://backendportfolio-r0uf.onrender.com/metalmecanica/employee/detailall"
      );
      const data = await response.json();
      console.log(data);
      setData(data);
    } catch (error) {
        setError(error);
      console.log(error);
    }
  };
  return {
    getFetch,
  };
};

export default useFetch;
