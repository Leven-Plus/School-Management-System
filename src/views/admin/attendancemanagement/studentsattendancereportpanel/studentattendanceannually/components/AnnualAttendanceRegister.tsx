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

function AnnualAttendanceRegister(props: {
  fieldData: any;
  tableData: any;
  tableName?: string;
}) {
  const { tableData: tableDataMain, tableName, fieldData } = props;
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

  const tableWidth = Object.values(fieldData).filter((x) => {
    return x === true;
  });

  return (
    <Card
      extra={
        "w-full h-max sm:overflow-auto rounded-xl bg-white dark:bg-navy-800 p-5 mb-5 border-0"
      }
    >
      <header className="relative flex items-center justify-between">
        <h2 className="text-2xl font-bold dark:text-white">
          {tableName ? tableName : "Table"}
        </h2>
        <CardMenu />
      </header>

      <Table tableExtras={tableWidth?.length > 4 ? `w-[100vw]` : `w-full`}>
        <THeade>
          <Tr>
            <Th>S No.</Th>
            <Th>Student ID</Th>
            <Th>Student Name</Th>
            <Th>Class[Section]</Th>
            {Object.keys(fieldData).map((key, index) => {
              if (fieldData[key]) {
                return <Th key={index} textalign="center" extras="">{key}</Th>;
              }
            })}
            <Th textalign="center">Total Days Present</Th>
            <Th textalign="center">Total Working Days</Th>
            <Th textalign="center">%</Th>
          </Tr>
        </THeade>

        <TBody>
          {tableDataMain.map((r: any, r_i: number) => {
            return (
              <Tr  key={r}>
                <Td>{r_i + 1}</Td>
                <Td>SFTIDSTD{r_i + 1}</Td>
                <Td>Yogesh Maurya</Td>
                <Td>Class 3-[A]</Td>
                {Object.keys(fieldData).map((key, index) => {
                  if (fieldData[key]) {
                    return (
                      <Td key={index} extras="text-center">
                       23
                      </Td>
                    );
                  }
                })}
                <Td extras="text-center">
                {tableWidth?.length * 23}
                </Td>
                <Td extras="text-center">
                {tableWidth?.length * 24}
                </Td>
                <Td extras="text-center">
                  {Math.round((tableWidth?.length * 23) / (tableWidth?.length * 24) * 100)}%
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
    </Card>
  );
}

export default AnnualAttendanceRegister;
