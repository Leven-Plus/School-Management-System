import React, { useState } from "react";
import Card from "../../../../../components/card";
import { Textarea } from "@chakra-ui/react";
import DropdownAlt from "../../../../../components/dropdown/index_alt";
import { IoLanguage } from "react-icons/io5";
import RfidAttendanceList from "./components/RfidAttendanceList";

const EmployeeRfidManagement: React.FC = () => {
  const [open, setOpen] = useState(false);
  const transparent = false;
  return (
    <div className="mt-3 h-max grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-4 items-start relative">
      <Card className="rounded-xl bg-white dark:bg-navy-800 p-5 mb-5 sticky top-[110px]">
        <h2 className="text-2xl font-bold dark:text-white">
          Student RFID Details
        </h2>
        <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-1 lg:grid-cols-1 2xl:grid-cols-1 3xl:grid-cols-1">
          <fieldset className="border-[2px] p-2 rounded-lg dark:border-navy-200">
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
              <option value="Select Class">Search Student</option>
            </select>
          </fieldset>
          <Card className="rounded-xl bg-white dark:bg-navy-800 mt-2">
            <header className="relative flex items-center justify-between mb-2">
              <h2 className="text-2xl font-bold dark:text-white">
                Message Language
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
                animation={
                  "origin-top-right transition-all duration-300 ease-in-out"
                }
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
            <fieldset className="border-[2px] p-2 rounded-lg dark:border-navy-200">
              <legend className="text-xl text-navy-700 dark:text-white px-1.5 flex justify-center items-center mx-2">
                <input
                  type="checkbox"
                  name=""
                  id="present-student"
                  className="mr-1"
                />{" "}
                <label htmlFor="present-student">Present Employee</label>
              </legend>
              <Textarea
                css={"height:10em"}
                defaultValue={`Dear Emp_name, Your Attendance Has Successfully Been Updated At ${new Date().toLocaleString()}. Regards, P.P SAVANI SCHOOL.`}
                placeholder="Write Message Here..."
              />
            </fieldset>
          </Card>
        </div>
      </Card>
      <RfidAttendanceList tableData={Array(50)?.fill("xyz")} tableName="Today's Student RFID Attendance" />
    </div>
  );
};

export default EmployeeRfidManagement;
