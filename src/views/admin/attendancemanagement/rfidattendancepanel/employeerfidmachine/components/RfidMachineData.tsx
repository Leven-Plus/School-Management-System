import { useEffect, useState } from "react";
import CardMenu from "../../../../../../components/card/CardMenu";
import Card from "../../../../../../components/card";
import {
  TBody,
  THeade,
  Table,
  Td,
  Th,
  Tr,
} from "../../../../../../components/table/Table";
import Spinner from "../../../../../../components/spinner/spinner";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function RfidMachineData(props: { tableData: any; tableName?: string }) {
  const { tableData: tableDataMain, tableName } = props;
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [perPagex, setPerPage] = useState(
    Math.round(getWindowDimensions()?.height - 390 / 64)
  );
  const [totalPagex, setTotalPage] = useState(0);

  const [loadOrders, setLoadOrders] = useState(false);

  useEffect(() => {
    setTotalPage(Math.ceil(tableDataMain?.length / perPagex));

    setLoadOrders(true);

    setData([]);

    setTimeout(() => {
      setData(tableDataMain.slice(perPagex * (page - 1), perPagex * page));
      setLoadOrders(false);
    }, 100);
  }, [page]);

  useEffect(() => {
    setPerPage(Math.round((getWindowDimensions()?.height - 390) / 64));

    window.addEventListener("resize", () =>
      setPerPage(Math.round((getWindowDimensions()?.height - 390) / 64))
    );

    return () =>
      window.removeEventListener("resize", () =>
        setPerPage(Math.round((getWindowDimensions()?.height - 390) / 64))
      );
  }, []);

  useEffect(() => {
    setTotalPage(Math.ceil(tableDataMain?.length / perPagex));

    setLoadOrders(true);

    setData([]);

    setTimeout(() => {
      setData(tableDataMain.slice(perPagex * (page - 1), perPagex * page));
      setLoadOrders(false);
    }, 100);
  }, [perPagex]);

  console.log(perPagex);

  return (
    <Card
      extra={
        "w-full h-max sm:overflow-auto rounded-xl bg-white dark:bg-navy-800 p-5 mb-5 border-0 col-span-3"
      }
    >
      <header className="relative flex items-center justify-between">
        <h2 className="text-2xl font-bold dark:text-white">
          {tableName ? tableName : "Table"}
        </h2>
        <CardMenu />
      </header>

      <Table tableExtras="w-full">
        <THeade>
          <Tr>
            <Th>S No.</Th>
            <Th>RFID Number</Th>
            <Th>Employee Name</Th>
            <Th>Department</Th>
            <Th>Designation</Th>
            <Th>Entry</Th>
            <Th>Exit</Th>
          </Tr>
        </THeade>

        <TBody>
          {tableDataMain.map((r: any, r_i: number) => {
            return (
              <Tr extras="border-b-2">
                <Td extras="pl-3">{r_i + 1}</Td>
                <Td>EMPRFID{r_i + 1}</Td>
                <Td>Satish Katheriya</Td>
                <Td>Management</Td>
                <Td>Admin Head</Td>
                <Td>{new Date().toString()}</Td>
                <Td>{new Date().toString()}</Td>
              </Tr>
            );
          })}
        </TBody>
      </Table>

      {loadOrders && (
        <div className="h-[500px] w-full flex">
          <Spinner />
        </div>
      )}
    </Card>
  );
}

export default RfidMachineData;
