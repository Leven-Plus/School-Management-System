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

function CategoryWiseStrengthReportList(props: {
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
          </h2>
          <p className="w-[250px] font-bold flex flex-row-reverse"><span>: School Code</span><span></span></p>
        </div>
      </header>

      <Table tableExtras={`w-full`} overflowX="hidden">
        <THeade>
          <Tr>
            <Th>{""}</Th>
            <Th>{""}</Th>
            <Th>{""}</Th>
            <Th>{""}</Th>
            <Th>{""}</Th>
            <Th colspan={3}>New</Th>
          </Tr>
          <Tr>
            <Th>S No.</Th>
            <Th>Class Name</Th>
            <Th>Total Student</Th>
            <Th>Total Boys</Th>
            <Th>Total Girls</Th>
            <Th extras="border-l-2 pl-2">Boys</Th>
            <Th>Girls</Th>
            <Th>Total</Th>
          </Tr>
        </THeade>

        <TBody>
          {tableDataMain?.map((r: any, r_i: number) => {
            return (
                <Tr extras={tableDataMain?.length -1 !== r_i ? "border-b-2" : ""}>
                  <Td extras="font-bold">{tableDataMain?.length - 1 !== r_i ? r_i + 1 : ""}</Td>
                  <Td>{r}</Td>
                  <Td>11</Td>
                  <Td>11</Td>
                  <Td>11</Td>
                  <Td extras="border-l-2 pl-2">11</Td>
                  <Td>11</Td>
                  <Td>11</Td>
                </Tr>
            );
          })}
        </TBody>
      </Table>
    </Card>
  );
}

export default CategoryWiseStrengthReportList;
