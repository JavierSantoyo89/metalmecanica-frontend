import { useEffect, useState } from "react";
import Loading from "../common/loading/Loading";
import useFetch from "../../hooks/useFetch";
import { Table } from "@mantine/core";
export default function Stadistics() {
  const [contar, setContar] = useState(0);
  const { isLoading, data, getFetch } = useFetch();
  const rows = data.map((Data) => {
    return (
      <Table.Tr key={Data.id_employee}>
        <Table.Td>{Data.id_stadistics}</Table.Td>
        <Table.Td>{Data.status}</Table.Td>
        <Table.Td>{Data.crud}</Table.Td>
        <Table.Td>{Data.table}</Table.Td>
        <Table.Td>{Data.project}</Table.Td>
        <Table.Td>{Data.datetime}</Table.Td>
        <Table.Td>
          <button
            onClick={() => console.log(Data.id_stadistics)}
            value={Data.id_employee}
          >
            Detail
          </button>
        </Table.Td>
      </Table.Tr>
    );
  });
  // console.log(getFetch());
  useEffect(() => {
    if (!getFetch()) {
      <Loading />;
    } else {
      getFetch("/stadistics");
    }
  }, []);

  setTimeout(() => {
    setContar(contar + 1);
  }, 1000);

  return (
    <>
      <h1>Detail</h1>
      <p>Tiempo: {contar} seg.</p>
      {/* //* If isLoading === true, show Loading component else show table //*/}
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <h3>empleados</h3>
          <Table.ScrollContainer minWidth={100}>
            <Table verticalSpacing="xs">
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Id</Table.Th>
                  <Table.Th>Status</Table.Th>
                  <Table.Th>CRUD</Table.Th>
                  <Table.Th>Table</Table.Th>
                  <Table.Th>Proyect</Table.Th>
                  <Table.Th>Date</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody key={data.id_stadistics}>{rows}</Table.Tbody>
            </Table>
          </Table.ScrollContainer>
        </div>
      )}
    </>
  );
}
