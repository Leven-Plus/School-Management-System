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

const SchoolDepartments = [
  "Account",
  "Hostel",
  "Library",
  "Maintanance",
  "Mangement",
  "Security",
  "Teaching",
  "Transport",
  "Other",
];

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function AttendanceRegister(props: { tableData: any; tableName?: string }) {
  const { tableData: tableDataMain, tableName } = props;
  const [, setData] = useState([]);
  const [page] = useState(1);
  const [perPagex, setPerPage] = useState(
    Math.round(getWindowDimensions()?.height - 390 / 64)
  );
  const [, setTotalPage] = useState(0);

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
        "w-full h-max sm:overflow-auto rounded-xl bg-white dark:bg-navy-800 p-5 mb-5 border-0"
      }
    >
      <header className="mb-5">
        <div className="relative flex items-center justify-between pt-4">
          <div></div>
          <h1 className="text-2xl text-center font-semibold dark:text-white pl-2">
            P.P Savani School
          </h1>
          <CardMenu />
        </div>
        <div className="relative flex items-center justify-between pt-4">
          <p className="w-[250px] font-bold">Disc Code :</p>
          <h2 className="text-2xl text-center font-bold dark:text-white pl-2">
            {tableName ? tableName : "Table"}
          </h2>
          <p className="w-[250px] font-bold flex flex-row-reverse">
            <span>: School Code</span>
            <span></span>
          </p>
        </div>
        <div className="relative flex items-center justify-between pt-4">
          <p className="w-[250px] font-bold">
            Todays Date : {new Date().toDateString()}
          </p>
          <p className="w-[350px] text-center font-bold">
            Thu Mar 13 2023 - Thu Mar 13 2023
          </p>
          <p className="w-[250px] font-bold flex flex-row-reverse">
            <span>All : Department</span>
          </p>
        </div>
      </header>

      <Table tableExtras="w-full">
        <THeade>
          <Tr>
            <Th>S No.</Th>
            <Th>Employee ID</Th>
            <Th>Employee Name</Th>
            <Th>Department</Th>
            <Th>Designation</Th>
            <Th>Attendance</Th>
            <Th>Time</Th>
          </Tr>
        </THeade>

        <TBody>
          {SchoolDepartments?.map((r: any, r_i: number) => {
            return (
              <Tr extras="" key={r}>
                <Td>{r_i + 1}</Td>
                <Td>EMP{r_i * Math.random()}</Td>
                <Td>Mansi Singhaniya</Td>
                <Td>Teaching</Td>
                <Td>Teacher</Td>
                <Td>Present</Td>
                <Td>09:00 AM</Td>
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

export default AttendanceRegister;
