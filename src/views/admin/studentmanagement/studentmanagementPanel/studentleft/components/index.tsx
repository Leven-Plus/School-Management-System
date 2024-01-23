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
import {LuTrash2 } from "react-icons/lu";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function StudentLeftList(props: { tableData: any; tableName?: string }) {
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

      <Table tableExtras="w-[120vw]">
        <THeade>
          <Tr>
            <Th>S No.</Th>
            <Th>Student ID</Th>
            <Th>Admission No.</Th>
            <Th>Registration No.</Th>
            <Th>Scholar No.</Th>
            <Th>Student Name</Th>
            <Th>Father Name</Th>
            <Th>Mother Name</Th>
            <Th>Studen Class[Section]</Th>
            <Th>Student DOB</Th>
            <Th>Student Gender</Th>
            <Th>Contact No.</Th>
            <Th>Admission Date</Th>
            <Th>Left Date</Th>
            <Th>Left Remark</Th>
            <Th textalign={"center"}>Actions</Th>
          </Tr>
        </THeade>

        <TBody>
          {data.map((r: any, r_i: number) => {
            return (
              <Tr key={r}>
                <Td>{r_i + 1}</Td>
                <Td>STD{r_i + 1}</Td>
                <Td>STD{r_i + 1}</Td>
                <Td>STD{r_i + 1}</Td>
                <Td>{r_i + 1}</Td>
                <Td>Ravi Italiya</Td>
                <Td>Lalitbhai Italiya</Td>
                <Td>Jemishaben Italiya</Td>
                <Td>Class 6-[A]</Td>
                <Td>11-11-1111</Td>
                <Td>
                  Male
                </Td>
                <Td>9898899999</Td>
                <Td>11-11-1111</Td>
                <Td>11-11-1111</Td>
                <Td>N/A</Td>
                <Td extras="flex gap-[10px] justify-center">
                  <Button
                    name={"Rejoin"}
                    onCLick={() => console.log("clicked")}
                    style="green"
                    extras=""
                  />
                  <Button
                    name={<LuTrash2/>}
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

export default StudentLeftList;
