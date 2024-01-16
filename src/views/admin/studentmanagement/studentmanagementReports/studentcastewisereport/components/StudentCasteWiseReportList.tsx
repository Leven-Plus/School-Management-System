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
  "Pre School",
  "Nursery",
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

const CasteInfo = [
  "Caste Not Found",
  "Ahir",
  "Ahirwar",
  "Ankit Raghuwanshi",
  "Baniya",
  "BC 1",
  "Brahmin",
  "Chaurasia",
  "Dangi",
  "Dhakad",
  "Dhanuk",
  "Gen",
  "General",
  "Gujar",
  "Guor",
  "Hindu",
  "Islam",
  "Jaat",
  "Jatav",
  "Kapu",
  "Koeri",
  "Kulmi",
  "Kurmi",
  "Mahra",
  "Mehra",
  "OBC",
  "Pasi",
  "Patel",
  "Patidar",
  "Raghuwanshi",
  "Roy",
  "Sayad",
  "SC",
  "Seyd",
  "Sharma",
  "ST",
  "Teli",
  "Yadav",
  "Total"
];

function StudentCasteWiseReportList(props: {
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
            <Th>S No.</Th>
            <Th>Student Caste</Th>
            <Th textalign="center">Total Students</Th>
            {ClassInfo?.map((item: any, index: number) => {
              return <Th key={index} textalign="center">{item}</Th>;
            })}
          </Tr>
        </THeade>

        <TBody>
          {CasteInfo?.map((item: any, index: number) => {
            return (
              <Tr>
                <Td extras="border-b-2">{CasteInfo?.length - 1 !== index ? index + 1 : ""}</Td>
                <Td extras="border-b-2">{item}</Td>
                <Td extras="border-b-2 text-center">123</Td>
                <Td extras="border-b-2 text-center">23</Td>
                <Td extras="border-b-2 text-center">23</Td>
                <Td extras="border-b-2 text-center">23</Td>
                <Td extras="border-b-2 text-center">23</Td>
                <Td extras="border-b-2 text-center">23</Td>
                <Td extras="border-b-2 text-center">23</Td>
                <Td extras="border-b-2 text-center">23</Td>
                <Td extras="border-b-2 text-center">23</Td>
                <Td extras="border-b-2 text-center">23</Td>
                <Td extras="border-b-2 text-center">23</Td>
                <Td extras="border-b-2 text-center">23</Td>
                <Td extras="border-b-2 text-center">23</Td>
                <Td extras="border-b-2 text-center">23</Td>
                <Td extras="border-b-2 text-center">23</Td>
                <Td extras="border-b-2 text-center">23</Td>
                <Td extras="border-b-2 text-center">23</Td>
              </Tr>
            );
          })}
        </TBody>
      </Table>
    </Card>
  );
}

export default StudentCasteWiseReportList;
