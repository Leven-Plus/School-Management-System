import Card from '../../../../../components/card'
import EmployeeDropedTable from './components/EmployeeDropedTable'

const EmployeeDroppedList = () => {
  return (
    <Card className="rounded-xl bg-white dark:bg-navy-800 p-5 mb-5">
    <h2 className="text-2xl font-bold dark:text-white mb-5">Employees Left</h2>
    <EmployeeDropedTable
      tableData={[1,1,1,1,1,1,1]}
      tableName="Left Employees List"
    />
  </Card>
  )
}

export default EmployeeDroppedList