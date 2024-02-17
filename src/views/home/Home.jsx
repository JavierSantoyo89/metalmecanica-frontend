import Loading from "../../components/common/loading/Loading";
import Head from "../../components/parcial/head/Head";
import Footer from "../../components/parcial/footer/Footer";
// import useFetch from "../../hooks/useFetch";
import { useEffect } from "react";
//**************************** Home *****************************/
//************************* landing page ************************/
// const getFetch = async () => {

//   try {
//     const response = await fetch(
//       "https://backendportfolio-r0uf.onrender.com/metalmecanica/employee/detailall"
//     );
//     const data = await response.json();
//     console.log(data);

//   } catch (error) {

//     console.log(error);
//   }
// }
// const fetchData = await getFetch()
export default function Home() {
  // const getFetch = useFetch();

  useEffect(() => {
    const getFetch = async () => {
      try {
        const response = await fetch(
          "https://backendportfolio-r0uf.onrender.com/metalmecanica/employee/detailall"
        );
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    getFetch();
  }, []);

  return (
    <div>
      <Head />
      Home
      <br></br>
      <Loading />
      <div></div>
      <Footer />
    </div>
  );
}
