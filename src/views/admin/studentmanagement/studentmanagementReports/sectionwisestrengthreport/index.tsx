import Card from "../../../../../components/card";
import SectionWiseStrengthReportList from "./components/SectionWiseStrengthReportList";

const ClassInfo = ["Pre School", "Nursery", "LKG", "UKG", "1ST", "2ND", "3RD", "4TH", "5TH", "6TH", "7TH", "8TH", "9TH", "10TH", "11TH", "12TH", "All Class"];

const SectionWiseStrengthReport = () => {
  return (
    <>
      <Card className="rounded-xl bg-white dark:bg-navy-800 p-5 mb-5">
        <h2 className="text-2xl font-bold dark:text-white">
          Section Wise Strength Report
        </h2>
        <SectionWiseStrengthReportList
          tableData={ClassInfo}
          tableName="SECTION WISE STUDENT STRENGTH INFO"
        />
      </Card>
    </>
  );
};

export default SectionWiseStrengthReport