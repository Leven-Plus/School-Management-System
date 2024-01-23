import Card from "../../../../../../components/card";
import MultiBarCharts from "../../../../../../components/charts/MultiBarChart";

const ClassWiseAttendanceReport = () => {
  return (
    <Card extra="pb-7 p-[20px] w-full">
      <div className="flex flex-row justify-between">
        <div className="ml-1 pt-2">
        <h4 className="text-lg font-bold text-navy-700 dark:text-white mb-5">
            Classwise Attendance Report
          </h4>
        </div>
      </div>

      <div className="h-[300px] w-full pt-10 pb-0 flex gap-2 items-center">
        <MultiBarCharts />
      </div>
    </Card>
  );
};

export default ClassWiseAttendanceReport;
