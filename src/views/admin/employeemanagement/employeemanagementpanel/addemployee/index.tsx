import Card from "../../../../../components/card";
import Checkbox from "../../../../../components/checkbox";
import Radio from "../../../../../components/radio";

const AddEmployee = () => {
  return (
    <form action="#" className="mx-auto mb-auto h-full min-h-[84vh]">
      <Card className="rounded-xl bg-white dark:bg-navy-800 p-5 mb-5">
        <h2 className="text-2xl font-bold dark:text-white">Add Employee</h2>
        <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-4">
          <fieldset className="border-[2px] p-2 rounded-lg dark:border-navy-200">
            <legend className="text-xl text-navy-700 dark:text-white px-1.5">
              Employee Name
              <span className="text-red-500">*</span>
            </legend>
            <input
              lang="ja"
              type="number"
              name="reg_no"
              id="reg_no"
              placeholder="Enter Employee Name"
              className="outline-none w-full bg-[#00000000] dark:text-white px-1.5 data-[]:"
              required
            />
          </fieldset>
          <fieldset className="border-[2px] p-2 rounded-lg dark:border-navy-200 flex justify-start items-center">
            <legend className="text-xl text-navy-700 dark:text-white px-1.5">
              Gender<span className="text-red-500">*</span>
            </legend>
            <label
              htmlFor="gender-male"
              className="outline-none w-auto bg-[#00000000] text-[#a0aec0] dark:text-white px-1.5 flex items-center justify-ceter"
            >
              <Radio
                name={"gender"}
                id={"gender-male"}
                extra="outine-none"
                required
              />
              Male
            </label>
            <label
              htmlFor="gender-female"
              className="outline-none w-auto bg-[#00000000] text-[#a0aec0] dark:text-white px-1.5 flex items-center justify-ceter"
            >
              <Radio
                name={"gender"}
                id={"gender-female"}
                extra="outine-none"
                required
              />
              Female
            </label>
          </fieldset>
          <fieldset className="border-[2px] p-2 rounded-lg dark:border-navy-200">
            <legend className="text-xl text-navy-700 dark:text-white px-1.5">
              Date Of Birth<span className="text-red-500">*</span>
            </legend>
            <input
              type="date"
              name="reg_date"
              id="reg_date"
              placeholder="Enter Registration Number"
              className="outline-none w-full bg-[#00000000] text-[#a0aec0] dark:text-white px-1.5"
              required
            />
          </fieldset>
          <fieldset className="border-[2px] p-2 rounded-lg dark:border-navy-200">
            <legend className="text-xl text-navy-700 dark:text-white px-1.5">
              Email Address<span className="text-red-500">*</span>
            </legend>
            <input
              type="text"
              name="reg_no"
              id="reg_no"
              placeholder="Enter Registration Number"
              className="outline-none w-full bg-[#00000000] text-[#a0aec0] dark:text-white px-1.5"
              required
            />
          </fieldset>
          <fieldset className="border-[2px] p-2 rounded-lg dark:border-navy-200">
            <legend className="text-xl text-navy-700 dark:text-white px-1.5">
              Contact No.<span className="text-red-500">*</span>
            </legend>
            <input
              type="text"
              name="reg_no"
              id="reg_no"
              placeholder="Enter Registration Number"
              className="outline-none w-full bg-[#00000000] text-[#a0aec0] dark:text-white px-1.5"
              required
            />
          </fieldset>
          <fieldset className="border-[2px] p-2 rounded-lg dark:border-navy-200">
            <legend className="text-xl text-navy-700 dark:text-white px-1.5">
              Alt Contact No.<span className="text-red-500">*</span>
            </legend>
            <input
              type="text"
              placeholder="Enter Mother Name"
              className="outline-none w-full bg-[#00000000] text-[#a0aec0] dark:text-white px-1.5"
              required
            />
          </fieldset>
          <fieldset className="border-[2px] p-2 rounded-lg dark:border-navy-200">
            <legend className="text-xl text-navy-700 dark:text-white px-1.5">
              Whatsapp No.<span className="text-red-500">*</span>
            </legend>
            <input
              type="text"
              placeholder="Enter Mother Name"
              className="outline-none w-full bg-[#00000000] text-[#a0aec0] dark:text-white px-1.5"
              required
            />
          </fieldset>
          <fieldset className="border-[2px] p-2 rounded-lg dark:border-navy-200">
            <legend
              id="classXyz"
              className="text-xl text-navy-700 dark:text-white px-1.5"
            >
              Category<span className="text-red-500">*</span>
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
            <legend className="text-xl text-navy-700 dark:text-white px-1.5">
              Religion<span className="text-red-500">*</span>
            </legend>
            <select
              name=""
              id=""
              className="outline-none w-full bg-[#00000000] text-[#a0aec0] dark:text-white px-1.5"
              required
            >
              <option value="Select Class">Select Class</option>
              <option value="Select Class">Select Class</option>
              <option value="Select Class">Select Class</option>
              <option value="Select Class">Select Class</option>
            </select>
          </fieldset>
          <fieldset className="border-[2px] p-2 rounded-lg dark:border-navy-200">
            <legend className="text-xl text-navy-700 dark:text-white px-1.5">
              Blood Group<span className="text-red-500">*</span>
            </legend>
            <select
              name=""
              id=""
              className="outline-none w-full bg-[#00000000] text-[#a0aec0] dark:text-white px-1.5"
              required
            >
              <option value="Select Class">Select Class</option>
              <option value="Select Class">Select Class</option>
              <option value="Select Class">Select Class</option>
              <option value="Select Class">Select Class</option>
            </select>
          </fieldset>
          <fieldset className="border-[2px] p-2 rounded-lg dark:border-navy-200">
            <legend className="text-xl text-navy-700 dark:text-white px-1.5">
              Department<span className="text-red-500">*</span>
            </legend>
            <select
              name=""
              id=""
              className="outline-none w-full bg-[#00000000] text-[#a0aec0] dark:text-white px-1.5"
              required
            >
              <option value="Select Class">Select Class</option>
              <option value="Select Class">Select Class</option>
              <option value="Select Class">Select Class</option>
              <option value="Select Class">Select Class</option>
            </select>
          </fieldset>
          <fieldset className="border-[2px] p-2 rounded-lg dark:border-navy-200">
            <legend className="text-xl text-navy-700 dark:text-white px-1.5">
              Designation<span className="text-red-500">*</span>
            </legend>
            <select
              name=""
              id=""
              className="outline-none w-full bg-[#00000000] text-[#a0aec0] dark:text-white px-1.5"
              required
            >
              <option value="Select Class">Select Class</option>
              <option value="Select Class">Select Class</option>
              <option value="Select Class">Select Class</option>
              <option value="Select Class">Select Class</option>
            </select>
          </fieldset>
          <div className="">
            <div className="flex items-center mb-5">
              <Checkbox id={"check_for_message"} required />{" "}
              <label
                className="text-xl text-navy-700 dark:text-white px-1.5"
                htmlFor="check_for_message"
              >
                Check For Messages
              </label>
            </div>
            <div>
              <button
                type="submit"
                className="rounded-xl bg-brand-500 px-5 py-3 text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
              >
                Add Employee
              </button>
            </div>
          </div>
        </div>
      </Card>
    </form>
  );
};

export default AddEmployee;
