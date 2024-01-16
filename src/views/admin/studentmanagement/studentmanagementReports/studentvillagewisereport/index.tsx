import Card from "../../../../../components/card"
import StudentVillageWiseReportList from "./components/StudentVillageWiseReportList"

const StudentVillageWiseReport = () => {
  return (
    <Card className="rounded-xl bg-white dark:bg-navy-800 p-5 mb-5">
      <h2 className="text-2xl font-bold dark:text-white">
        Student Village Wise Report
      </h2>
      <StudentVillageWiseReportList
        tableData={[1, 1, 1]}
        tableName="Village Wise Strength Info"
      />
    </Card>
  )
}

export default StudentVillageWiseReport