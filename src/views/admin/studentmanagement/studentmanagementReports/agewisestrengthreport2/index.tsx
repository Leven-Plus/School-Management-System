import Card from "../../../../../components/card"
import AgeWiseStrengthReport2List from "./components/AgeWiseStrengthReport2List"

const AgeWiseStrengthReport2 = () => {
  return (
    <Card className="rounded-xl bg-white dark:bg-navy-800 p-5 mb-5">
    <h2 className="text-2xl font-bold dark:text-white">
     Students Age Wise Strength Report - 2
    </h2>
    <AgeWiseStrengthReport2List
      tableData={[1,1,1,1,1,1]}
      tableName="AGE WISE STRENGTH INFO"
    />
  </Card>
  )
}

export default AgeWiseStrengthReport2