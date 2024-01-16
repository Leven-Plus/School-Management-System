import Card from "../../../../../components/card"
import StudentAddressWiseReportList from "./components/StudentAddressWiseReportList"

const StudentAddressWiseReport = () => {
  return (
    <Card className="rounded-xl bg-white dark:bg-navy-800 p-5 mb-5">
    <h2 className="text-2xl font-bold dark:text-white">
      Students Address Wise Report
    </h2>
    <StudentAddressWiseReportList
      tableData={[1, 1, 1]}
      tableName="Address Wise Strength Info"
    />
  </Card>
  )
}

export default StudentAddressWiseReport