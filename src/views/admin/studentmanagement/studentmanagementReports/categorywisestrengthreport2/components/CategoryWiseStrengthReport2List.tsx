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

function CategoryWiseStrengthReport2List(props: {
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
            <Th>Social Category</Th>
            <Th>Gender</Th>
            {tableDataMain?.map((item: any, index: number) => {
              return <Th key={index}>{item}</Th>;
            })}
          </Tr>
        </THeade>

        <TBody>
          {["Boys", "Girls"]?.map((item: any, index: number) => {
            return (
              <Tr key={index}>
                <Td extras="font-semibold border-r-2">{index === 0 && "New"}</Td>
                <Td extras={`${index === 0 ? "border-b-2" : ""} pl-2`}>{item}</Td>
                {tableDataMain?.map((item2:any, index2:number) => {
                  return(
                    <Td key={item2} extras={`${index === 0 ? "border-b-2" : ""}`}>
                      {index2}
                    </Td>
                  )
                })}
              </Tr>
            );
          })}
        </TBody>
      </Table>
    </Card>
  );
}

export default CategoryWiseStrengthReport2List;
