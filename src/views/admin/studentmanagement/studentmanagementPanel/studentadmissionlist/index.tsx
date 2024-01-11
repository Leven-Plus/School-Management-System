import AdmissionList from "./components";

const tableDataCheck = [1, 1, 1, 1];

const StudentAdmissionList = () => {
  return (
    <div className="mx-auto mb-auto h-full min-h-[84vh]">
        <AdmissionList
          tableData={tableDataCheck}
          tableName="Student Admission List"
        />
    </div>
  );
};

export default StudentAdmissionList;
