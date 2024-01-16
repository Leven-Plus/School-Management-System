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

function OverallStudentStrengthInfoList(props: {
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
            <Th>S No.</Th>
            <Th>Class Name</Th>
            <Th>Total Student</Th>
            <Th>Male/Female</Th>
            <Th>Total Student</Th>
            <Th>Old Student</Th>
            <Th>New Student</Th>
            <Th>General</Th>
            <Th>OBC</Th>
            <Th>ST</Th>
            <Th>sc</Th>
            <Th>EWS</Th>
            <Th>Other</Th>
            <Th>Blank</Th>
            <Th>Hindu</Th>
            <Th>Muslim</Th>
            <Th>Sikh</Th>
            <Th>Christian</Th>
            <Th>Jain</Th>
            <Th>Buddh</Th>
            <Th>Other</Th>
            <Th>Blank</Th>
          </Tr>
        </THeade>

        <TBody>
          {tableDataMain.map((r: any, r_i: number) => {
            return (
              <>
                <Tr>
                  <Td>{tableDataMain?.length - 1 !== r_i ? r_i + 1 : ""}</Td>
                  <Td>{r}</Td>
                  <Td>20</Td>
                  <Td extras="border-b-2">Male</Td>
                  <Td extras="border-b-2 pl-2">10</Td>
                  <Td extras="border-b-2 bg-blue-500/60 font-semibold pl-5">
                    18
                  </Td>
                  <Td extras="border-b-2 bg-blue-500/60 font-semibold pl-5">
                    2
                  </Td>
                  <Td extras="border-b-2 bg-yellow-500/60 font-semibold pl-5">
                    1
                  </Td>
                  <Td extras="border-b-2 bg-yellow-500/60 font-semibold pl-5">
                    2
                  </Td>
                  <Td extras="border-b-2 bg-yellow-500/60 font-semibold pl-5">
                    1
                  </Td>
                  <Td extras="border-b-2 bg-yellow-500/60 font-semibold pl-5">
                    2
                  </Td>
                  <Td extras="border-b-2 bg-yellow-500/60 font-semibold pl-5">
                    1
                  </Td>
                  <Td extras="border-b-2 bg-yellow-500/60 font-semibold pl-5">
                    2
                  </Td>
                  <Td extras="border-b-2 bg-yellow-500/60 font-semibold pl-5">
                    1
                  </Td>
                  <Td extras="border-b-2 bg-green-500/60 font-semibold pl-5">
                    2
                  </Td>
                  <Td extras="border-b-2 bg-green-500/60 font-semibold pl-5">
                    1
                  </Td>
                  <Td extras="border-b-2 bg-green-500/60 font-semibold pl-5">
                    1
                  </Td>
                  <Td extras="border-b-2 bg-green-500/60 font-semibold pl-5">
                    2
                  </Td>
                  <Td extras="border-b-2 bg-green-500/60 font-semibold pl-5">
                    1
                  </Td>
                  <Td extras="border-b-2 bg-green-500/60 font-semibold pl-5">
                    1
                  </Td>
                  <Td extras="border-b-2 bg-green-500/60 font-semibold pl-5">
                    1
                  </Td>
                  <Td extras="border-b-2 bg-green-500/60 font-semibold pl-5">
                    1
                  </Td>
                </Tr>
                <Tr extras="border-b-2">
                  <Td>
                    <></>
                  </Td>
                  <Td>
                    <></>
                  </Td>
                  <Td>
                    <></>
                  </Td>
                  <Td>Female</Td>
                  <Td extras="pl-2">10</Td>
                  <Td extras="border-b-2 bg-blue-500/60 font-semibold pl-5">
                    18
                  </Td>
                  <Td extras="border-b-2 bg-blue-500/60 font-semibold pl-5">
                    2
                  </Td>
                  <Td extras="border-b-2 bg-yellow-500/60 font-semibold pl-5">
                    1
                  </Td>
                  <Td extras="border-b-2 bg-yellow-500/60 font-semibold pl-5">
                    2
                  </Td>
                  <Td extras="border-b-2 bg-yellow-500/60 font-semibold pl-5">
                    1
                  </Td>
                  <Td extras="border-b-2 bg-yellow-500/60 font-semibold pl-5">
                    2
                  </Td>
                  <Td extras="border-b-2 bg-yellow-500/60 font-semibold pl-5">
                    1
                  </Td>
                  <Td extras="border-b-2 bg-yellow-500/60 font-semibold pl-5">
                    2
                  </Td>
                  <Td extras="border-b-2 bg-yellow-500/60 font-semibold pl-5">
                    1
                  </Td>
                  <Td extras="border-b-2 bg-green-500/60 font-semibold pl-5">
                    2
                  </Td>
                  <Td extras="border-b-2 bg-green-500/60 font-semibold pl-5">
                    1
                  </Td>
                  <Td extras="border-b-2 bg-green-500/60 font-semibold pl-5">
                    1
                  </Td>
                  <Td extras="border-b-2 bg-green-500/60 font-semibold pl-5">
                    2
                  </Td>
                  <Td extras="border-b-2 bg-green-500/60 font-semibold pl-5">
                    1
                  </Td>
                  <Td extras="border-b-2 bg-green-500/60 font-semibold pl-5">
                    1
                  </Td>
                  <Td extras="border-b-2 bg-green-500/60 font-semibold pl-5">
                    1
                  </Td>
                  <Td extras="border-b-2 bg-green-500/60 font-semibold pl-5">
                    1
                  </Td>
                </Tr>
              </>
            );
          })}
        </TBody>
      </Table>
    </Card>
  );
}

export default OverallStudentStrengthInfoList;
