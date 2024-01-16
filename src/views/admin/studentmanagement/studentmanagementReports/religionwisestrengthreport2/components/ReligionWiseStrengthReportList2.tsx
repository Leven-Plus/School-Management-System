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

const Religions: string[] = [
  "Hindu",
  "Muslim",
  "Sikh",
  "Christian",
  "Jain",
  "Buddh",
  "Other",
  "Total",
];

function ReligionWiseStrengthReportList2(props: {
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
          <p className="w-[250px] font-bold flex flex-row-reverse">
            <span>: School Code</span>
            <span></span>
          </p>
        </div>
      </header>

      <Table tableExtras={`w-full`} overflowX="hidden">
        <THeade>
          <Tr>
            <Th>Social Category</Th>
            <Th>Gender</Th>
            {tableDataMain?.map((item: any, index: number) => {
              return <Th key={index}>{item}</Th>;
            })}
          </Tr>
        </THeade>

        <TBody>
          {Religions.map((r: any, r_i: number) => {
            return (
              <>
                <Tr>
                  <Td extras="font-bold">{r}</Td>
                  <Td>Boys</Td>
                  <Td>11</Td>
                  <Td>11</Td>
                  <Td>11</Td>
                  <Td>11</Td>
                  <Td>11</Td>
                  <Td>11</Td>
                  <Td>11</Td>
                  <Td>11</Td>
                  <Td>11</Td>
                  <Td>11</Td>
                  <Td>11</Td>
                  <Td>11</Td>
                  <Td>11</Td>
                  <Td>11</Td>
                  <Td>11</Td>
                  <Td>11</Td>
                </Tr>
                <Tr>
                  <Td extras="font-bold">{""}</Td>
                  <Td>Girls</Td>
                  <Td>11</Td>
                  <Td>11</Td>
                  <Td>11</Td>
                  <Td>11</Td>
                  <Td>11</Td>
                  <Td>11</Td>
                  <Td>11</Td>
                  <Td>11</Td>
                  <Td>11</Td>
                  <Td>11</Td>
                  <Td>11</Td>
                  <Td>11</Td>
                  <Td>11</Td>
                  <Td>11</Td>
                  <Td>11</Td>
                  <Td>11</Td>
                </Tr>
                {true && (
                  <Tr
                    extras={Religions?.length - 1 !== r_i ? "border-b-2" : ""}
                  >
                    <Td extras="font-bold">{""}</Td>
                    <Td>Others</Td>
                    <Td>11</Td>
                    <Td>11</Td>
                    <Td>11</Td>
                    <Td>11</Td>
                    <Td>11</Td>
                    <Td>11</Td>
                    <Td>11</Td>
                    <Td>11</Td>
                    <Td>11</Td>
                    <Td>11</Td>
                    <Td>11</Td>
                    <Td>11</Td>
                    <Td>11</Td>
                    <Td>11</Td>
                    <Td>11</Td>
                    <Td>11</Td>
                  </Tr>
                )}
              </>
            );
          })}
        </TBody>
      </Table>
    </Card>
  );
}

export default ReligionWiseStrengthReportList2;
