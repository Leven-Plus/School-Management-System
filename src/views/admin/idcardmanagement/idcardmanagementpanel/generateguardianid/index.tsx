import Button from "../../../../../components/button/Button"
import Card from "../../../../../components/card"
import GuardianIdGenerateList from "./components/GuardianIdGenerateList"

const GenerateGuardianID = () => {
  return (
   
    <Card className="rounded-xl bg-white dark:bg-navy-800 p-5 mb-5">
    <h2 className="text-2xl font-bold dark:text-white">Find Students</h2>
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
          Student House<span className="text-red-500">*</span>
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
          Page Type<span className="text-red-500">*</span>
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
      <fieldset className="border-0 pt-4 rounded-lg">
      </fieldset>
    </div>
    <GuardianIdGenerateList tableData={[1,1,1,1,1,1,1]} tableName="Students ID" />
    <div className="flex justify-center items-center">
        <Button
          name={<span>Generate</span>}
          onCLick={() => console.log("clicked")}
          style="blue"
          extras="w-fit h-fit"
        />
    </div>
  </Card>
  )
}

export default GenerateGuardianID