import Button from "../../../../../components/button/Button"
import Card from "../../../../../components/card"
import SiblingReportList from "./components/SiblingReportList"

const SiblingReport = () => {
  return (
    <>
      <Card className="rounded-xl bg-white dark:bg-navy-800 p-5 mb-5">
      <h2 className="text-2xl font-bold dark:text-white">Sibling List</h2>
      <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-4">
        <fieldset className="border-[2px] p-2 rounded-lg dark:border-navy-200">
          <legend
            id="classXyz"
            className="text-xl text-navy-700 dark:text-white px-1.5"
          >
            Child Count<span className="text-red-500">*</span>
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
        <fieldset className="border-0 pt-4 rounded-lg">
            <Button
              name={<span>Get List</span>}
              onCLick={() => console.log("clicked")}
              style="blue"
              extras="w-fit h-fit"
            />
          </fieldset>
      </div>
    </Card>
      <Card className="rounded-xl bg-white dark:bg-navy-800 p-5 mb-5">
        <h2 className="text-2xl font-bold dark:text-white">
          Sibling Report
        </h2>
        <SiblingReportList
          tableData={[1, 1, 1, 1, 1, 1, 1]}
          tableName="Student Siblings Info"
        />
      </Card>
    </>
  )
}

export default SiblingReport