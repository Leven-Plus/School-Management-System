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
import {LuEye } from "react-icons/lu";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function PromotionDemotionList(props: { tableData: any; tableName?: string }) {
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
            <Th>Student ADMN</Th>
            <Th>Student Name</Th>
            <Th>Father Name</Th>
            <Th>Mother Name</Th>
            <Th>Old Class[Section]</Th>
            <Th>New Class[Section]</Th>
            <Th>Promotion/Demotion</Th>
            <Th>Date</Th>
            <Th>Reason</Th>
            <Th>Remark</Th>
            <Th>Updated By</Th>
            <Th>Updated Date</Th>
            <Th textalign={"center"}>View Application</Th>
          </Tr>
        </THeade>

        <TBody>
          {data.map((r: any, r_i: number) => {
            return (
              <Tr>
                <Td>{r_i + 1}</Td>
                <Td>STD{r_i + 1}</Td>
                <Td>sfddfdsfdsfd</Td>
                <Td>Ravi Italiya</Td>
                <Td>Lalitbhai Italiya</Td>
                <Td>Jemishaben Italiya</Td>
                <Td>Class 6-[A]</Td>
                <Td>{r_i <= 4 ? `Class 7-[A]` : `class 6-[A]`}</Td>
                <Td>
                  {r_i <= 4 ? (
                    <div className="bg-green-500 dark:bg-green-400 rounded-lg px-3 py-2 text-xs font-bold uppercase text-white transition duration-200 text-center inline">
                      Promoted
                    </div>
                  ) : (
                    <div className="bg-red-500 dark:bg-red-400 rounded-lg px-3 py-2 text-xs font-bold uppercase text-white transition duration-200 text-center inline">
                      Demoted
                    </div>
                  )}
                </Td>
                <Td>11-11-1111</Td>
                <Td>XYZZZZZ</Td>
                <Td>ABCSSS</Td>
                <Td>ravi@leven.plus</Td>
                <Td>11-11-1111</Td>
                <Td extras="flex gap-[10px] justify-center">
                  <Button
                    name={<LuEye />}
                    onCLick={() => console.log("clicked")}
                    style="green"
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

export default PromotionDemotionList;
