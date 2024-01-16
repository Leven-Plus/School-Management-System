import Card from "../../../../../components/card"
import CategoryWiseStrengtReportList from "./components/CategoryWiseStrengtReportList"

const StreamWiseCategoryReport = () => {
  return (
    <Card className="rounded-xl bg-white dark:bg-navy-800 p-5 mb-5">
    <h2 className="text-2xl font-bold dark:text-white">
     Stream Wise Category Strength Report
    </h2>
    <CategoryWiseStrengtReportList
      tableData={[1,1,1,1,1,1]}
      tableName="CATEGORY WISE STRENGTH INFO"
    />
  </Card>
  )
}

export default StreamWiseCategoryReport