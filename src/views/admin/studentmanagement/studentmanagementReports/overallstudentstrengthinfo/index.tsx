import Card from "../../../../../components/card";
import OverallStudentStrengthInfoList from "./components/OverallStudentStrengthInfoList";

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
  "11TH[COMMERCE]",
  "11TH[SCIENCE]",
  "11TH[COMMERCE MATHS]",
  "11TH[ART]",
  "11TH[BIO]",
  "12TH[COMMERCE]",
  "12TH[SCIENCE]",
  "12TH[COMMERCE MATHS]",
  "12TH[ART]",
  "12TH[BIO]",
  "Total",
];

const OverallStudentStrengthInfo = () => {
  return (
    <>
      <Card className="rounded-xl bg-white dark:bg-navy-800 p-5 mb-5">
        <h2 className="text-2xl font-bold dark:text-white">
          Overall Students Strength Report
        </h2>
        <OverallStudentStrengthInfoList
          tableData={ClassInfo}
          tableName="OVERALL STUDENTS STRENGTH INFO"
        />
      </Card>
    </>
  );
};

export default OverallStudentStrengthInfo;
