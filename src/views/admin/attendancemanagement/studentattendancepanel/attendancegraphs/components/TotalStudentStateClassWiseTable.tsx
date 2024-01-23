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

const ClassesInfo = [
  "PRE SCHOOL",
  "NURSERY",
  "LKG",
  "UKG",
  "1ST [A,B]",
  "2ND [A,B,C,D]",
  "3RD [A,B,C]",
  "4TH [A]",
  "5TH [A,B]",
  "6TH [A]",
  "7TH [A,B]",
  "8TH [A,B,C]",
  "9TH [A,B,C,D]",
  "10TH [A]",
  "11TH [A,B,C,D,E]",
  "12TH [A,B,C,D,E,F]",
]

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function TotalStudentStateClassWiseTable(props: { tableData: any; tableName?: string }) {
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
        "w-full h-max sm:overflow-auto rounded-xl bg-white dark:bg-navy-800 px-5 mb-5 border-0"
      }
    >
      <header className="relative flex items-center justify-between pt-4 mb-5">
        <h2 className="text-2xl font-bold dark:text-white">
          {tableName ? tableName : "Table"}
        </h2>
        <CardMenu />
      </header>

      <Table tableExtras="w-full">
        <THeade>
          <Tr>
            <Th textalign="center" extras="border-x-2 bg-gray-200">S No.</Th>
            <Th textalign="center bg-gray-200">Class[Section]</Th>
            <Th textalign="center bg-blue-200">Total Student</Th>
            <Th textalign="center bg-green-200">Total Present</Th>
            <Th textalign="center bg-orange-200">Total Leave</Th>
            <Th textalign="center bg-red-200">Total Absent</Th>
            <Th textalign="center bg-purple-200">Not Mark</Th>
          </Tr>
        </THeade>

        <TBody>
          {ClassesInfo?.map((r: any, r_i: number) => {
            return (
              <Tr>
                <Td extras="text-center border-x-2">{r_i + 1}</Td>
                <Td extras="border-r-2 text-center">{r}</Td>
                <Td extras="border-r-2 text-center bg-blue-100">100</Td>
                <Td extras="border-r-2 text-center bg-green-100">50</Td>
                <Td extras="border-r-2 text-center bg-orange-100">10</Td>
                <Td extras="border-r-2 text-center bg-red-100">20</Td>
                <Td extras="text-center bg-purple-100">20</Td>
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

export default TotalStudentStateClassWiseTable;
 