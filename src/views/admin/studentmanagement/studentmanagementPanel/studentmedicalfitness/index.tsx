import React from "react";
import Card from "../../../../../components/card";
import Radio from "../../../../../components/radio";
import Button from "../../../../../components/button/Button";

const StudentMedicalFitness:React.FC = () => {
  return (
    <>
      <Card className="rounded-xl bg-white dark:bg-navy-800 p-5 mb-5">
        <h2 className="text-2xl font-bold dark:text-white">
          Search Student Details
        </h2>
        <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-4">
          <fieldset className="border-[2px] p-2 rounded-lg dark:border-navy-200 col-span-2">
            <legend
              id="classXyz"
              className="text-xl text-navy-700 dark:text-white px-1.5"
            >
              Search Student<span className="text-red-500">*</span>
            </legend>
            <select
              name="classXyz"
              id="classXyz"
              className="outline-none w-full bg-[#00000000] text-[#a0aec0] dark:text-white px-1.5"
              required
            >
              <option value="Select Class">Select Student</option>
            </select>
          </fieldset>
          <fieldset className="border-[2px] p-2 rounded-lg dark:border-navy-200">
            <legend
              id="classXyz"
              className="text-xl text-navy-700 dark:text-white px-1.5"
            >
              Student ID<span className="text-red-500">*</span>
            </legend>
            <input
              type="text"
              name="reg_no"
              id="reg_no"
              placeholder=""
              className="outline-none w-full bg-[#00000000] text-[#a0aec0] dark:text-white px-1.5"
              required
            />
          </fieldset>
          <fieldset className="border-[2px] p-2 rounded-lg dark:border-navy-200">
            <legend
              id="classXyz"
              className="text-xl text-navy-700 dark:text-white px-1.5"
            >
              Admission Number<span className="text-red-500">*</span>
            </legend>
            <input
              type="text"
              name="reg_no"
              id="reg_no"
              placeholder=""
              className="outline-none w-full bg-[#00000000] text-[#a0aec0] dark:text-white px-1.5"
              required
            />
          </fieldset>

          <fieldset className="border-[2px] p-2 rounded-lg dark:border-navy-200 col-span-2">
            <legend
              id="classXyz"
              className="text-xl text-navy-700 dark:text-white px-1.5"
            >
              Student Name<span className="text-red-500">*</span>
            </legend>
            <input
              type="text"
              name="reg_no"
              id="reg_no"
              placeholder=""
              className="outline-none w-full bg-[#00000000] text-[#a0aec0] dark:text-white px-1.5"
              required
            />
          </fieldset>
          <fieldset className="border-[2px] p-2 rounded-lg dark:border-navy-200 col-span-2">
            <legend
              id="classXyz"
              className="text-xl text-navy-700 dark:text-white px-1.5"
            >
              Father Name<span className="text-red-500">*</span>
            </legend>
            <input
              type="text"
              name="reg_no"
              id="reg_no"
              placeholder=""
              className="outline-none w-full bg-[#00000000] text-[#a0aec0] dark:text-white px-1.5"
              required
            />
          </fieldset>
          <fieldset className="border-[2px] p-2 rounded-lg dark:border-navy-200 col-span-2">
            <legend
              id="classXyz"
              className="text-xl text-navy-700 dark:text-white px-1.5"
            >
              Mother Name<span className="text-red-500">*</span>
            </legend>
            <input
              type="text"
              name="reg_no"
              id="reg_no"
              placeholder=""
              className="outline-none w-full bg-[#00000000] text-[#a0aec0] dark:text-white px-1.5"
              required
            />
          </fieldset>
          <fieldset className="border-[2px] p-2 rounded-lg dark:border-navy-200">
            <legend
              id="classXyz"
              className="text-xl text-navy-700 dark:text-white px-1.5"
            >
              Student Class<span className="text-red-500">*</span>
            </legend>
            <input
              type="text"
              name="reg_no"
              id="reg_no"
              placeholder=""
              className="outline-none w-full bg-[#00000000] text-[#a0aec0] dark:text-white px-1.5"
              required
            />
          </fieldset>
          <fieldset className="border-[2px] p-2 rounded-lg dark:border-navy-200">
            <legend
              id="classXyz"
              className="text-xl text-navy-700 dark:text-white px-1.5"
            >
              Student Section<span className="text-red-500">*</span>
            </legend>
            <input
              type="text"
              name="reg_no"
              id="reg_no"
              placeholder=""
              className="outline-none w-full bg-[#00000000] text-[#a0aec0] dark:text-white px-1.5"
              required
            />
          </fieldset>
          <fieldset className="border-[2px] p-2 rounded-lg dark:border-navy-200">
            <legend
              id="classXyz"
              className="text-xl text-navy-700 dark:text-white px-1.5"
            >
              Blood Group<span className="text-red-500">*</span>
            </legend>
            <input
              type="text"
              name="reg_no"
              id="reg_no"
              placeholder=""
              className="outline-none w-full bg-[#00000000] text-[#a0aec0] dark:text-white px-1.5"
              required
            />
          </fieldset>
          <fieldset className="border-[2px] p-2 rounded-lg dark:border-navy-200">
            <legend
              id="classXyz"
              className="text-xl text-navy-700 dark:text-white px-1.5"
            >
              Student CWSN<span className="text-red-500">*</span>
            </legend>
            <input
              type="text"
              name="reg_no"
              id="reg_no"
              placeholder=""
              className="outline-none w-full bg-[#00000000] text-[#a0aec0] dark:text-white px-1.5"
              required
            />
          </fieldset>
          <fieldset className="border-[2px] p-2 rounded-lg dark:border-navy-200">
            <legend
              id="classXyz"
              className="text-xl text-navy-700 dark:text-white px-1.5"
            >
              Medical History<span className="text-red-500">*</span>
            </legend>
            <input
              type="text"
              name="reg_no"
              id="reg_no"
              placeholder=""
              className="outline-none w-full bg-[#00000000] text-[#a0aec0] dark:text-white px-1.5"
              required
            />
          </fieldset>

          <fieldset className="border-[2px] p-2 rounded-lg dark:border-navy-200">
            <legend
              id="classXyz"
              className="text-xl text-navy-700 dark:text-white px-1.5"
            >
              Health Checkup<span className="text-red-500">*</span>
            </legend>
            <input
              type="text"
              name="reg_no"
              id="reg_no"
              placeholder=""
              className="outline-none w-full bg-[#00000000] text-[#a0aec0] dark:text-white px-1.5"
              required
            />
          </fieldset>
        </div>
      </Card>
      <Card className="rounded-xl bg-white dark:bg-navy-800 p-5 mb-5">
        <h2 className="text-2xl font-bold dark:text-white">
          Student Checkup Results
        </h2>
        <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-4">
          <fieldset className="border-[2px] p-2 rounded-lg dark:border-navy-200">
            <legend
              id="classXyz"
              className="text-xl text-navy-700 dark:text-white px-1.5"
            >
              Student Height<span className="text-red-500">*</span>
            </legend>
            <input
              type="number"
              name="reg_no"
              id="reg_no"
              placeholder=""
              className="outline-none w-full bg-[#00000000] text-[#a0aec0] dark:text-white px-1.5"
              required
            />
          </fieldset>
          <fieldset className="border-[2px] p-2 rounded-lg dark:border-navy-200">
            <legend
              id="classXyz"
              className="text-xl text-navy-700 dark:text-white px-1.5"
            >
              Student Weight<span className="text-red-500">*</span>
            </legend>
            <input
              type="number"
              name="reg_no"
              id="reg_no"
              placeholder=""
              className="outline-none w-full bg-[#00000000] text-[#a0aec0] dark:text-white px-1.5"
              required
            />
          </fieldset>
          <fieldset className="border-[2px] p-2 rounded-lg dark:border-navy-200">
            <legend
              id="classXyz"
              className="text-xl text-navy-700 dark:text-white px-1.5"
            >
              Checkup Date<span className="text-red-500">*</span>
            </legend>
            <input
              type="date"
              name="reg_no"
              id="reg_no"
              placeholder=""
              className="outline-none w-full bg-[#00000000] text-[#a0aec0] dark:text-white px-1.5"
              required
            />
          </fieldset>
          <fieldset className="border-[2px] p-2 rounded-lg dark:border-navy-200">
            <legend
              id="classXyz"
              className="text-xl text-navy-700 dark:text-white px-1.5"
            >
              Hospital Name<span className="text-red-500">*</span>
            </legend>
            <input
              type="text"
              name="reg_no"
              id="reg_no"
              placeholder=""
              className="outline-none w-full bg-[#00000000] text-[#a0aec0] dark:text-white px-1.5"
              required
            />
          </fieldset>

          <fieldset className="border-[2px] p-2 rounded-lg dark:border-navy-200">
            <legend
              id="classXyz"
              className="text-xl text-navy-700 dark:text-white px-1.5"
            >
              Doctor Name<span className="text-red-500">*</span>
            </legend>
            <input
              type="text"
              name="reg_no"
              id="reg_no"
              placeholder=""
              className="outline-none w-full bg-[#00000000] text-[#a0aec0] dark:text-white px-1.5"
              required
            />
          </fieldset>
          <fieldset className="border-[2px] p-2 rounded-lg dark:border-navy-200 col-span-2">
            <legend
              id="classXyz"
              className="text-xl text-navy-700 dark:text-white px-1.5"
            >
              Checkup Report<span className="text-red-500">*</span>
            </legend>
            <input
              type="file"
              name="reg_no"
              id="reg_no"
              placeholder=""
              className="outline-none w-full bg-[#00000000] text-[#a0aec0] dark:text-white px-1.5"
              required
            />
          </fieldset>
          <fieldset className="border-[2px] p-2 rounded-lg dark:border-navy-200">
            <legend
              id="classXyz"
              className="text-xl text-navy-700 dark:text-white px-1.5"
            >
              Blood Group<span className="text-red-500">*</span>
            </legend>
            <input
              type="text"
              name="reg_no"
              id="reg_no"
              placeholder=""
              className="outline-none w-full bg-[#00000000] text-[#a0aec0] dark:text-white px-1.5"
              required
            />
          </fieldset>
          <fieldset className="border-[2px] p-2 rounded-lg dark:border-navy-200">
            <legend
              id="classXyz"
              className="text-xl text-navy-700 dark:text-white px-1.5"
            >
              Blood Pressure Level<span className="text-red-500">*</span>
            </legend>
            <input
              type="text"
              name="reg_no"
              id="reg_no"
              placeholder=""
              className="outline-none w-full bg-[#00000000] text-[#a0aec0] dark:text-white px-1.5"
              required
            />
          </fieldset>
          <fieldset className="border-[2px] p-2 rounded-lg dark:border-navy-200">
            <legend
              id="classXyz"
              className="text-xl text-navy-700 dark:text-white px-1.5"
            >
              Hemoglobin Level<span className="text-red-500">*</span>
            </legend>
            <input
              type="text"
              name="reg_no"
              id="reg_no"
              placeholder=""
              className="outline-none w-full bg-[#00000000] text-[#a0aec0] dark:text-white px-1.5"
              required
            />
          </fieldset>
          <fieldset className="border-[2px] p-2 rounded-lg dark:border-navy-200">
            <legend
              id="classXyz"
              className="text-xl text-navy-700 dark:text-white px-1.5"
            >
              Diabetes Level<span className="text-red-500">*</span>
            </legend>
            <input
              type="text"
              name="reg_no"
              id="reg_no"
              placeholder=""
              className="outline-none w-full bg-[#00000000] text-[#a0aec0] dark:text-white px-1.5"
              required
            />
          </fieldset>
          <fieldset className="border-[2px] p-2 rounded-lg dark:border-navy-200 flex justify-start items-center">
            <legend className="text-xl text-navy-700 dark:text-white px-1.5">
              Student Has HIV<span className="text-red-500">*</span>
            </legend>
            <label
              htmlFor="hiv-yes"
              className="outline-none w-auto bg-[#00000000] text-[#a0aec0] dark:text-white px-1.5 flex items-center justify-ceter"
            >
              <Radio
                name={"gender"}
                id={"hiv-yes"}
                extra="outine-none"
                color="red"
                required
              />
              Yes
            </label>
            <label
              htmlFor="hiv-no"
              className="outline-none w-auto bg-[#00000000] text-[#a0aec0] dark:text-white px-1.5 flex items-center justify-ceter"
            >
              <Radio
                name={"gender"}
                id={"hiv-no"}
                extra="outine-none"
                color="green"
                defaultChecked
                required
              />
              No
            </label>
          </fieldset>
          <fieldset className="border-[2px] p-2 rounded-lg dark:border-navy-200 flex justify-start items-center">
            <legend
              id="classXyz"
              className="text-xl text-navy-700 dark:text-white px-1.5"
            >
              TB Infection<span className="text-red-500">*</span>
            </legend>
            <label
              htmlFor="tb-yes"
              className="outline-none w-auto bg-[#00000000] text-[#a0aec0] dark:text-white px-1.5 flex items-center justify-ceter"
            >
              <Radio
                name={"gender"}
                id={"tb-yes"}
                extra="outine-none"
                color="red"
                required
              />
              Yes
            </label>
            <label
              htmlFor="tb-no"
              className="outline-none w-auto bg-[#00000000] text-[#a0aec0] dark:text-white px-1.5 flex items-center justify-ceter"
            >
              <Radio
                name={"gender"}
                id={"tb-no"}
                extra="outine-none"
                color="green"
                required
              />
              No
            </label>
          </fieldset>

          <fieldset className="border-[2px] p-2 rounded-lg dark:border-navy-200 flex justify-start items-center">
            <legend
              id="classXyz"
              className="text-xl text-navy-700 dark:text-white px-1.5"
            >
              Eye Problem<span className="text-red-500">*</span>
            </legend>
            <label
              htmlFor="eye-problem-yes"
              className="outline-none w-auto bg-[#00000000] text-[#a0aec0] dark:text-white px-1.5 flex items-center justify-ceter"
            >
              <Radio
                name={"gender"}
                id={"eye-problem-yes"}
                extra="outine-none"
                color="orange"
                required
              />
              Yes
            </label>
            <label
              htmlFor="eye-problem-no"
              className="outline-none w-auto bg-[#00000000] text-[#a0aec0] dark:text-white px-1.5 flex items-center justify-ceter"
            >
              <Radio
                name={"gender"}
                id={"eye-problem-no"}
                extra="outine-none"
                color="green"
                required
              />
              No
            </label>
          </fieldset>
          <fieldset className="border-[2px] p-2 rounded-lg dark:border-navy-200 flex justify-start items-center">
            <legend
              id="classXyz"
              className="text-xl text-navy-700 dark:text-white px-1.5"
            >
              Eye Specs<span className="text-red-500">*</span>
            </legend>
            <label
              htmlFor="specs-yes"
              className="outline-none w-auto bg-[#00000000] text-[#a0aec0] dark:text-white px-1.5 flex items-center justify-ceter"
            >
              <Radio
                name={"gender"}
                id={"specs-yes"}
                extra="outine-none"
                color="yellow"
                required
              />
              Yes
            </label>
            <label
              htmlFor="specs-no"
              className="outline-none w-auto bg-[#00000000] text-[#a0aec0] dark:text-white px-1.5 flex items-center justify-ceter"
            >
              <Radio
                name={"gender"}
                id={"specs-no"}
                extra="outine-none"
                color="green"
                required
              />
              No
            </label>
          </fieldset>
          <fieldset className="border-[2px] p-2 rounded-lg dark:border-navy-200">
            <legend
              id="classXyz"
              className="text-xl text-navy-700 dark:text-white px-1.5"
            >
              Health Marks<span className="text-red-500">*</span>
            </legend>
            <input
              type="number"
              name="reg_no"
              id="reg_no"
              placeholder="At The Time Of Admission"
              className="outline-none w-full bg-[#00000000] text-[#a0aec0] dark:text-white px-1.5"
              required
            />
          </fieldset>
          <fieldset className="border-[2px] p-2 rounded-lg dark:border-navy-200">
            <legend
              id="classXyz"
              className="text-xl text-navy-700 dark:text-white px-1.5"
            >
              Description<span className="text-red-500">*</span>
            </legend>
            <input
              type="number"
              name="reg_no"
              id="reg_no"
              placeholder="At The Time Of Admission"
              className="outline-none w-full bg-[#00000000] text-[#a0aec0] dark:text-white px-1.5"
              required
            />
          </fieldset>
          <fieldset className="border-[2px] p-2 rounded-lg dark:border-navy-200 col-span-2">
            <legend
              id="classXyz"
              className="text-xl text-navy-700 dark:text-white px-1.5"
            >
              Remark<span className="text-red-500">*</span>
            </legend>
            <input
              type="number"
              name="reg_no"
              id="reg_no"
              placeholder="At The Time Of Admission"
              className="outline-none w-full bg-[#00000000] text-[#a0aec0] dark:text-white px-1.5"
              required
            />
          </fieldset>
          <fieldset className="pt-4">
            <Button name="Submit" style="blue" onCLick={() => console.log("clicked")} />
          </fieldset>
        </div>
      </Card>
    </>
  );
};

export default StudentMedicalFitness;
