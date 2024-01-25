import { Textarea } from "@chakra-ui/react";
import Button from "../../../../../components/button/Button";
import Card from "../../../../../components/card";
import FillAttendanceTable from "./components/FillAttendanceTable";
import DropdownAlt from "../../../../../components/dropdown/index_alt";
import { useState } from "react";
import { IoLanguage } from "react-icons/io5";
import { useCookies } from "react-cookie";
import "./fillstudentattendance.css";

const FillStudentAttendance = () => {
  const [cookie, setCookie] = useCookies();
  const currentDate = new Date();
  const [open, setOpen] = useState(false);
  const transparent = false;

  const getGujaratiDate = () => {
    const currentDate = new Date();

    const gujaratiMonths = [
      "જાન્યુઆરી",
      "ફેબ્રુઆરી",
      "માર્ચ",
      "એપ્રિલ",
      "મે",
      "જૂન",
      "જુલાઈ",
      "ઑગસ્ટ",
      "સપ્ટેમ્બર",
      "ઑક્ટોબર",
      "નવેમ્બર",
      "ડિસેમ્બર",
    ];

    const gujaratiDays = [
      "રવિવાર",
      "સોમવાર",
      "મંગળવાર",
      "બુધવાર",
      "ગુરુવાર",
      "શુક્રવાર",
      "શનિવાર",
    ];

    const gujaratiMonth = gujaratiMonths[currentDate.getMonth()];
    const gujaratiDay = gujaratiDays[currentDate.getDay()];

    return `${gujaratiDay}, ${currentDate.getDate()} ${gujaratiMonth} ${currentDate.getFullYear()}`;
  };

  const getHindiDate = () => {
    const currentDate = new Date();

    const hindiMonths = [
      "जनवरी",
      "फ़रवरी",
      "मार्च",
      "अप्रैल",
      "मई",
      "जून",
      "जुलाई",
      "अगस्त",
      "सितंबर",
      "अक्टूबर",
      "नवंबर",
      "दिसंबर",
    ];

    const hindiDays = [
      "रविवार",
      "सोमवार",
      "मंगलवार",
      "बुधवार",
      "गुरुवार",
      "शुक्रवार",
      "शनिवार",
    ];

    const hindiMonth = hindiMonths[currentDate.getMonth()];
    const hindiDay = hindiDays[currentDate.getDay()];

    return `${hindiDay}, ${currentDate.getDate()} ${hindiMonth} ${currentDate.getFullYear()}`;
  };

  const getEnglishDate = () => {
    const currentDate = new Date();

    const englishMonths = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const englishDays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const englishMonth = englishMonths[currentDate.getMonth()];
    const englishDay = englishDays[currentDate.getDay()];

    return `${englishDay}, ${currentDate.getDate()} ${englishMonth} ${currentDate.getFullYear()}`;
  };

  const TranslateMessage = (p: { hi: string; en: string; gu: string }) => {
    let lang = cookie.preferedMessageLanguage;
    if (lang === "gu") return p.gu;
    if (lang === "hi") return p.hi;
    return p.en;
  };

  return (
    <>
      <Card className="rounded-xl bg-white dark:bg-navy-800 p-5 mb-5">
        <h2 className="text-2xl font-bold dark:text-white">
          Find Student Attendance Register
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
        <fieldset className="border-0 pt-4 rounded-lg flex justify-end">
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
        <header className="relative flex items-center justify-between">
          <h2 className="text-2xl font-bold dark:text-white">
            Attendance Message Panel
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
                  onClick={() => {
                    setCookie("preferedMessageLanguage", "en");
                    setOpen(false);
                  }}
                >
                  English
                </p>
                <p
                  className="hover:text-black mt-2 flex cursor-pointer items-center gap-2 pt-1 text-gray-600 hover:text-gray-300"
                  onClick={() => {
                    setCookie("preferedMessageLanguage", "gu");
                    setOpen(false);
                  }}
                >
                  Gujarati
                </p>
                <p
                  className="hover:text-black mt-2 flex cursor-pointer items-center gap-2 pt-1 text-gray-600 hover:text-gray-300"
                  onClick={() => {
                    setCookie("preferedMessageLanguage", "hi");
                    setOpen(false);
                  }}
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
              id="meesage_textArea"
              css={"height:10em"}
              placeholder={TranslateMessage({
                en: `Dear Parent, Your Ward student_name is PRESENT Today ${getEnglishDate()}, Regards P.P SAVANI SCHOOL.`,
                gu: `પ્રિય વાલીઓ, તમારા વોર્ડના વિદ્યાર્થીનું_નામ આજે ${getGujaratiDate()} ના રોજ હાજર છે, P.P સવાણી શાળાને સાદર`,
                hi: `प्रिय माता-पिता, आपके वार्ड के छात्र का नाम आज ${getHindiDate()} को प्रस्तुत है, सादर पी.पी. सवानी स्कूल।`,
              })}
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
              id="meesage_textArea"
              css={"height:10em"}
              placeholder={TranslateMessage({
                en: `Dear Parent, Your Ward student_name is on HALF DAY Today ${getEnglishDate()}, Regards P.P SAVANI SCHOOL.`,
                gu: `પ્રિય વાલીઓ, તમારા વોર્ડના વિદ્યાર્થીનું_નામ આજે ${getGujaratiDate()} ના રોજ હાજર છે, P.P સવાણી શાળાને સાદર`,
                hi: `प्रिय माता-पिता, आपके वार्ड के छात्र का नाम आज ${getHindiDate()} को हाफ डे पर है, सादर पी.पी. सवानी स्कूल।`,
              })}
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
              id="meesage_textArea"
              css={"height:10em"}
              placeholder={TranslateMessage({
                en: `Dear Parent, Your Ward student_name is on ABSENT Today ${getEnglishDate()}, Regards P.P SAVANI SCHOOL.`,
                gu: `પ્રિય વાલીઓ, તમારા વોર્ડના વિદ્યાર્થીનું_નામ આજે ${getGujaratiDate()} ના ગેરહાજર છે, P.P સવાણી શાળાને સાદર`,
                hi: `प्रिय माता-पिता, आपके वार्ड के छात्र का नाम आज ${getHindiDate()} को अनुपस्थित है, सादर पी.पी. सवानी स्कूल।`,
              })}
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
              id="meesage_textArea"
              css={"height:10em"}
              placeholder={TranslateMessage({
                en: `Dear Parent, Your Ward student_name is on Leave Today ${getEnglishDate()}, Regards P.P SAVANI SCHOOL.`,
                gu: `પ્રિય વાલીઓ, તમારા વોર્ડના વિદ્યાર્થીનું_નામ આજે ${getGujaratiDate()} ના રોજ રજા પર છે, P.P સવાણી શાળાને સાદર`,
                hi: `प्रिय माता-पिता, आपके वार्ड के छात्र का नाम आज ${getHindiDate()} को छुट्टी पर है, सादर पी.पी. सवानी स्कूल।`,
              })}
            />
          </fieldset>
        </div>
      </Card>
    </>
  );
};

export default FillStudentAttendance;
