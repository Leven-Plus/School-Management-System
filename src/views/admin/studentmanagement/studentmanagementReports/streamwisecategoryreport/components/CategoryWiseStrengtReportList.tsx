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

const StreamInfo = [
  "COMMERCE",
  "SCIENCE",
  "COMMERCE MATHS",
  "ART",
  "BIO"
];

function CategoryWiseStrengtReportList(props: {
  tableData?: any;
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
          <h1 className="text-2xl font-semibold dark:text-white text-center">
            P.P Savani School
          </h1>
          <CardMenu />
        </div>
        <div className="relative flex items-center justify-between pt-4">
          <p className="w-[250px] font-bold">Disc Code :</p>
          <h2 className="text-2xl font-bold dark:text-white text-center">
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
            <Th>{""}</Th>
            <Th>{""}</Th>
            <Th colspan={3} textalign="center">11TH</Th>
            <Th colspan={3} textalign="center">12TH</Th>
          </Tr>
          <Tr>
            <Th>Stream</Th>
            <Th extras="border-l-2" textalign="center">Social Category</Th>
            <Th extras="border-l-2" textalign="center">Boys</Th>
            <Th textalign="center">Girls</Th>
            <Th textalign="center">Others</Th>
            <Th extras="border-l-2" textalign="center">Boys</Th>
            <Th textalign="center">Girls</Th>
            <Th textalign="center">Others</Th>
          </Tr>
        </THeade>

        <TBody>
         {StreamInfo?.map((item:any, index:number) => {
          return(
            <>
              <Tr key={index}>
                <Td>{item}</Td>
                <Td extras="border-b-2 border-l-2 pl-[8%]">General</Td>
                <Td extras="text-center border-b-2 border-l-2">11</Td>
                <Td extras="text-center border-b-2">11</Td>
                <Td extras="text-center border-b-2">11</Td>
                <Td extras="text-center border-b-2 border-l-2">11</Td>
                <Td extras="text-center border-b-2">11</Td>
                <Td extras="text-center border-b-2">11</Td>
              </Tr>
              <Tr key={index}>
                <Td>{""}</Td>
                <Td extras="border-b-2 border-l-2 pl-[8%]">OBC</Td>
                <Td extras="text-center border-b-2 border-l-2">11</Td>
                <Td extras="text-center border-b-2">11</Td>
                <Td extras="text-center border-b-2">11</Td>
                <Td extras="text-center border-b-2 border-l-2">11</Td>
                <Td extras="text-center border-b-2">11</Td>
                <Td extras="text-center border-b-2">11</Td>
              </Tr>
              <Tr>
                <Td>{""}</Td>
                <Td extras="border-b-2 border-l-2 pl-[8%]">SC</Td>
                <Td extras="text-center border-b-2 border-l-2">11</Td>
                <Td extras="text-center border-b-2">11</Td>
                <Td extras="text-center border-b-2">11</Td>
                <Td extras="text-center border-b-2 border-l-2">11</Td>
                <Td extras="text-center border-b-2">11</Td>
                <Td extras="text-center border-b-2">11</Td>
              </Tr>
              <Tr>
                <Td>{""}</Td>
                <Td extras="border-b-2 border-l-2 pl-[8%]">ST</Td>
                <Td extras="text-center border-b-2 border-l-2">11</Td>
                <Td extras="text-center border-b-2">11</Td>
                <Td extras="text-center border-b-2">11</Td>
                <Td extras="text-center border-b-2 border-l-2">11</Td>
                <Td extras="text-center border-b-2">11</Td>
                <Td extras="text-center border-b-2">11</Td>
              </Tr>
              <Tr>
                <Td extras="border-b-2">{""}</Td>
                <Td extras="border-b-2 border-l-2 pl-[8%]">EWS</Td>
                <Td extras="text-center border-b-2 border-l-2">11</Td>
                <Td extras="text-center border-b-2">11</Td>
                <Td extras="text-center border-b-2">11</Td>
                <Td extras="text-center border-b-2 border-l-2">11</Td>
                <Td extras="text-center border-b-2">11</Td>
                <Td extras="text-center border-b-2">11</Td>
              </Tr>
            </>
          )
         })}
        </TBody>
      </Table>
    </Card>
  );
}

export default CategoryWiseStrengtReportList;
