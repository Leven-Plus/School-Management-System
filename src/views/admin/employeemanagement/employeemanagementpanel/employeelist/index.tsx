import Employeelist from "./components/Employeelist";

const tableDataCheck = [1, 1, 1, 1,1,1,1,1,1,1,1,1,1,1,1,1];

const EmployeeList = () => {
  return (
    <div className="mx-auto mb-auto h-full min-h-[84vh]">
      <Employeelist tableData={tableDataCheck} tableName="Employee List"/>
    </div>
  );
};

export default EmployeeList;
