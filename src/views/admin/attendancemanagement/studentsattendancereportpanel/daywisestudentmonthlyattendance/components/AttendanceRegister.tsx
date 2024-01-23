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

function AttendanceRegister(props: { tableData?: any; tableName?: string }) {
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

  return (
    <Card
      extra={
        "w-full h-max sm:overflow-auto rounded-xl bg-white dark:bg-navy-800 p-5 mb-5 border-0 col-span-3"
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
          <p className="w-[250px] font-bold">Month-Year : Mar-23</p>
          <p className="w-[250px] font-bold flex flex-row-reverse">
            <span>Class 7-[A] : Class[Section]</span>
          </p>
        </div>
      </header>

      <Table tableExtras="w-full border-2">
        <THeade>
          <Tr extras="border-b-2">
            <Th textalign="center" extras="text-[0.7em] border-r-2 w-[2%] py-0 px-2">S No.</Th>
            <Th textalign="center" extras="text-[0.7em] border-r-2 w-[4%] py-0">Student ID</Th>
            <Th textalign="center" extras="text-[0.7em] border-r-2 w-[10%] py-0">Student Name</Th>
            <Th textalign="center" extras="text-[0.7em] border-r-2 w-[10%] py-0">Father Name</Th>
            <Th textalign="center" extras="text-[0.7em] border-r-2 py-0 w-[6%]">Class[Section]</Th>
            {Array(30)
              .fill("")
              .map((r: any, r_i: number) => {
                return <Th key={r} textalign="center" extras="text-[0.7em] border-r-2 py-0 w-[1.4%]">{r_i + 1}</Th>;
              })}
              <Th textalign="center" extras="text-[0.7em] border-r-2 py-0 w-[4%]">Total Present</Th>
              <Th textalign="center" extras="text-[0.7em] border-r-2 py-0 w-[4%]">Total Absent</Th>
              <Th textalign="center" extras="text-[0.7em] border-r-2 py-0 w-[4%]">Total Leave</Th>
              <Th textalign="center" extras="text-[0.7em] border-r-2 py-0 w-[4%]">Total Sunday</Th>
              <Th textalign="center" extras="text-[0.7em] border-r-2 py-0 w-[4%]">Total Holiday</Th>
              <Th textalign="center" extras="text-[0.7em] py-0 w-[4%]">Total Not Mark</Th>
          </Tr>
        </THeade>

        <TBody>
          {tableDataMain.map((r: any, r_i: number) => {
            return (
              <Tr key={r} extras="border-b-2">
                <Td extras="text-[0.8em] text-center border-r-2">{r_i + 1}</Td>
                <Td extras="text-[0.8em] text-center border-r-2">
                  SFTIDRFID{r_i + 1}
                </Td>
                <Td extras="text-[0.8em] text-center border-r-2">
                  Yogesh Maurya
                </Td>
                <Td extras="text-[0.8em] text-center border-r-2">
                  Dilip Maurya
                </Td>
                <Td extras="text-[0.8em] text-center border-r-2">
                  Class 7-[A]
                </Td>
                {Array(30)
                  .fill("")
                  .map((r: any, r_i: number) => {
                    if (
                      r_i + 1 === 6 ||
                      r_i + 1 === 7 ||
                      r_i + 1 === 4 ||
                      r_i + 1 === 5 ||
                      r_i + 1 === 11 ||
                      r_i + 1 === 12 ||
                      r_i + 1 === 18 ||
                      r_i + 1 === 19 ||
                      r_i + 1 === 25 ||
                      r_i + 1 === 26
                    ) {
                      return (
                        <Td key={r} extras="text-[0.8em] text-center border-r-2 text-green-500 font-semibold">
                          P
                        </Td>
                      );
                    }
                    if (r_i + 1 === 1) {
                      return (
                        <Td extras="text-[0.8em] text-center border-r-2 text-red-500 font-semibold">
                          A
                        </Td>
                      );
                    }
                    if (r_i + 1 === 2) {
                      return (
                        <Td extras="text-[0.8em] text-center border-r-2 text-yellow-500 font-semibold">
                          L
                        </Td>
                      );
                    }
                    if (
                      r_i + 1 === 3 ||
                      r_i + 1 === 10 ||
                      r_i + 1 === 17 ||
                      r_i + 1 === 24
                    ) {
                      return (
                        <Td extras="text-[0.8em] text-center border-r-2 text-blue-500 font-semibold">
                          S
                        </Td>
                      );
                    }
                    if (
                      r_i + 1 === 8 ||
                      r_i + 1 === 9 ||
                      r_i + 1 === 15 ||
                      r_i + 1 === 16 ||
                      r_i + 1 === 22 ||
                      r_i + 1 === 23 ||
                      r_i + 1 === 29 ||
                      r_i + 1 === 30
                    ) {
                      return (
                        <Td extras="text-[0.8em] text-center border-r-2 text-gray-500 font-semibold">
                          H
                        </Td>
                      );
                    }
                    else {
                      return (
                        <Td extras="text-[0.8em] text-center border-r-2 font-semibold">
                          N
                        </Td>
                      );
                    }
                  })}
                <Td extras="text-[0.8em] text-center border-r-2">10</Td>
                <Td extras="text-[0.8em] text-center border-r-2">1</Td>
                <Td extras="text-[0.8em] text-center border-r-2">1</Td>
                <Td extras="text-[0.8em] text-center border-r-2">4</Td>
                <Td extras="text-[0.8em] text-center border-r-2">8</Td>
                <Td extras="text-[0.8em] text-center">6</Td>
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
