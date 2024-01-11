import React from 'react'
import Card from '../../../../../components/card'

const ReligionWiseStrengthReport = () => {
  return (
    <Card className="rounded-xl bg-white dark:bg-navy-800 p-5 mb-5">
    <h2 className="text-2xl font-bold dark:text-white">
      Section Stream Wise Strength Report
    </h2>
    <GenderWiseStrengthReportList
      tableData={ClassInfo}
      tableName="Overall Student Strength Info"
    />
  </Card>
  )
}

export default ReligionWiseStrengthReport