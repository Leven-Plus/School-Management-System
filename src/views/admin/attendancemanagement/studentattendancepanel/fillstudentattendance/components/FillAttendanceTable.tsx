import { useEffect, useState } from "react";
import Card from "../../../../../../components/card";
import CardMenu from "../../../../../../components/card/CardMenu";
import {
  TBody,
  THeade,
  Table,
  Td,
  Th,
  Tr,
} from "../../../../../../components/table/Table";
import Spinner from "../../../../../../components/spinner/spinner";
import { Select } from "@chakra-ui/react";
import Checkbox from "../../../../../../components/checkbox";

type ClassObj = {
  ClassName: string;
  ClassStrength: number;
  BoysStrength: number;
  GirlsStrength: number;
};

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function FillAttendanceTable(props: {
  tableData: any;
  tableName?: string | ClassObj;
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

  return (
    <Card
      extra={
        "w-full h-fit sm:overflow-auto rounded-xl bg-white dark:bg-navy-800 px-5 mb-5 border-0"
      }
    >
      <header className="relative flex items-center justify-between pt-4">
        <h2 className="text-2xl font-semibold dark:text-white mb-5">
          {typeof tableName !== "string" ? (
            <div className="w-[55em] flex justify-between items-center">
              <span className="">{tableName?.ClassName} Attendance Register</span> 
              <span className="">
                Class Strength : {tableName?.ClassStrength}
              </span>
              <span className="">
                Boys Strength : {tableName?.BoysStrength}
              </span>
              <span className="">
                Girls Strength : {tableName?.GirlsStrength}
              </span>
            </div>
          ) : (
            <></>
          )}
        </h2>
        <CardMenu />
      </header>

      <Table tableExtras="w-full">
        <THeade>
          <Tr>
            <Th>S No.</Th>
            <Th>Student ID</Th>
            <Th>Class Roll No.</Th>
            <Th>Student Name</Th>
            <Th>Father Name</Th>
            <Th>Student Attendance</Th>
            <Th>Filled Attendance</Th>
            <Th>Class[Section]</Th>
            <Th>Contact No.</Th>
            <Th textalign={"center"}>Actions</Th>
          </Tr>
        </THeade>

        <TBody>
          {tableDataMain.map((r: any, r_i: number) => {
            return (
              <Tr key={r}>
                <Td>{r_i + 1}</Td>
                <Td>SFTIDSTD{r_i + 1}</Td>
                <Td>{r_i}</Td>
                <Td>Yogesh Maurya</Td>
                <Td>Gautambhai Maurya</Td>
                <Td><Select>
                    <option value="Present">Present</option>
                    </Select></Td>
                <Td>{""}</Td>
                <Td>Class 9-[A]</Td>
                <Td>9998899988</Td>
                <Td extras="flex gap-[10px] justify-center items-center">
                  <Checkbox id={`${r_i}std`} /><label htmlFor={`${r_i}std`}>Select Student</label>
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

export default FillAttendanceTable;
