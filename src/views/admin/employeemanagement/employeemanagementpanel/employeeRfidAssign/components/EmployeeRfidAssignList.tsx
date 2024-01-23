import { useEffect, useState } from "react";
import CardMenu from "../../../../../../components/card/CardMenu";
import Card from "../../../../../../components/card";
import {
  Pagenation,
  TBody,
  THeade,
  Table,
  Td,
  Th,
  Tr,
} from "../../../../../../components/table/Table";
import Spinner from "../../../../../../components/spinner/spinner";
import Button from "../../../../../../components/button/Button";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function EmployeeRfidAssignList(props: { tableData: any; tableName?: string }) {
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
        "w-full h-[84vh] sm:overflow-auto rounded-xl bg-white dark:bg-navy-800 px-5 mb-5 border-0"
      }
    >
      <header className="relative flex items-center justify-between pt-4">
        <h2 className="text-2xl font-bold dark:text-white">
          {tableName ? tableName : "Table"}
        </h2>
        <CardMenu />
      </header>

      <Table tableExtras="w-full">
        <THeade>
          <Tr>
            <Th>S No.</Th>
            <Th>Employee ID</Th>
            <Th>Employee Name</Th>
            <Th>Department</Th>
            <Th>Designation</Th>
            <Th>RFID Number</Th>
            <Th textalign={"center"}>Actions</Th>
          </Tr>
        </THeade>

        <TBody>
          {data.map((r: any, r_i: number) => {
            return (
              <Tr key={r}>
                <Td>{r_i + 1}</Td>
                <Td>EMP{r_i + 1}</Td>
                <Td>Jatin Lathiya</Td>
                <Td>Accounts</Td>
                <Td>Accountant</Td>
                <Td>23232323</Td>
                <Td extras="flex gap-[10px] justify-center">
                  <Button
                    name={<span>Assign RFID</span>}
                    onCLick={() => console.log("clicked")}
                    style="green"
                    extras=""
                  />
                  <Button
                    name={<span>Delete</span>}
                    onCLick={() => console.log("clicked")}
                    style="red"
                    extras=""
                  />
                </Td>
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

      <Pagenation
        totalPage={totalPagex}
        currentPage={page}
        onChange={(e: number) => {
          setPage(e);
        }}
      />
    </Card>
  );
}

export default EmployeeRfidAssignList;
