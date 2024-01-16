import Card from '../../../../../components/card'
import AgeWiseStrengthReportList from './components/AgeWiseStrengthReportList'

const AgeWiseStrengthReport = () => {
  return (
    <Card className="rounded-xl bg-white dark:bg-navy-800 p-5 mb-5">
    <h2 className="text-2xl font-bold dark:text-white">
     Students Age Wise Strength Report
    </h2>
    <AgeWiseStrengthReportList
      tableData={[1,1,1,1,1,1]}
      tableName="AGE WISE STRENGTH INFO"
    />
  </Card>
  )
}

export default AgeWiseStrengthReport