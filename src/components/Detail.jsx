
import Loading from "../components/common/loading/Loading";
import useFetch from "../hooks/useFetch";
import { useEffect, useState } from "react";
export default function Detail() {
  const [contar, setContar] = useState(0);
  const { isLoading,  data, count, getFetch } = useFetch();
  // console.log(getFetch());
  useEffect(() => {
    if (!getFetch()){
      <Loading/>
    }else{
      getFetch()
    }
  }, []);
  // const renderDetails = () => {
  //   // console.log(data);
  //   // if (isLoading) return <div><Loading/></div>
  //   if (error) return <div>Error</div>;
  //   // if (data) return <div>{data}</div>
  //   {
    //     isLoading ? (
      //       <div>
      //         <Loading />
      //       </div>
      //     ) : (
        //       <div><p>Cargo: {data[0].position}</p></div>
        //     );
        //   }
        // };

  setTimeout(() => {
    setContar(contar + 1);
  }, 1000);
  return (
    <div>
      Detail
      <p>Tiempo: {contar} seg.</p>
      {/* {renderDetails()} */}
      <p>Total de registros: {count} empleados</p>
      {isLoading? <Loading/> : null}
      {data.map((Data) => (
        <p key={Data.id_employee}>{Data.user_name}</p>
      ))}
    </div>
  );
}
