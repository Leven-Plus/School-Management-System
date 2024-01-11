import Button from "../../../../../components/button/Button";
import Card from "../../../../../components/card";
import InputField from "../../../../../components/fields/InputField";
import {
  TBody,
  THeade,
  Table,
  Td,
  Th,
  Tr,
} from "../../../../../components/table/Table";

const StudentPhysicalFitness = () => {
  return (
    <>
      <Card className="rounded-xl bg-white dark:bg-navy-800 p-5 mb-5">
        <h2 className="text-2xl font-bold dark:text-white">Search Student</h2>
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
              <option value="Select Class">Select Student</option>
            </select>
          </fieldset>
          <fieldset className="border-[2px] p-2 rounded-lg dark:border-navy-200 col-span-2">
            <legend
              id="classXyz"
              className="text-xl text-navy-700 dark:text-white px-1.5"
            >
              Fitness Test<span className="text-red-500">*</span>
            </legend>
            <select
              name="classXyz"
              id="classXyz"
              className="outline-none w-full bg-[#00000000] text-[#a0aec0] dark:text-white px-1.5"
              required
            >
              <option value="Term-One">Term One</option>
              <option value="Term-Two">Term-Two</option>
            </select>
          </fieldset>
        </div>
      </Card>
      <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-5 3xl:grid-cols-6">
        <Card className="rounded-xl bg-white dark:bg-navy-800 p-5 mb-5 md:col-span-1 lg:col-span-2 2xl:col-span-2 3xl:col-span-2">
          <h2 className="text-2xl font-bold dark:text-white">
            Fitness Test Details
          </h2>
          <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-1 lg:grid-cols-1 2xl:grid-cols-1 3xl:grid-cols-1">
            <fieldset className="border-[2px] p-2 rounded-lg dark:border-navy-200 col-span-2">
              <legend
                id="classXyz"
                className="text-xl text-navy-700 dark:text-white px-1.5"
              >
                Fitness Test Date<span className="text-red-500">*</span>
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
            <fieldset className="border-[2px] p-2 rounded-lg dark:border-navy-200 col-span-2">
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
            <fieldset className="border-[2px] p-2 rounded-lg dark:border-navy-200 col-span-2">
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
            <fieldset className="border-[2px] p-2 rounded-lg dark:border-navy-200 col-span-2">
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
            <fieldset className="border-[2px] p-2 rounded-lg dark:border-navy-200 col-span-2">
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
            <fieldset className="border-[2px] p-2 rounded-lg dark:border-navy-200 col-span-2">
              <legend
                id="classXyz"
                className="text-xl text-navy-700 dark:text-white px-1.5"
              >
                Mother Name<span className="text-red-500">*</span>
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
            <fieldset className="border-[2px] p-2 rounded-lg dark:border-navy-200 col-span-2">
              <legend
                id="classXyz"
                className="text-xl text-navy-700 dark:text-white px-1.5"
              >
                Student Class<span className="text-red-500">*</span>
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
            <fieldset className="border-[2px] p-2 rounded-lg dark:border-navy-200 col-span-2">
              <legend
                id="classXyz"
                className="text-xl text-navy-700 dark:text-white px-1.5"
              >
                Student Section<span className="text-red-500">*</span>
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
            {/* <fieldset className="border-0 pt-4 rounded-lg">
            <Button
              name={<span>Get List</span>}
              onCLick={() => console.log("clicked")}
              style="blue"
              extras="w-fit h-fit"
            />
          </fieldset> */}
          </div>
        </Card>
        <Card className="rounded-xl bg-white dark:bg-navy-800 p-5 mb-5 md:col-span-1 lg:col-span-2 2xl:col-span-2 3xl:col-span-4 h-fit">
          <h2 className="text-2xl font-bold dark:text-white">
            Student Fitness Form
          </h2>
          <form action="#">
            <Table tableExtras="w-full border-y-2 my-5">
              <THeade>
                <Tr>
                  <Th>Parts Of Fitness</Th>
                  <Th>Text</Th>
                  <Th>Raw Score</Th>
                  <Th>Zone</Th>
                  <Th>Description</Th>
                </Tr>
              </THeade>
              <TBody>
                <Tr>
                  <Td>Body Composition</Td>
                  <Td>Body Weight</Td>
                  <Td>
                    <InputField
                      extra=""
                      id=""
                      placeholder="Enter Raw Score"
                      variant="primary"
                      type="text"
                    />
                  </Td>
                  <Td>
                    <InputField
                      extra=""
                      id=""
                      placeholder="Enter Zone"
                      variant="primary"
                      type="text"
                    />
                  </Td>
                  <Td>
                    <InputField
                      extra=""
                      id=""
                      placeholder="Enter Description"
                      variant="primary"
                      type="text"
                    />
                  </Td>
                </Tr>
                <Tr extras="border-b-2">
                  <td></td>
                  <Td>Body Height</Td>
                  <Td>
                    <InputField
                      extra=""
                      id=""
                      placeholder="Enter Raw Score"
                      variant="primary"
                      type="text"
                    />
                  </Td>
                  <Td>
                    <InputField
                      extra=""
                      id=""
                      placeholder="Enter Zone"
                      variant="primary"
                      type="text"
                    />
                  </Td>
                  <Td>
                    <InputField
                      extra=""
                      id=""
                      placeholder="Enter Description"
                      variant="primary"
                      type="text"
                    />
                  </Td>
                </Tr>
                <Tr extras="border-b-2">
                  <Td>Cardio Resiratory Endurance</Td>
                  <Td>Pacer(20m)</Td>
                  <Td>
                    <InputField
                      extra=""
                      id=""
                      placeholder="Enter Raw Score"
                      variant="primary"
                      type="text"
                    />
                  </Td>
                  <Td>
                    <InputField
                      extra=""
                      id=""
                      placeholder="Enter Zone"
                      variant="primary"
                      type="text"
                    />
                  </Td>
                  <Td>
                    <InputField
                      extra=""
                      id=""
                      placeholder="Enter Description"
                      variant="primary"
                      type="text"
                    />
                  </Td>
                </Tr>
                <Tr>
                  <Td>Flexibility</Td>
                  <Td>Trunk Lift</Td>
                  <Td>
                    <InputField
                      extra=""
                      id=""
                      placeholder="Enter Raw Score"
                      variant="primary"
                      type="text"
                    />
                  </Td>
                  <Td>
                    <InputField
                      extra=""
                      id=""
                      placeholder="Enter Zone"
                      variant="primary"
                      type="text"
                    />
                  </Td>
                  <Td>
                    <InputField
                      extra=""
                      id=""
                      placeholder="Enter Description"
                      variant="primary"
                      type="text"
                    />
                  </Td>
                </Tr>
                <Tr>
                  <td></td>
                  <Td>Sit And Reach(L)</Td>
                  <Td>
                    <InputField
                      extra=""
                      id=""
                      placeholder="Enter Raw Score"
                      variant="primary"
                      type="text"
                    />
                  </Td>
                  <Td>
                    <InputField
                      extra=""
                      id=""
                      placeholder="Enter Zone"
                      variant="primary"
                      type="text"
                    />
                  </Td>
                  <Td>
                    <InputField
                      extra=""
                      id=""
                      placeholder="Enter Description"
                      variant="primary"
                      type="text"
                    />
                  </Td>
                </Tr>
                <Tr extras="border-b-2">
                  <td></td>
                  <Td>Sit And Reach(R)</Td>
                  <Td>
                    <InputField
                      extra=""
                      id=""
                      placeholder="Enter Raw Score"
                      variant="primary"
                      type="text"
                    />
                  </Td>
                  <Td>
                    <InputField
                      extra=""
                      id=""
                      placeholder="Enter Zone"
                      variant="primary"
                      type="text"
                    />
                  </Td>
                  <Td>
                    <InputField
                      extra=""
                      id=""
                      placeholder="Enter Description"
                      variant="primary"
                      type="text"
                    />
                  </Td>
                </Tr>
                <Tr extras="border-b-2">
                  <Td>Muscular Endurance</Td>
                  <Td>Curl-ups</Td>
                  <Td>
                    <InputField
                      extra=""
                      id=""
                      placeholder="Enter Raw Score"
                      variant="primary"
                      type="text"
                    />
                  </Td>
                  <Td>
                    <InputField
                      extra=""
                      id=""
                      placeholder="Enter Zone"
                      variant="primary"
                      type="text"
                    />
                  </Td>
                  <Td>
                    <InputField
                      extra=""
                      id=""
                      placeholder="Enter Description"
                      variant="primary"
                      type="text"
                    />
                  </Td>
                </Tr>
                <Tr extras="border-b-2">
                  <Td>Muscular Strength</Td>
                  <Td>Standing Long Jump</Td>
                  <Td>
                    <InputField
                      extra=""
                      id=""
                      placeholder="Enter Raw Score"
                      variant="primary"
                      type="text"
                    />
                  </Td>
                  <Td>
                    <InputField
                      extra=""
                      id=""
                      placeholder="Enter Zone"
                      variant="primary"
                      type="text"
                    />
                  </Td>
                  <Td>
                    <InputField
                      extra=""
                      id=""
                      placeholder="Enter Description"
                      variant="primary"
                      type="text"
                    />
                  </Td>
                </Tr>
              </TBody>
            </Table>
            <div className="flex justify-center items-center">
              <Button
                name={<span>Submit</span>}
                onCLick={() => console.log("clicked")}
                style="primary"
                extras="w-fit h-fit"
              />
            </div>
          </form>
        </Card>
      </div>
    </>
  );
};

export default StudentPhysicalFitness;
