import StudentLeftList from './components'
import Button from '../../../../../components/button/Button'
import Card from '../../../../../components/card'

const StudentLeft = () => {
  return (
    <>
      <Card className="rounded-xl bg-white dark:bg-navy-800 p-5 mb-5">
        <h2 className="text-2xl font-bold dark:text-white">Student Left</h2>
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
              Class Info<span className="text-red-500">*</span>
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
              Left Date<span className="text-red-500">*</span>
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
          <fieldset className="border-[2px] p-2 rounded-lg dark:border-navy-200 col-span-3">
            <legend
              id="classXyz"
              className="text-xl text-navy-700 dark:text-white px-1.5"
            >
              Left Remark<span className="text-red-500">*</span>
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
          <fieldset className='flex items-center'>
            <Button name="Get List" style='blue' onCLick={() => console.log("clicked")} />
          </fieldset>
        </div>
      </Card>
      <StudentLeftList
        tableData={[1,1,1,1,1,1,1]}
        tableName="Left Students List"
      />
    </>
  )
}

export default StudentLeft