import Card from "../../../../../components/card";
import Checkbox from "../../../../../components/checkbox";
import Radio from "../../../../../components/radio";
import "./studentregistration.css";

const StudentRegistrationForm = () => {
  function convertToWords(date: string) {
    var days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    var months = [
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

    var dateParts: any = date.split("-");
    var dateObject: any = new Date(
      +dateParts[2],
      dateParts[1] - 1,
      +dateParts[0]
    );

    var dayName = days[dateObject.getDay()];
    var monthName = months[dateObject.getMonth()];
    var dateNumber = dateObject.getDate();

    return `${dayName}, ${monthName} ${dateNumber}, ${dateParts[2]}`;
  }

  function getAge(date: string) {
    const [day, month, year]: any = date.split("-");
    const birthDate = new Date(year, month - 1, day);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  const I18n = (p: { hi: string; en: string; gu: string }) => {
    let lang = "";

    if (lang === "gu") return p.gu;
    if (lang === "hi") return p.hi;
    return p.en;
  };

  return (
    <form action="#" className="mx-auto mb-auto h-full min-h-[84vh]">
      <Card className="rounded-xl bg-white dark:bg-navy-800 p-5 mb-5">
        <h2 className="text-2xl font-bold dark:text-white">Personal Details</h2>
        <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-4">
          <fieldset className="border-[2px] p-2 rounded-lg dark:border-navy-200">
            <legend className="text-xl text-navy-700 dark:text-white px-1.5">
              <I18n hi="नाॊंदणी क्रमांक" gu="idk" en="Registration No" />
              <span className="text-red-500">*</span>
            </legend>
            <input
              lang="ja"
              type="number"
              name="reg_no"
              id="reg_no"
              placeholder="Enter Registration Number"
              className="outline-none w-full bg-[#00000000] dark:text-white px-1.5 data-[]:"
              required
            />
          </fieldset>
          <fieldset className="border-[2px] p-2 rounded-lg dark:border-navy-200">
            <legend className="text-xl text-navy-700 dark:text-white px-1.5">
              Registration Date<span className="text-red-500">*</span>
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
            <legend id="classXyz" className="text-xl text-navy-700 dark:text-white px-1.5">
              Class<span className="text-red-500">*</span>
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
              Section<span className="text-red-500">*</span>
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
          {/* ////////// */}
          <fieldset className="border-[2px] p-2 rounded-lg dark:border-navy-200">
            <legend className="text-xl text-navy-700 dark:text-white px-1.5">
              Student Name<span className="text-red-500">*</span>
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
              Father Name<span className="text-red-500">*</span>
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
              Mother Name<span className="text-red-500">*</span>
            </legend>
            <input
              type="text"
              placeholder="Enter Mother Name"
              className="outline-none w-full bg-[#00000000] text-[#a0aec0] dark:text-white px-1.5"
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
                <Radio name={"gender"} id={"gender-male"} extra="outine-none" required />
                Male
              </label>
              <label
                htmlFor="gender-female"
                className="outline-none w-auto bg-[#00000000] text-[#a0aec0] dark:text-white px-1.5 flex items-center justify-ceter"
              >
                <Radio name={"gender"} id={"gender-female"} extra="outine-none" required />
                Female
              </label>
          </fieldset>
          {/* ///////////// */}
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
          <fieldset className="border-[2px] p-2 rounded-lg dark:border-navy-200 col-span-2">
            <legend className="text-xl text-navy-700 dark:text-white px-1.5">
              Date Of Birth In Words<span className="text-red-500">*</span>
            </legend>
            <input
              type="text"
              name="reg_no"
              id="reg_no"
              placeholder="Enter Date Of Birth In Words"
              className="outline-none w-full bg-[#00000000] text-[#a0aec0] dark:text-white px-1.5"
              required
            />
          </fieldset>
          <fieldset className="border-[2px] p-2 rounded-lg dark:border-navy-200">
            <legend className="text-xl text-navy-700 dark:text-white px-1.5">
              Student Age<span className="text-red-500">*</span>
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
          {/* ///////////////////// */}
          <fieldset className="border-[2px] p-2 rounded-lg dark:border-navy-200">
            <legend className="text-xl text-navy-700 dark:text-white px-1.5">
              Contact Number
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
          <fieldset className="border-[2px] p-2 rounded-lg dark:border-navy-200">
            <legend className="text-xl text-navy-700 dark:text-white px-1.5">
              Whatsapp Number
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
          <fieldset className="border-[2px] p-2 rounded-lg dark:border-navy-200">
            <legend className="text-xl text-navy-700 dark:text-white px-1.5">
              Father Contact No1<span className="text-red-500">*</span>
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
            <legend className="text-xl text-navy-700 dark:text-white px-1.5">
              Communication Email<span className="text-red-500">*</span>
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
          {/* ////////////////////// */}
          <fieldset className="border-[2px] p-2 rounded-lg dark:border-navy-200">
            <legend className="text-xl text-navy-700 dark:text-white px-1.5">
              Student Old/New<span className="text-red-500">*</span>
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
              Admission Type<span className="text-red-500">*</span>
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
              Admission Scheme<span className="text-red-500">*</span>
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
              Library<span className="text-red-500">*</span>
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
              Fee Category<span className="text-red-500">*</span>
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
        </div>
      </Card>
      <Card className="rounded-xl bg-white dark:bg-navy-800 p-5 mb-5">
        <h2 className="text-2xl font-bold dark:text-white">
          Present Address Details
        </h2>
        <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-4">
          <fieldset className="border-[2px] p-2 rounded-lg dark:border-navy-200">
            <legend className="text-xl text-navy-700 dark:text-white px-1.5">
              Student Address Line 1<span className="text-red-500">*</span>
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
            <legend className="text-xl text-navy-700 dark:text-white px-1.5">
              Student Address Line 2<span className="text-red-500">*</span>
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
            <legend className="text-xl text-navy-700 dark:text-white px-1.5">
              Town/Village<span className="text-red-500">*</span>
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
            <legend className="text-xl text-navy-700 dark:text-white px-1.5">
              City/Block<span className="text-red-500">*</span>
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
            <legend className="text-xl text-navy-700 dark:text-white px-1.5">
              District<span className="text-red-500">*</span>
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
            <legend className="text-xl text-navy-700 dark:text-white px-1.5">
              State<span className="text-red-500">*</span>
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
            <legend className="text-xl text-navy-700 dark:text-white px-1.5">
              Pincode<span className="text-red-500">*</span>
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
            <legend className="text-xl text-navy-700 dark:text-white px-1.5">
              Landmark<span className="text-red-500">*</span>
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
        <h2 className="text-2xl font-bold dark:text-white">Other Details</h2>
        <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-4">
          <fieldset className="border-[2px] p-2 rounded-lg dark:border-navy-200">
            <legend className="text-xl text-navy-700 dark:text-white px-1.5">
              Student Photo
            </legend>
            <input
              type="file"
              name="student_photo"
              id="student_photo"
              placeholder="Upload a Photo"
            />
          </fieldset>
          <fieldset className="border-[2px] p-2 rounded-lg dark:border-navy-200">
            <legend className="text-xl text-navy-700 dark:text-white px-1.5">
              Remark
            </legend>
            <textarea
              name="reg_no"
              id="reg_no"
              placeholder="Enter Remark"
              className="outline-none w-full h-full bg-[#00000000] text-[#a0aec0] dark:text-white i px-1.5"
            />
          </fieldset>
          <fieldset className="border-[2px] p-2 rounded-lg dark:border-navy-200">
            <legend className="text-xl text-navy-700 dark:text-white px-1.5">
              Additional Remark
            </legend>
            <textarea
              name="reg_no"
              id="reg_no"
              placeholder="Enter Additional Remark"
              className="outline-none w-full h-full bg-[#00000000] text-[#a0aec0] dark:text-white i px-1.5"
            />
          </fieldset>
          <div className="my-5">
            <div className="flex items-center my-2">
              <Checkbox id={"check_for_message"} required />{" "}
              <label
                className="text-xl text-navy-700 dark:text-white px-1.5"
                htmlFor="check_for_message"
              >
                Check For Messages
              </label>
            </div>
            <div className="flex items-center my-2">
              <Checkbox id={"check_for_registration_fees"} />{" "}
              <label
                className="text-xl text-navy-700 dark:text-white px-1.5"
                htmlFor="check_for_registration_fees"
              >
                Check For Registration Fees
              </label>
            </div>
            <div>
              <button
                type="submit"
                className="rounded-xl bg-brand-500 px-5 py-3 text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </Card>
    </form>
  );
};

export default StudentRegistrationForm;
