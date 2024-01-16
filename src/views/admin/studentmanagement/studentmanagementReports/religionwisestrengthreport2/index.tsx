import Card from "../../../../../components/card";
import ReligionWiseStrengthReportList2 from "./components/ReligionWiseStrengthReportList2";

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

const ReligionWiseStrengthReport2 = () => {
  return (
    <Card className="rounded-xl bg-white dark:bg-navy-800 p-5 mb-5">
    <h2 className="text-2xl font-bold dark:text-white">
      Religion Wise Strength Report - 2
    </h2>
    <ReligionWiseStrengthReportList2
      tableData={ClassInfo}
      tableName="RELIGION WISE STRENGTH REPORT"
    />
  </Card>
  )
}

export default ReligionWiseStrengthReport2