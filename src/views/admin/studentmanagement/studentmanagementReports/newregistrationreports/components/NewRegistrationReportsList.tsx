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

function NewRegistrationReportsList(props: {
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
            <Th extras="text-[0.8em]">Status</Th>
            <Th extras="text-[0.8em]">Software ID</Th>
            <Th extras="text-[0.8em]">Registration No.</Th>
            <Th extras="text-[0.8em]">Student Name</Th>
            <Th extras="text-[0.8em]">Father Name</Th>
            <Th extras="text-[0.8em]">Mother Name</Th>
            <Th extras="text-[0.8em]">Class Info</Th>
            <Th extras="text-[0.8em]">DOB</Th>
            <Th extras="text-[0.8em]">Gender</Th>
            <Th extras="text-[0.8em]">Registration Date</Th>
            <Th extras="text-[0.8em]">Contact No.</Th>
            <Th extras="text-[0.8em]">Village</Th>
            <Th extras="text-[0.8em]">Updated By</Th>
            <Th extras="text-[0.8em]">Updated Date</Th>
          </Tr>
        </THeade>

        <TBody>
          {tableDataMain.map((r: any, r_i: number) => {
            return (
             <Tr key={r}>
              <Td>{r_i + 1}</Td>
              <Td>Active</Td>
              <Td>23123</Td>
              <Td>1232</Td>
              <Td>Nitya Parsaniya</Td>
              <Td>Hasmukhbhai Parsaniya</Td>
              <Td>Ritaben Parsaniya</Td>
              <Td>Class 6-[A]</Td>
              <Td>26-04-2005</Td>
              <Td>Male</Td>
              <Td>11-02-2024</Td>
              <Td>9998899988</Td>
              <Td>Surat</Td>
              <Td>margesh@gmail.com</Td>
              <Td>11-02-2024</Td>
             </Tr>
            );
          })}
        </TBody>
      </Table>
    </Card>
  );
}

export default NewRegistrationReportsList;
