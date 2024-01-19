import React from "react";
import Card from "../../../../../components/card";
import Button from "../../../../../components/button/Button";
import RfidMachineData from "./components/RfidMachineData";

const RfidMachine: React.FC = () => {
  return (
    <>
      <Card className="rounded-xl bg-white dark:bg-navy-800 p-5 mb-5">
        <h2 className="text-2xl font-bold dark:text-white">
          Find Attendance
        </h2>
        <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-4">
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
              name={<span>View Attendance</span>}
              onCLick={() => console.log("clicked")}
              style="blue"
              extras="w-fit h-fit"
            />
          </fieldset>
        </div>
      </Card>
      <RfidMachineData tableData={Array(20).fill(1)} tableName="Student RFID Machine Data" />
    </>
  );
};

export default RfidMachine;
