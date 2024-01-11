import { useState } from "react";
import Button from "../../../../../components/button/Button";
import Card from "../../../../../components/card";
import Checkbox from "../../../../../components/checkbox";
import StudentProfileUpdateList from "./components";

type option = {
  [_: string]: boolean;
};

const StudentProfileUpdate = () => {
  const [optionList, setOptionList] = useState<option>({
    "Student Admission Number": false,
    "Student Name": false,
    "Father Name": false,
    "Mother Name": false,
    "Student Dob": false,
    "Student Gender": false,
    "Student Category": false,
    "Student Caste": false,
    "Student Religion":false,
    "Communication Contact Number":false,
    "SSSMID":false,
    "Student House":false,
    "Admission Scheme":false,
    "Previous School":false,
    "Present Address Line-1":false,
    "Present Address Line-2":false,
    "Village/Town":false,
    "Tehsil/Block":false,
    "Present District":false,
    "Present State":false,
    "Present Pin Code":false,
    "Land Mark":false,
    "Admission Session":false,
    "Blood Group":false,
    "Father Contact":false,
    "Father Email":false,
    "Father Qualification":false,
    "Father Occupation":false,
    "Father Income":false,
    "Mother Contact":false,
    "Mother Qualification":false,
    "Mother Occupation":false,
    "Mother Income":false,
    "Father Bank Name":false,
    "Father Bank IFSC":false,
    "Father Bamk Account Number":false,
    "Father Adhar Number":false,
    "Mother Bank Name":false,
    "Mother Bank IFSC":false,
    "Mother Bamk Account Number":false,
    "Mother Adhar Number":false,
    "Student Bank IFSC":false,
    "Student Bank Account Number":false,
    "Student Adhar Number":false,
    "Student Height":false,
    "Student Weight":false,
    "Family ID":false,
    "University":false
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
              Student Old/New<span className="text-red-500">*</span>
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
      <StudentProfileUpdateList fieldData={optionList} tableData={[1,1,1,1,1,1]} tableName="Students List" />
    </>
  );
};

export default StudentProfileUpdate;
