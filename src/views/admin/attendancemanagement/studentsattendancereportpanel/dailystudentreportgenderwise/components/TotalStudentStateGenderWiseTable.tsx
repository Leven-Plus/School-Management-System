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

// const ClassesInfo = [
//   "PRE SCHOOL",
//   "NURSERY",
//   "LKG",
//   "UKG",
//   "1ST [A,B]",
//   "2ND [A,B,C,D]",
//   "3RD [A,B,C]",
//   "4TH [A]",
//   "5TH [A,B]",
//   "6TH [A]",
//   "7TH [A,B]",
//   "8TH [A,B,C]",
//   "9TH [A,B,C,D]",
//   "10TH [A]",
//   "11TH [A,B,C,D,E]",
//   "12TH [A,B,C,D,E,F]",
// ];

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function TotalStudentStateGenderWiseTable(props: {
  tableData?: any;
  tableName?: string;
}) {
  const { tableData: tableDataMain, tableName } = props;
  const [, setData] = useState([]);
  const [page, ] = useState(1);
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
          <h1 className="text-2xl font-semibold dark:text-white pl-2">
            P.P Savani School
          </h1>
          <CardMenu />
        </div>
        <div className="relative flex items-center justify-between pt-4">
          <p className="w-[250px] font-bold">Disc Code :</p>
          <h2 className="text-2xl font-bold dark:text-white pl-2">
            {tableName ? tableName : "Table"}
          </h2>
          <p className="w-[250px] font-bold flex flex-row-reverse">
            <span>: School Code</span>
            <span></span>
          </p>
        </div>
        <div className="relative flex items-center justify-between pt-4">
          <p className="w-[250px] font-bold">Todays Date : {new Date().toDateString()}</p>
          <p className="w-[250px] font-bold">Register Date : Thu Mar 13 2023</p>
          <p className="w-[250px] font-bold flex flex-row-reverse">
            <span>Class 9-[A] : Class[Section]</span>
          </p>
        </div>
      </header>

      <Table tableExtras="w-full">
        <THeade>
          <Tr>
            <Th textalign="center" extras="border-x-2 bg-gray-200">
              S No.
            </Th>
            <Th textalign="center" extras="bg-gray-200">Class[Section]</Th>
            <Th textalign="center" extras="bg-gray-200">Male / Female</Th>
            <Th textalign="center bg-blue-200">Total Student</Th>
            <Th textalign="center bg-green-200">Total Present</Th>
            <Th textalign="center bg-orange-200">Total Leave</Th>
            <Th textalign="center bg-red-200">Total Absent</Th>
            <Th textalign="center bg-cyan-200">Total Sunday</Th>
            <Th textalign="center bg-indigo-200">Total Holiday</Th>
            <Th textalign="center bg-purple-200">Not Mark</Th>
          </Tr>
        </THeade>

        <TBody>
          <Tr>
            <Td extras="text-center border-x-2 border-b-2">1</Td>
            <Td extras="border-r-2 text-center border-b-2">Class 9-[A]</Td>
            <Td extras="border-r-2 text-center border-b-2">Male</Td>
            <Td extras="border-r-2 text-center bg-blue-100">100</Td>
            <Td extras="border-r-2 text-center bg-green-100">50</Td>
            <Td extras="border-r-2 text-center bg-orange-100">10</Td>
            <Td extras="border-r-2 text-center bg-red-100">20</Td>
            <Td extras="border-r-2 text-center bg-cyan-100">20</Td>
            <Td extras="border-r-2 text-center bg-indigo-100">20</Td>
            <Td extras="text-center bg-purple-100">20</Td>
          </Tr>
          <Tr>
            <Td extras="text-center border-x-2 border-b-2">1</Td>
            <Td extras="border-r-2 text-center border-b-2">Class 9-[A]</Td>
            <Td extras="border-r-2 text-center border-b-2">Female</Td>
            <Td extras="border-r-2 text-center bg-blue-100">100</Td>
            <Td extras="border-r-2 text-center bg-green-100">50</Td>
            <Td extras="border-r-2 text-center bg-orange-100">10</Td>
            <Td extras="border-r-2 text-center bg-red-100">20</Td>
            <Td extras="border-r-2 text-center bg-cyan-100">20</Td>
            <Td extras="border-r-2 text-center bg-indigo-100">20</Td>
            <Td extras="text-center bg-purple-100">20</Td>
          </Tr>
          <Tr extras="border-b-2">
            <Td extras="text-center border-l-2">Total</Td>
            <Td extras="text-center">{""}</Td>
            <Td extras="border-r-2 text-center">=</Td>
            <Td extras="border-r-2 text-center bg-blue-100">200</Td>
            <Td extras="border-r-2 text-center bg-green-100">100</Td>
            <Td extras="border-r-2 text-center bg-orange-100">20</Td>
            <Td extras="border-r-2 text-center bg-red-100">40</Td>
            <Td extras="border-r-2 text-center bg-cyan-100">40</Td>
            <Td extras="border-r-2 text-center bg-indigo-100">40</Td>
            <Td extras="text-center bg-purple-100">40</Td>
          </Tr>
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

export default TotalStudentStateGenderWiseTable;
