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

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function StudentsParentBehaviourList(props: {
  tableData: any;
  tableName?: string;
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

      <Table tableExtras="w-full">
        <THeade>
          <Tr>
            <Th>S No.</Th>
            <Th>Software ID</Th>
            <Th>Student Name</Th>
            <Th>Father Name</Th>
            <Th>Mother Name</Th>
            <Th>Class[Section]</Th>
            <Th>Student Rating</Th>
            <Th>Student Behaviour</Th>
            <Th>Parents Rating</Th>
            <Th>Parents Behaviour</Th>
          </Tr>
        </THeade>

        <TBody>
          {data.map((r: any, r_i: number) => {
            return (
              <Tr key={r}>
                <Td>{r_i + 1}</Td>
                <Td>STD{r_i + 1}</Td>
                <Td>Arpan Patel</Td>
                <Td>Parthbhai Patel</Td>
                <Td>Nithishaben Patel</Td>
                <Td>Class 1-[A]</Td>
                <Td>
                  <div className={`admissionRating`}>
                    <input
                      type="radio"
                      id={`${r_i}5`}
                      name={`admissionRating${r_i}`}
                      value="5"
                    />
                    <label htmlFor={`${r_i}5`}></label>
                    <input
                      type="radio"
                      id={`${r_i}4`}
                      name={`admissionRating${r_i}`}
                      value="4"
                    />
                    <label htmlFor={`${r_i}4`}></label>
                    <input
                      type="radio"
                      id={`${r_i}3`}
                      name={`admissionRating${r_i}`}
                      value="3"
                    />
                    <label htmlFor={`${r_i}3`}></label>
                    <input
                      type="radio"
                      id={`${r_i}2`}
                      name={`admissionRating${r_i}`}
                      value="2"
                    />
                    <label htmlFor={`${r_i}2`}></label>
                    <input
                      type="radio"
                      id={`${r_i}1`}
                      name={`admissionRating${r_i}`}
                      value="1"
                    />
                    <label htmlFor={`${r_i}1`}></label>
                  </div>
                </Td>
                <Td>Average</Td>
                <Td>
                  <div className={`admissionRating`}>
                    <input
                      type="radio"
                      id={`${r_i}51`}
                      name={`parentsRating ${r_i}`}
                      value="5"
                    />
                    <label htmlFor={`${r_i}51`}></label>
                    <input
                      type="radio"
                      id={`${r_i}41`}
                      name={`parentsRating ${r_i}`}
                      value="4"
                    />
                    <label htmlFor={`${r_i}41`}></label>
                    <input
                      type="radio"
                      id={`${r_i}31`}
                      name={`parentsRating ${r_i}`}
                      value="3"
                    />
                    <label htmlFor={`${r_i}31`}></label>
                    <input
                      type="radio"
                      id={`${r_i}21`}
                      name={`parentsRating ${r_i}`}
                      value="2"
                    />
                    <label htmlFor={`${r_i}21`}></label>
                    <input
                      type="radio"
                      id={`${r_i}11`}
                      name={`parentsRating ${r_i}`}
                      value="1"
                    />
                    <label htmlFor={`${r_i}11`}></label>
                  </div>
                </Td>
                <Td>Excellent Behaviour</Td>
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

export default StudentsParentBehaviourList;
