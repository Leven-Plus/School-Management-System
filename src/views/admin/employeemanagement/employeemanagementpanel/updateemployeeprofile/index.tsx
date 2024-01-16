import { useState } from "react";
import Button from "../../../../../components/button/Button";
import Card from "../../../../../components/card";
import Checkbox from "../../../../../components/checkbox";
import UpdateEmployeeProfileList from "./components/UpdateEmployeeProfileList";

type option = {
  [_: string]: boolean;
};

const UpdateEmployeeProfile = () => {
  const [optionList, setOptionList] = useState<option>({
    "Employee DOB": false,
    "Employee Gender": false,
    "Employee Category": false,
    "Employee Email": false,
    "Employee Religion": false,
    "Blood Group": false,
    "Employee Father Name": false,
    "Employee Contact": false,
    "Employee Adhar Card": false,
    "Employee Profile":false,
    "Employee Department":false,
    "Employee Designation":false,
    "Employee Address":false,
    "Employee City":false,
    "Employee Block":false,
    "Employee District":false,
    "Employee State":false,
    "Employee Pincode":false,
    "Show On App":false,
    "Show On Website":false,
    "About Employee":false,
  });

  return (
    <>
      <Card className="rounded-xl bg-white dark:bg-navy-800 p-5 mb-5">
        <h2 className="text-2xl font-bold dark:text-white">
          Update Photo & Document
        </h2>
        <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-4">
          <fieldset className="border-[2px] p-2 rounded-lg dark:border-navy-200">
            <legend
              id="classXyz"
              className="text-xl text-navy-700 dark:text-white px-1.5"
            >
              Search For Department<span className="text-red-500">*</span>
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
          <fieldset className="border-0 py-2 rounded-lg flex justify-left items-center">
            <Button
              name={<span>Get List</span>}
              onCLick={() => console.log("clicked")}
              style="blue"
              extras="w-fit h-fit"
            />
          </fieldset>
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
                      [key]: k.target.checked,
                    });
                  }}
                />
                {key}
              </label>
            );
          })}
        </div>
      </Card>
      <UpdateEmployeeProfileList
        fieldData={optionList}
        tableData={[1, 1, 1, 1, 1, 1]}
        tableName="Employee List"
      />
    </>
  );
};

export default UpdateEmployeeProfile;
