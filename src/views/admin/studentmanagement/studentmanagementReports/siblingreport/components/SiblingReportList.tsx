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

function SiblingReportList(props: {
  tableData: any;
  tableName?: string;
}) {
  const Alphabet: any = [];

  for (let index = 0; index < 26; index++) {
    const startingNum = 65;
    Alphabet.push(String.fromCharCode(startingNum + index));
  }

  const { tableData: tableDataMain, tableName } = props;
  console.log(tableDataMain);
  console.log(tableName);

  return (
    <Card
      extra={
        "w-full h-fit sm:overflow-auto rounded-xl bg-white dark:bg-navy-800 px-5 my-5 border-0"
      }
    >
      <header>
        <div className="relative flex items-center justify-between pt-4">
          <div></div>
          <h1 className="text-2xl font-semibold dark:text-white pl-2">
            P.P Savani School
          </h1>
          <CardMenu />
        </div>
        <div className="relative flex items-center justify-between pt-4">
          <p className="w-[250px] font-bold">Disc Code:</p>
          <h2 className="text-2xl font-bold dark:text-white pl-2">
            {tableName}
          </h2>{" "}
          <p className="w-[250px] font-bold flex flex-row-reverse">
            <span>: School Code</span>
            <span></span>
          </p>
        </div>
      </header>

      <Table tableExtras={`w-full`} overflowX="hidden">
        <THeade>
          <Tr>
            <Th extras="text-[0.8em]">S No.</Th>
            <Th extras="text-[0.8em]">Sibling ID</Th>
            <Th extras="text-[0.8em]">Father Name</Th>
            <Th extras="text-[0.8em]">Mother Name</Th>
            <Th extras="text-[0.8em]">Student ID</Th>
            <Th extras="text-[0.8em]">Student Name</Th>
            <Th extras="text-[0.8em]">Student Gender</Th>
            <Th extras="text-[0.8em]">Class Info</Th>
            <Th extras="text-[0.8em]">DOB</Th>
            <Th extras="text-[0.8em]">Contact No.</Th>
            <Th extras="text-[0.8em]">Admission Date</Th>
            <Th extras="text-[0.8em]">Admission Number</Th>
          </Tr>
        </THeade>

        <TBody>
          {tableDataMain.map((r: any, r_i: number) => {
            return (
             <Tr>
                <Td>{r_i + 1}</Td>
                <Td>234324324324</Td>
                <Td>Ram Dubey</Td>
                <Td>Sunita Dubey</Td>
                <Td>34234234</Td>
                <Td>Shweta Dubey</Td>
                <Td>Female</Td>
                <Td>Class 7-[A]</Td>
                <Td>07-01-2015</Td>
                <Td>9999999999</Td>
                <Td>06-09-2014</Td>
                <Td>ADM/2014/001</Td>
             </Tr>
            );
          })}
        </TBody>
      </Table>
    </Card>
  );
}

export default SiblingReportList;
