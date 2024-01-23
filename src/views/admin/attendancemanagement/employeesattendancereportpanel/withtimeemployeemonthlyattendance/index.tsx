import React from "react";
import Card from "../../../../../components/card";
import Button from "../../../../../components/button/Button";
import AttendanceRegister from "./components/AttendanceRegister";

interface DayWiseWithTimeEmployeeMonthlyAttendanceProps {
  studentName?: string;
  attendance?: number;
}

const DayWiseWithTimeEmployeeMonthlyAttendance: React.FC<
  DayWiseWithTimeEmployeeMonthlyAttendanceProps
> = () => {
  return (
    <>
    <Card className="rounded-xl bg-white dark:bg-navy-800 p-5 mb-5">
      <h2 className="text-2xl font-bold dark:text-white">
        Find Employee Attendance Register
      </h2>
      <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-4">
        <fieldset className="border-[2px] p-2 rounded-lg dark:border-navy-200">
          <legend
            id="classXyz"
            className="text-xl text-navy-700 dark:text-white px-1.5"
          >
            Select Department<span className="text-red-500">*</span>
          </legend>
          <select
            name="classXyz"
            id="classXyz"
            className="outline-none w-full bg-[#00000000] text-[#a0aec0] dark:text-white px-1.5"
            required
          >
            <option value="Select Class">Select Department</option>
          </select>
        </fieldset>
        <fieldset className="border-[2px] p-2 rounded-lg dark:border-navy-200">
          <legend
            id="classXyz"
            className="text-xl text-navy-700 dark:text-white px-1.5"
          >
            Select Attendance Register<span className="text-red-500">*</span>
          </legend>
          <select
            name="classXyz"
            id="classXyz"
            className="outline-none w-full bg-[#00000000] text-[#a0aec0] dark:text-white px-1.5"
            required
          >
            <option value="Select Class">Select Attendance Register</option>
          </select>
        </fieldset>
        <fieldset className="border-[2px] p-2 rounded-lg dark:border-navy-200">
          <legend
            id="classXyz"
            className="text-xl text-navy-700 dark:text-white px-1.5"
          >
            Select Year<span className="text-red-500">*</span>
          </legend>
          <select
            name="classXyz"
            id="classXyz"
            className="outline-none w-full bg-[#00000000] text-[#a0aec0] dark:text-white px-1.5"
            required
          >
            <option value="Select Class">Select Year</option>
          </select>
        </fieldset>
        <fieldset className="border-[2px] p-2 rounded-lg dark:border-navy-200">
          <legend
            id="classXyz"
            className="text-xl text-navy-700 dark:text-white px-1.5"
          >
            Select Month<span className="text-red-500">*</span>
          </legend>
          <select
            name="classXyz"
            id="classXyz"
            className="outline-none w-full bg-[#00000000] text-[#a0aec0] dark:text-white px-1.5"
            required
          >
            <option value="Select Class">Select Month</option>
          </select>
        </fieldset>
       
        <fieldset className="border-0 pt-4 rounded-lg">
          <Button
            name={<span>Get List</span>}
            onCLick={() => console.log("clicked")}
            style="blue"
            extras="w-fit h-fit"
          />
        </fieldset>
      </div>
    </Card>
    <AttendanceRegister tableData={Array(20).fill("1")} tableName="Employee Attendance Report" />
    </>
  );
};

export default DayWiseWithTimeEmployeeMonthlyAttendance;
