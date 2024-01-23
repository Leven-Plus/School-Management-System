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

const ClassInfo = [
  "PRE SCHOOL",
  "NURSERY",
  "LKG",
  "UKG",
  "1ST",
  "2ND",
  "3RD",
  "4TH",
  "5TH",
  "6TH",
  "7TH",
  "8TH",
  "9TH",
  "10TH",
  "11TH",
  "12TH",
];

const AgeClasses: string[] = [];

for (let index = 0; index < 21; index++) {
  if (index !== 20) {
    AgeClasses.push(`${index}-${index + 1}`);
  } else {
    AgeClasses.push("20+", "DOB Not Found", "Total");
  }
}

function AgeWiseStrengthReportList(props: {
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
      <div className="w-full overflow-x-auto">
        <Table tableExtras={`w-[200vw]`} overflowX="hidden">
          <THeade>
            <Tr>
              <Th>{""}</Th>
              <Th>{""}</Th>
              <Th>{""}</Th>
              {ClassInfo?.map((item: any, index: number) => {
                return (
                  <Th key={index} colspan={3} textalign="center" extras="text-size-[0.5em]">
                    {item}
                  </Th>
                );
              })}
            </Tr>
            <Tr>
              <Th>S No.</Th>
              <Th>Age</Th>
              <Th>Total Students</Th>
              {ClassInfo?.map((item: any, index: number) => {
                return (
                  <>
                    <Th key={index} extras="border-l-2 pl-2">
                      Male
                    </Th>
                    <Th key={item}>Female</Th>
                    <Th>Total</Th>
                  </>
                );
              })}
            </Tr>
          </THeade>

          <TBody>
            {AgeClasses?.map((r: any, r_i: number) => {
              return (
                <Tr extras={AgeClasses?.length - 1 !== r_i ? "border-b-2" : ""}>
                  <Td extras="font-bold">
                    {AgeClasses?.length - 1 !== r_i ? r_i + 1 : ""}
                  </Td>
                  <Td>{r}</Td>
                  <Td>2323</Td>
                  {ClassInfo?.map((item2: any, index2: number) => {
                    return (
                      <>
                        <Td key={item2} extras="border-l-2 text-center">12</Td>
                        <Td key={index2} extras="text-center">12</Td>
                        <Td extras="text-center">24</Td>
                      </>
                    );
                  })}
                </Tr>
              );
            })}
          </TBody>
        </Table>
      </div>
    </Card>
  );
}

export default AgeWiseStrengthReportList;
