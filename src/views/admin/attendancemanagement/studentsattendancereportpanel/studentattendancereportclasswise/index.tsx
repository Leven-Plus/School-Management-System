import React from "react";
import Card from "../../../../../components/card";
import Button from "../../../../../components/button/Button";
import TotalStudentStateClassWiseTable from "./components/TotalStudentStateClassWiseTable";

interface StudentAttendanceReportClassWiseProps {
  // Add any required props here
}

const StudentAttendanceReportClassWise: React.FC<
  StudentAttendanceReportClassWiseProps
> = () => {
  return (
    <>
      <Card className="rounded-xl bg-white dark:bg-navy-800 p-5 mb-5">
        <h2 className="text-2xl font-bold dark:text-white">
          Find Student Attendance Register
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
              <option value="Select Class">Class 9</option>
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
              <option value="Select Class">Section [A]</option>
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
      <TotalStudentStateClassWiseTable
        tableData={Array(10).fill(1)}
        tableName="Class Wise Students Attendance Register"
      />
    </>
  );
};

export default StudentAttendanceReportClassWise;
