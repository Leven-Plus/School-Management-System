import { Textarea } from "@chakra-ui/react";
import Button from "../../../../../components/button/Button";
import Card from "../../../../../components/card";
import FillAttendanceTable from "./components/FillAttendanceTable";
import DropdownAlt from "../../../../../components/dropdown/index_alt";
import { useState } from "react";
import { BsThreeDots, BsThreeDotsVertical } from "react-icons/bs";
import { RiEnglishInput } from "react-icons/ri";
import { IoLanguage } from "react-icons/io5";

const FillStudentAttendance = () => {
  const currentDate = new Date();
  const [open, setOpen] = useState(false);
  const transparent =false;
  
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
      <FillAttendanceTable
        tableData={[1, 1, 1, 1, 1]}
        tableName={{
          ClassName: "Class 9-[A]",
          ClassStrength: 45,
          BoysStrength: 20,
          GirlsStrength: 25,
        }}
      />
      <Card className="rounded-xl bg-white dark:bg-navy-800 p-5 mb-5">
        <header className="relative flex items-center justify-between pt-4">
          <h2 className="text-2xl font-bold dark:text-white">
            Find Class & Update Details
          </h2>
          <DropdownAlt
      open={open}
      setOpen={setOpen}
      button={
        <button
          className={`flex items-center text-xl hover:cursor-pointer ${
            transparent
              ? "bg-none text-white hover:bg-none active:bg-none"
              : "bg-lightPrimary p-2 text-brand-500 hover:bg-gray-100 dark:bg-navy-700 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/10"
          } linear justify-center rounded-lg font-bold transition duration-200`}
        >
          <IoLanguage className="h-6 w-6" />
        </button>
      }
      animation={"origin-top-right transition-all duration-300 ease-in-out"}
      classNames={`${transparent ? "top-8" : "top-11"} right-0 w-max`}
      children={
        <div className="z-50 w-max rounded-xl bg-white py-3 px-4 text-sm shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
          <p
            className="hover:text-black flex cursor-pointer items-center gap-2 text-gray-600 hover:text-gray-300"
            onClick={() => setOpen(false)}
          >
        
            English
          </p>
          <p
            className="hover:text-black mt-2 flex cursor-pointer items-center gap-2 pt-1 text-gray-600 hover:text-gray-300"
            onClick={() => setOpen(false)}
          >
            Gujarati
          </p>
          <p
            className="hover:text-black mt-2 flex cursor-pointer items-center gap-2 pt-1 text-gray-600 hover:text-gray-300"
            onClick={() => setOpen(false)}
          >
            Hindi
          </p>
        </div>
      }
    />
        </header>
        <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-4">
          <fieldset className="border-[2px] p-2 rounded-lg dark:border-navy-200">
            <legend className="text-xl text-navy-700 dark:text-white px-1.5 flex justify-center items-center mx-2">
              <input
                type="checkbox"
                name=""
                id="present-student"
                className="mr-1"
              />{" "}
              <label htmlFor="present-student">Present Student</label>
            </legend>
            <Textarea
              css={"height:10em"}
              defaultValue={`Dear Parent, Your Ward student_name is PRESENT Today ${new Date().toDateString()}, Regards P.P SAVANI SCHOOL.`}
              placeholder="Write Message Here..."
            />
          </fieldset>
          <fieldset className="border-[2px] p-2 rounded-lg dark:border-navy-200">
            <legend className="text-xl text-navy-700 dark:text-white px-1.5 flex justify-center items-center mx-2">
              <input
                type="checkbox"
                name=""
                id="present-student"
                className="mr-1"
              />{" "}
              <label htmlFor="present-student">Half Day Student</label>
            </legend>
            <Textarea
              css={"height:10em"}
              defaultValue={`Dear Parent, Your Ward student_name is on HALF DAY Today ${new Date().toDateString()}, Regards P.P SAVANI SCHOOL.`}
              placeholder="Write Message Here..."
            />
          </fieldset>{" "}
          <fieldset className="border-[2px] p-2 rounded-lg dark:border-navy-200">
            <legend className="text-xl text-navy-700 dark:text-white px-1.5 flex justify-center items-center mx-2">
              <input
                type="checkbox"
                name=""
                id="present-student"
                className="mr-1"
              />{" "}
              <label htmlFor="present-student">Absent Student</label>
            </legend>
            <Textarea
              css={"height:10em"}
              defaultValue={`Dear Parent, Your Ward student_name is ABSENT Today ${new Date().toDateString()}, Regards P.P SAVANI SCHOOL.`}
              placeholder="Write Message Here..."
            />
          </fieldset>{" "}
          <fieldset className="border-[2px] p-2 rounded-lg dark:border-navy-200">
            <legend className="text-xl text-navy-700 dark:text-white px-1.5 flex justify-center items-center mx-2">
              <input
                type="checkbox"
                name=""
                id="present-student"
                className="mr-1"
              />{" "}
              <label htmlFor="present-student">Leave Student</label>
            </legend>
            <Textarea
              css={"height:10em"}
              defaultValue={`Dear Parent, Your Ward student_name is on Leave Today ${new Date().toDateString()}, Regards P.P SAVANI SCHOOL.`}
              placeholder="Write Message Here..."
            />
          </fieldset>
        </div>
      </Card>
    </>
  );
};

export default FillStudentAttendance;
