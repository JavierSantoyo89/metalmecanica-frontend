import Loading from "../../components/common/loading/Loading";
import Head from "../../components/parcial/head/Head";
import Footer from "../../components/parcial/footer/Footer";
// import useFetch from "../../hooks/useFetch";
import { useState } from "react";
// import Form from "../../components/common/form/Form";
import toast, { Toaster } from "react-hot-toast";
import Stadistics from "../../components/stadistics/Stadistics";
//**************************** Home *****************************/
//************************* landing page ************************/

const notify = () => toast.success("Jalo esta chingadera!!!. ");

export default function Home() {
  // const getFetch = useFetch();
  const [contar, setContar] = useState(0);
  // useEffect(() => {
  //   const getFetch = async () => {
  //     try {
  //       const response = await fetch(
  //         "https://backendportfolio-r0uf.onrender.com/metalmecanica/employee/detailall"
  //       );
  //       const data = await response.json();
  //       console.log(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   getFetch();
  // }, []);

  setTimeout(() => {
    setContar(contar + 1);
  }, 1000);
  return (
    <div>
      <Head />
      <br></br>
      Home
      <br></br>
      <p> Contador: {contar} seg</p>
      <Loading />
      <button onClick={notify}>Puchale...</button>
      <Toaster position="bottom-right"  />
      <Stadistics/>
      {/* <Form typeform='post' typeTable='employee'/> //!No work */}
      <Footer />
    </div>
  );
}
