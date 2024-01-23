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

function TotalStudentStateTable() {

  return (
    <Card
      extra={
        "w-full h-fit sm:overflow-auto rounded-xl bg-white dark:bg-navy-800 px-5 my-5 border-0"
      }
    >
       <header className="relative flex items-center justify-between pt-4">
        <h2 className="text-2xl font-bold dark:text-white">
          Todays Total Attendance
        </h2>
        <CardMenu />
      </header>
      <Table tableExtras="w-full">
        <THeade>
          <Tr extras="border-b-2">
            <Th>Total Student</Th>
            <Th>Total Present</Th>
            <Th>Total Absent</Th>
            <Th>Total Leave</Th>
            <Th>Not Mark</Th>
          </Tr>
        </THeade>

        <TBody>
         <Tr>
            <Td>2333</Td>
            <Td>2000</Td>
            <Td>300</Td>
            <Td>33</Td>
            <Td>0</Td>
         </Tr>
        </TBody>
      </Table>
    </Card>
  );
}

export default TotalStudentStateTable;
