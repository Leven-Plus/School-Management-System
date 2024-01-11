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
import { LuPencil, LuPrinter, LuTrash2 } from "react-icons/lu";
import "./admissionlist.css"

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function AdmissionList(props: { tableData: any; tableName?: string }) {
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
            <Th>Student Rating</Th>
            <Th>Student ID</Th>
            <Th>ADM Number</Th>
            <Th>Student Name</Th>
            <Th>Father Name</Th>
            <Th>Mother Name</Th>
            <Th>Class[Section]</Th>
            <Th>Student DOB</Th>
            <Th>Gender</Th>
            <Th>Contact No</Th>
            <Th>Admission Date</Th>
            <Th>Updated By</Th>
            <Th>Update Date</Th>
            <Th textalign="center">Student Status</Th>
            <Th textalign={"center"}>Actions</Th>
          </Tr>
        </THeade>

        <TBody>
          {data.map((r: any, r_i: number) => {
            return (
              <Tr>
                <Td>{r_i + 1}</Td>
                <Td>
                  {/* A+ */}
                  <div className={`admissionRating`}>
                    <input type="radio" id={`${r_i}5`} name={`admissionRating${r_i}`} value="5" />
                    <label htmlFor={`${r_i}5`}></label>
                    <input type="radio" id={`${r_i}4`} name={`admissionRating${r_i}`} value="4" />
                    <label htmlFor={`${r_i}4`}></label>
                    <input type="radio" id={`${r_i}3`} name={`admissionRating${r_i}`} value="3" />
                    <label htmlFor={`${r_i}3`}></label>
                    <input type="radio" id={`${r_i}2`} name={`admissionRating${r_i}`} value="2" />
                    <label htmlFor={`${r_i}2`}></label>
                    <input type="radio" id={`${r_i}1`} name={`admissionRating${r_i}`} value="1" />
                    <label htmlFor={`${r_i}1`}></label>
                  </div>
                </Td>
                <Td>STD{r_i + 1}</Td>
                <Td>23424234</Td>
                <Td>Kishan Sutariya</Td>
                <Td>JiteshBhai Sutariya</Td>
                <Td>Gitaben Sutariya</Td>
                <Td>6-[1]</Td>
                <Td>12-21-2222</Td>
                <Td>Male</Td>
                <Td>343434343</Td>
                <Td>11-11-1111</Td>
                <Td>xyz@gmail.com</Td>
                <Td>11-11-1111</Td>
                <Td extras="text-center">
                  <div className="bg-green-500 dark:bg-green-800 rounded-lg px-3 py-2 text-xs font-bold uppercase text-white transition duration-200 inline text-center">
                    Active
                  </div>
                </Td>
                <Td extras="flex gap-[10px] justify-center">
                  <Button
                    name={<LuPencil />}
                    onCLick={() => console.log("clicked")}
                    style="yellow"
                    extras=""
                  />
                  <Button
                    name={<LuPrinter />}
                    onCLick={() => console.log("clicked")}
                    style="blue"
                    extras=""
                  />
                  <Button
                    name={<LuTrash2 />}
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

export default AdmissionList;
