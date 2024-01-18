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
import Button from "../../../../../../components/button/Button";
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

  return (
    <Card
      extra={
        "w-full h-max sm:overflow-auto rounded-xl bg-white dark:bg-navy-800 p-5 mb-5 border-0"
      }
    >
      <header className="relative flex items-center justify-between pt-4">
        <h2 className="text-2xl font-semibold dark:text-white mb-5">
            Employee Attendance Register
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
            <Th>Employee Attendance</Th>
            <Th>Attendance Filled</Th>
          </Tr>
        </THeade>

        <TBody>
          {tableDataMain.map((r: any, r_i: number) => {
            return (
              <Tr>
                <Td>{r_i + 1}</Td>
                <Td>EMP23{r_i + 1}</Td>
                <Td>Jatin Patel</Td>
                <Td>Teaching</Td>
                <Td>Teacher</Td>
                <Td><Select>
                    <option value="Present">Present</option>
                    </Select></Td>
                <Td>{""}</Td>
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
