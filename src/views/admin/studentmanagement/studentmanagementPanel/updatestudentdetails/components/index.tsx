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
import { Select } from "@chakra-ui/react";
import InputField from "../../../../../../components/fields/InputField";
import Radio from "../../../../../../components/radio";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function StudentProfileUpdateList(props: {
  fieldData: any;
  tableData: any;
  tableName?: string;
}) {
  const { tableData: tableDataMain, tableName, fieldData } = props;
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

  const obj = {
    name: "Luke Skywalker",
    title: "Jedi Knight",
    age: 23,
  };

  const tableWidth = Object.values(fieldData).filter((x) => {
    return x === true;
  });

  console.log(tableWidth?.length * 5 + 50);

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

      <Table tableExtras={tableWidth?.length > 4 ? `w-[100vw]` : `w-full`}>
        <THeade>
          <Tr>
            <Th>S No.</Th>
            <Th>Software ID</Th>
            <Th>ADM Number</Th>
            <Th>Student Name</Th>
            <Th>Class[Section]</Th>
            {Object.keys(fieldData).map((key, index) => {
              if (fieldData[key]) {
                return <Th>{key}</Th>;
              }
            })}
          </Tr>
        </THeade>

        <TBody>
          {data.map((r: any, r_i: number) => {
            return (
              <Tr>
                <Td>{r_i + 1}</Td>
                <Td>SFTIDSTD{r_i + 1}</Td>
                <Td>12323</Td>
                <Td>Yogesh Maurya</Td>
                <Td>Class 3-[A]</Td>
                {fieldData["Student Admission Number"] && (
                  <Td>
                    <InputField
                      type="number"
                      id={`studentadmnumber${r_i}`}
                      placeholder="Enter ADM Number"
                      variant="primary"
                      extra=""
                      value=""
                    />
                  </Td>
                )}
                {fieldData["Student Name"] && (
                  <Td>
                    <InputField
                      type="text"
                      id={`studentname${r_i}`}
                      placeholder="Enter Student Name"
                      variant="primary"
                      extra=""
                      value=""
                    />
                  </Td>
                )}
                {fieldData["Father Name"] && (
                  <Td>
                    <InputField
                      type="text"
                      id={`fathername${r_i}`}
                      placeholder="Enter Father Name"
                      variant="primary"
                      extra=""
                      value=""
                    />
                  </Td>
                )}
                {fieldData["Mother Name"] && (
                  <Td>
                    <InputField
                      type="text"
                      id={`mothername${r_i}`}
                      placeholder="Enter Mother Name"
                      variant="primary"
                      extra=""
                      value=""
                    />
                  </Td>
                )}
                {fieldData["Student Dob"] && (
                  <Td>
                    <InputField
                      type="date"
                      id={`studentdob${r_i}`}
                      placeholder=""
                      variant="primary"
                      extra="text-[gray]"
                      value=""
                    />
                  </Td>
                )}
                {fieldData["Student Gender"] && (
                  <Td extras="flex justify-evenly items-center">
                    <div className="flex justify-left items-center">
                      <Radio
                        id={`student${r_i}male`}
                        name={`student-${r_i}-gender`}
                        color="blue"
                      />
                      <label htmlFor={`student${r_i}male`}>Male</label>
                    </div>
                    <div className="flex justify-left items-center">
                      <Radio
                        id={`student${r_i}female`}
                        name={`student-${r_i}-gender`}
                        color="pink"
                      />
                      <label htmlFor={`student${r_i}female`}>Female</label>
                    </div>
                  </Td>
                )}
                {fieldData["Student Category"] && (
                  <Td>
                    <Select>
                      <option value="select-category">Select Category</option>
                    </Select>
                  </Td>
                )}
                {fieldData["Student Caste"] && (
                  <Td>
                    <Select>
                      <option value="select-caste">Select Caste</option>
                    </Select>
                  </Td>
                )}
                {fieldData["Student Religion"] && (
                  <Td>
                    <Select>
                      <option value="select-religion">Select Regilion</option>
                    </Select>
                  </Td>
                )}
                {fieldData["Communication Contact Number"] && (
                  <Td>
                    <InputField
                      type="text"
                      placeholder="Enter Communication Contact Number"
                      variant="primary"
                      extra=""
                      id=""
                    />
                  </Td>
                )}
                {fieldData["SSSMID"] && (<Td>  <InputField
                      type="text"
                      placeholder="SSSMID"
                      variant="primary"
                      extra=""
                      id=""
                    /></Td>)}
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

export default StudentProfileUpdateList;
