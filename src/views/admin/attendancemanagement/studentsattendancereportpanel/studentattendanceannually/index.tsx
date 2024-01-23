import { useState } from "react";
import Button from "../../../../../components/button/Button";
import Card from "../../../../../components/card";
import Checkbox from "../../../../../components/checkbox";
import AnnualAttendanceRegister from "./components/AnnualAttendanceRegister";

type option = {
  [_: string]: boolean;
};

const StudentAttendanceAnnually = () => {
  const [optionList, setOptionList] = useState<option>({
   "April-23": false,
   "May-23": false,
    "June-23": false,
    "July-23": false,
    "August-23": false,
    "September-23": false,
    "October-23": false,
    "November-23": false,
    "December-23": false,
    "January-24": false,
    "February-24": false,
    "March-24": false,
    "April-24": false,
  });

  return (
    <>
      <Card className="rounded-xl bg-white dark:bg-navy-800 p-5 mb-5">
        <h2 className="text-2xl font-bold dark:text-white">Find Class & Update Details</h2>
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
              Order By<span className="text-red-500">*</span>
            </legend>
            <select
              name="classXyz"
              id="classXyz"
              className="outline-none w-full bg-[#00000000] text-[#a0aec0] dark:text-white px-1.5"
              required
            >
              <option value="Select Class">Student Name</option>
            </select>
          </fieldset>
        </div>
      <div className="flex justify-start items-center gap-2 mt-5">
        <Checkbox id="select-all"/> <label htmlFor="select-all">Select All</label>
      </div>
        <div className="my-5 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-4">
          {Object.keys(optionList).map((key, index) => {
            return (
              <label htmlFor={`id_x_${index}`} className="flex items-center">
                <Checkbox
                  extra="mr-2"
                  id={`id_x_${index}`}
                  checked={optionList[key]}
                  onChange={(k: any) => {
                    setOptionList({
                      ...optionList,
                      [key]: k.target.checked
                    })
                  }}
                />
                {key}
              </label>
            );
          })}
        </div>
        <fieldset className="border-0 py-2 rounded-lg flex justify-left items-center">
          <Button
            name={<span>Get List</span>}
            onCLick={() => console.log("clicked")}
            style="blue"
            extras="w-fit h-fit"
          />
        </fieldset>
      </Card>
      <AnnualAttendanceRegister fieldData={optionList} tableData={[1,1,1,1,1,1]} tableName="Students List" />
    </>
  );
};

export default StudentAttendanceAnnually;
