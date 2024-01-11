import RegistrationList from "./components";

const tableDataCheck = [1, 1, 1, 1,1,1,1,1,1,1,1,1,1,1,1,1];

const StudentRegistrationList = () => {
  return (
    <div className="mx-auto mb-auto h-full min-h-[84vh]">
      <RegistrationList tableData={tableDataCheck} tableName="Student Registration List"/>
    </div>
  );
};

export default StudentRegistrationList;
