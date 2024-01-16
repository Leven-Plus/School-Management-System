import Card from "../../../../../components/card";
import StudentCasteWiseReportList from "./components/StudentCasteWiseReportList";

const StudentCasteWiseReport = () => {
  return (
    <Card className="rounded-xl bg-white dark:bg-navy-800 p-5 mb-5">
      <h2 className="text-2xl font-bold dark:text-white">
        Student Caste Wise Report
      </h2>
      <StudentCasteWiseReportList
        tableData={[1, 1, 1]}
        tableName="CASTE WISE STRENGTH INFO"
      />
    </Card>
  );
};

export default StudentCasteWiseReport;
