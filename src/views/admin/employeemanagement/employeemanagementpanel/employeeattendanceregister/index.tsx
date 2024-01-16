import Card from "../../../../../components/card";
import EmployeeAttendanceRegisterList from "./components/EmployeeAttendaceRegisterList";

const EmployeeAttendanceRegister = () => {
  return (
    <>
      <Card className="rounded-xl bg-white dark:bg-navy-800 p-5 mb-5">
        <h2 className="text-2xl font-bold dark:text-white">
          Search For Department
        </h2>
        <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-4">
          <fieldset className="border-[2px] p-2 rounded-lg dark:border-navy-200">
            <legend className="text-xl text-navy-700 dark:text-white px-1.5">
              Department
              <span className="text-red-500">*</span>
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
        </div>
      </Card>
      <EmployeeAttendanceRegisterList
        tableData={[1, 1, 1, 1]}
        tableName="Employee List"
      />
    </>
  );
};

export default EmployeeAttendanceRegister;
