import Loading from "../common/loading/Loading";
import useFetch from "../../hooks/useFetch";
import { useEffect, useState } from "react";
import { Table, Anchor } from "@mantine/core";

export default function Detail() {
  const [contar, setContar] = useState(0);
  const { isLoading, data, getFetch } = useFetch();
  const rows = data.map((Data) => {
    return (
      <Table.Tr key={Data.id_employee}>
        <Table.Td>
          <Anchor component="button" fz="sm">
            {Data.id_employee}
          </Anchor>
        </Table.Td>
        <Table.Td>{Data.user_name}</Table.Td>
        <Table.Td>
          <Anchor component="button" fz="sm">
            {Data.user_type}
          </Anchor>
        </Table.Td>
      </Table.Tr>
    );
  });
  // console.log(getFetch());
  useEffect(() => {
    if (!getFetch()) {
      <Loading />;
    } else {
      getFetch();
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
                  <Table.Th>Empleado</Table.Th>
                  <Table.Th>Puesto</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>{rows}</Table.Tbody>
            </Table>
          </Table.ScrollContainer>
        </div>
      )}
    </>
  );
}
