import Card from "../../../../../components/card";
import ClassWiseAttendanceReport from "./components/ClassWiseAttendanceReport";
import StudentAttendancePieChart from "./components/StudentAttendancePieChart";
import TotalStudentStateClassWiseTable from "./components/TotalStudentStateClassWiseTable";
import TotalStudentStateTable from "./components/TotalStudentStateTable";

const StudentAttendanceGraphs = () => {
  return (
    <>
      <Card className="rounded-xl bg-white dark:bg-navy-800 p-5 mb-5">
        <h2 className="text-2xl font-bold dark:text-white">Register Date</h2>
        <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-4">
          <fieldset className="border-[2px] p-2 rounded-lg dark:border-navy-200">
            <legend
              id="classXyz"
              className="text-xl text-navy-700 dark:text-white px-1.5"
            >
              Select Date<span className="text-red-500">*</span>
            </legend>
            <input type="date" name="" id="" />
          </fieldset>
        </div>
      </Card>
      <Card className="rounded-xl bg-white dark:bg-navy-800 p-5 mb-5">
        <h2 className="text-2xl font-bold dark:text-white">
          Attendance Reports
        </h2>
        <TotalStudentStateTable />
        <div className="flex justify-between items-center gap-5">
          <StudentAttendancePieChart />
          <ClassWiseAttendanceReport />
        </div>
        <div className="mt-5">
          <TotalStudentStateClassWiseTable
            tableData={[1, 1, 1, 1, 1, 1]}
            tableName="Todays Classwise Attendance"
          />
        </div>
      </Card>
    </>
  );
};

export default StudentAttendanceGraphs;
