import Card from "../../../../../components/card";
import Radio from "../../../../../components/radio";
import Button from "../../../../../components/button/Button";
import PromotionDemotionList from "./components";

const PromotionDemotion = () => {
  return (
    <>
      <Card className="rounded-xl bg-white dark:bg-navy-800 p-5 mb-5">
        <h2 className="text-2xl font-bold dark:text-white">Search Student</h2>
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
              <option value="Select Class">Parth Degama</option>
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
              Admission Number<span className="text-red-500">*</span>
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
              Student Name<span className="text-red-500">*</span>
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
              Father Name<span className="text-red-500">*</span>
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
              Student Class<span className="text-red-500">*</span>
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
              Class Section<span className="text-red-500">*</span>
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
        </div>
      </Card>
      <Card className="rounded-xl bg-white dark:bg-navy-800 p-5 mb-5">
        <h2 className="text-2xl font-bold dark:text-white">
          Student Promotion/Demotion Management
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
              <option value="Select Class">Parth Degama</option>
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
              <option value="Select Class">Parth Degama</option>
            </select>
          </fieldset>
          <fieldset className="border-[2px] p-2 rounded-lg dark:border-navy-200">
            <legend
              id="classXyz"
              className="text-xl text-navy-700 dark:text-white px-1.5"
            >
              Select Promotion/Demotion<span className="text-red-500">*</span>
            </legend>
            <div className="flex justify-evenly items-center">
              <label
                htmlFor="student-promotion"
                className="flex items-center justify-left"
              >
                <Radio
                  name="promote/demote"
                  color="green"
                  id={`student-promotion`}
                />
                Promote
              </label>

              <label
                htmlFor="student-demotion"
                className="flex items-center justify-left"
              >
                <Radio
                  name="promote/demote"
                  color="red"
                  id={`student-demotion`}
                />
                Demote
              </label>
            </div>
          </fieldset>
          <fieldset className="border-[2px] p-2 rounded-lg dark:border-navy-200">
            <legend
              id="classXyz"
              className="text-xl text-navy-700 dark:text-white px-1.5"
            >
              Promotion/Demotion Date<span className="text-red-500">*</span>
            </legend>
            <input
              type="date"
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
              Promotion/Demotion Reason<span className="text-red-500">*</span>
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
              Promotion/Demotion Remark
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
              Promotion/Demotion Application
              <span className="text-red-500">*</span>
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
          <fieldset className="border-0 p-2 rounded-lg dark:border-navy-200 flex justify-left items-center">
            <Button
              name="Submit"
              onCLick={() => console.log("Clicked")}
              style="blue"
            />
          </fieldset>
        </div>
      </Card>
      <PromotionDemotionList
        tableData={[1, 1, 1, 1, 1, 1, 1]}
        tableName="Promotion/Demotion List"
      />
    </>
  );
};

export default PromotionDemotion;
