import React from "react";
import Card from "../../../../../components/card";
import Button from "../../../../../components/button/Button";
import ClassAttendanceList from "./components/ClassAttendanceList";

interface StudentWiseAttendanceReportProps {
  studentName?: string;
  attendance?: number;
}

const StudentWiseAttendanceReport: React.FC<
  StudentWiseAttendanceReportProps
> = () => {
  return (
    <>
    <Card className="rounded-xl bg-white dark:bg-navy-800 p-5 mb-5">
      <h2 className="text-2xl font-bold dark:text-white">
        Find Class Attendance Register
      </h2>
      <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-4">
        <fieldset className="border-[2px] p-2 rounded-lg dark:border-navy-200">
          <legend
            id="classXyz"
            className="text-xl text-navy-700 dark:text-white px-1.5"
          >
            Select Class<span className="text-red-500">*</span>
          </legend>
          <select
            name="classXyz"
            id="classXyz"
            className="outline-none w-full bg-[#00000000] text-[#a0aec0] dark:text-white px-1.5"
            required
          >
            <option value="Select Class">Select Class</option>
          </select>
        </fieldset>
        <fieldset className="border-[2px] p-2 rounded-lg dark:border-navy-200">
          <legend
            id="classXyz"
            className="text-xl text-navy-700 dark:text-white px-1.5"
          >
            Select Section<span className="text-red-500">*</span>
          </legend>
          <select
            name="classXyz"
            id="classXyz"
            className="outline-none w-full bg-[#00000000] text-[#a0aec0] dark:text-white px-1.5"
            required
          >
            <option value="Select Class">Select Section</option>
          </select>
        </fieldset>
        <fieldset className="border-[2px] p-2 rounded-lg dark:border-navy-200">
          <legend
            id="classXyz"
            className="text-xl text-navy-700 dark:text-white px-1.5"
          >
            Report Type<span className="text-red-500">*</span>
          </legend>
          <select
            name="classXyz"
            id="classXyz"
            className="outline-none w-full bg-[#00000000] text-[#a0aec0] dark:text-white px-1.5"
            required
          >
            <option value="Select Class">Report Type</option>
          </select>
        </fieldset>
        <fieldset className="border-[2px] p-2 rounded-lg dark:border-navy-200">
          <legend
            id="classXyz"
            className="text-xl text-navy-700 dark:text-white px-1.5"
          >
            Attendance Value<span className="text-red-500">*</span>
          </legend>
          <select
            name="classXyz"
            id="classXyz"
            className="outline-none w-full bg-[#00000000] text-[#a0aec0] dark:text-white px-1.5"
            required
          >
            <option value="Select Class">Attendance Value</option>
          </select>
        </fieldset>
        <fieldset className="border-[2px] p-2 rounded-lg dark:border-navy-200">
          <legend
            id="classXyz"
            className="text-xl text-navy-700 dark:text-white px-1.5"
          >
            Select Date<span className="text-red-500">*</span>
          </legend>
          <input
            type="date"
            name=""
            id=""
            className="w-full focus:outline-none"
          />
        </fieldset>
        <fieldset className="border-[2px] p-2 rounded-lg dark:border-navy-200">
          <legend
            id="classXyz"
            className="text-xl text-navy-700 dark:text-white px-1.5"
          >
            Order By<span className="text-red-500">*</span>
          </legend>
          <select
            name="classXyz"
            id="classXyz"
            className="outline-none w-full bg-[#00000000] text-[#a0aec0] dark:text-white px-1.5"
            required
          >
            <option value="Select Class">Student Name (ASC)</option>
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
    <ClassAttendanceList tableData={Array(20).fill("1")} tableName="Class Wise Student Attendance Report" />
    </>
  );
};

export default StudentWiseAttendanceReport;
