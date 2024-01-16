import Button from "../../../../../components/button/Button";
import Card from "../../../../../components/card";
import FillAttendanceTable from "./components/FillAttendanceTable";

const FillStudentAttendance = () => {
  const currentDate = new Date();
  return (
    <>
      <Card className="rounded-xl bg-white dark:bg-navy-800 p-5 mb-5">
        <h2 className="text-2xl font-bold dark:text-white">
          Find Attendance Register
        </h2>
        <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-5">
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
              <option value="Select Section">Select Section</option>
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
              value={`${currentDate.getFullYear()}-${
                currentDate.getMonth() < 10 ? "0" : ""
              }${currentDate.getMonth() + 1}-${currentDate.getDate()}`}
              className="w-full h-full uppercase text-gray-500 bg-[transparent] focus:outline-none"
            />
          </fieldset>
          <fieldset className="border-[2px] p-2 rounded-lg dark:border-navy-200">
            <legend
              id="classXyz"
              className="text-xl text-navy-700 dark:text-white px-1.5"
            >
              Default Attendance<span className="text-red-500">*</span>
            </legend>
            <select
              name="classXyz"
              id="classXyz"
              className="outline-none w-full bg-[#00000000] text-[#a0aec0] dark:text-white px-1.5"
              required
            >
              <option value="Default Attendance">Default Attendance</option>
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
              <option value="Student Name(ASC)">Student Name(ASC)</option>
            </select>
          </fieldset>
        </div>
        <fieldset className="border-0 pt-4 rounded-lg">
          <Button
            name={<span>Fill Attendance</span>}
            onCLick={() => console.log("clicked")}
            style="blue"
            extras="w-fit h-fit mr-2"
          />
          <Button
            name={<span>View Attendance</span>}
            onCLick={() => console.log("clicked")}
            style="blue"
            extras="w-fit h-fit"
          />
        </fieldset>
      </Card>
      <FillAttendanceTable tableData={[1,1,1,1,1]} tableName={{ClassName:"Class 9-[A]", ClassStrength:45, BoysStrength:20, GirlsStrength:25}} />
    </>
  );
};

export default FillStudentAttendance;
