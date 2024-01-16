import Card from "../../../../../components/card"
import StudentBlockWiseReportList from "./components/StudentBlockWiseReportList"

const StudentBlockWiseReport = () => {
  return (
    <Card className="rounded-xl bg-white dark:bg-navy-800 p-5 mb-5">
    <h2 className="text-2xl font-bold dark:text-white">
      Students City/Block Wise Report
    </h2>
    <StudentBlockWiseReportList
      tableData={[1, 1, 1]}
      tableName="City/Block Wise Strength Info"
    />
  </Card>
  )
}

export default StudentBlockWiseReport