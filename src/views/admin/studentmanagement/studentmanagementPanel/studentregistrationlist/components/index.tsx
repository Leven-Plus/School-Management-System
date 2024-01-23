import { useEffect, useState } from "react";
import CardMenu from "../../../../../../components/card/CardMenu";
import Card from "../../../../../../components/card";
import { Pagenation, TBody, THeade, Table, Td, Th, Tr } from "../../../../../../components/table/Table";
import Spinner from "../../../../../../components/spinner/spinner";
import Button from "../../../../../../components/button/Button";
import { LuCheck, LuPencil, LuPrinter, LuTrash2 } from "react-icons/lu";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

function RegistrationList(props: { tableData: any; tableName?: string }) {
  const { tableData: tableDataMain, tableName } = props;
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [perPagex, setPerPage] = useState(Math.round((getWindowDimensions()?.height - 390 / 64)));
  const [totalPagex, setTotalPage] = useState(0);

 const [loadOrders, setLoadOrders] = useState(false);

  useEffect(() => {

    setTotalPage(Math.ceil(tableDataMain?.length / perPagex))
    
    setLoadOrders(true);

    setData([]);

    setTimeout(() => {

      setData(tableDataMain.slice(perPagex * (page - 1), perPagex * page));
      setLoadOrders(false);

    }, 100);


  }, [page]);

  useEffect(() => {

    setPerPage(Math.round((getWindowDimensions()?.height - 390) / 64))
    
    window.addEventListener("resize", () => setPerPage(Math.round((getWindowDimensions()?.height - 390) / 64)))
    
    return () => window.removeEventListener("resize", () => setPerPage(Math.round((getWindowDimensions()?.height - 390) / 64)))
    
  },[])
  
  useEffect(() => {

    setTotalPage(Math.ceil(tableDataMain?.length / perPagex))

    setLoadOrders(true);

    setData([]);

    setTimeout(() => {

      setData(tableDataMain.slice(perPagex * (page - 1), perPagex * page));
      setLoadOrders(false);

    }, 100);

  }, [perPagex])

  console.log(perPagex);
  

  return (
    <Card extra={"w-full h-[84vh] sm:overflow-auto rounded-xl bg-white dark:bg-navy-800 px-5 mb-5 border-0"}>
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
            <Th>Registration No.</Th>
            <Th>Registration Date</Th>
            <Th>Student Name</Th>
            <Th>Student Gender</Th>
            <Th>Father Name</Th>
            <Th>Mother Name</Th>
            <Th>Class[Section]</Th>
            <Th>Student DOB</Th>
            <Th>Contact No.</Th>
            <Th>Registered By</Th>
            <Th>Registered Date</Th>
            <Th textalign={"center"}>Actions</Th>
          </Tr>
        </THeade>

        <TBody>
          {data.map((r:any, r_i: number) => {
            return (
              <Tr key={r}>
                <Td>
                  {r_i + 1}
                </Td>
                <Td>
                  STD{r_i + 1}
                </Td>
                <Td>
                  sfddfdsfdsfd
                </Td>
                <Td>
                  29-09-2004
                </Td>
                <Td>
                  Darshan Patel
                </Td>
                <Td>
                  Male
                </Td>
                <Td>
                  Sureshbhai Patel
                </Td>
                <Td>
                  Shardaben Patel
                </Td>
                <Td>
                  Class 6-[A]
                </Td>
                <Td>
                  29=09-2004
                </Td>
                <Td>
                  9999999999
                </Td>
                <Td>
                  darshan@leven.plus
                </Td>
                <Td>
                  29-09-2004
                </Td>
                <Td extras="flex gap-[10px] justify-center">
                  <Button name={<LuCheck/>} onCLick={() => console.log("clicked")} style="green" extras="" />
                  <Button name={<LuPencil/>} onCLick={() => console.log("clicked")} style="yellow" extras="" />
                  <Button name={<LuPrinter/>} onCLick={() => console.log("clicked")} style="blue" extras="" />
                  <Button name={<LuTrash2/>} onCLick={() => console.log("clicked")} style="red" extras="" />
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

export default RegistrationList;
