import Card from "../../../../../../components/card";
import PieChart from "../../../../../../components/charts/PieChart";

const StudentAttendancePieChart = () => {
  return (
    <Card extra="rounded-[20px] p-3">
      <div className="flex flex-row justify-between px-3 pt-2">
        <div>
          <h4 className="text-lg font-bold text-navy-700 dark:text-white">
            Total Attendance Report
          </h4>
        </div>

        <div className="mb-6 flex items-center justify-center">
          <select className="mb-3 mr-2 flex items-center justify-center text-sm font-bold text-gray-600 hover:cursor-pointer dark:!bg-navy-800 dark:text-white">
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
            <option value="weekly">Weekly</option>
          </select>
        </div>
      </div>

      <div className="mb-auto flex h-[245px] w-full items-center justify-center">
        <PieChart
          chartOptions={{
            labels: ["Present", "Absent", "Not Marked"],
            colors: ["#232323", "#232323", "#232323"],
            chart: {
              width: "50px",
            },
            states: {
              hover: {
                filter: {
                  type: "none",
                },
              },
            },
            legend: {
              show: false,
            },
            dataLabels: {
              enabled: false,
            },
            hover: { mode: null },
            plotOptions: {
              donut: {
                expandOnClick: false,
                donut: {
                  labels: {
                    show: false,
                  },
                },
              },
            },
            fill: {
              colors: [
                "#6366f1", 
                "#3b82f6", 
                "#f59e0b"],
            },
            tooltip: {
              enabled: true,
              theme: "dark",
              style: {
                fontSize: "12px",
                fontFamily: undefined,
                backgroundColor: "#000000",
              },
            },
          }}
          chartData={[65, 25, 10]}
        />
      </div>
      <div className="flex flex-row !justify-between rounded-2xl px-6 py-3 shadow-2xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center">
            <div className="h-2 w-2 rounded-full bg-indigo-500" />
            <p className="ml-1 text-sm font-normal text-gray-600">Present</p>
          </div>
          <p className="mt-px text-xl font-bold text-navy-700  dark:text-white">
            63%
          </p>
        </div>

        <div className="h-11 w-px bg-gray-300 dark:bg-white/10" />

        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center">
            <div className="h-2 w-2 rounded-full bg-blue-500" />
            <p className="ml-1 text-sm font-normal text-gray-600">Absent</p>
          </div>
          <p className="mt-px text-xl font-bold text-navy-700 dark:text-white">
            25%
          </p>
        </div>

        <div className="h-11 w-px bg-gray-300 dark:bg-white/10" />

        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center">
            <div className="h-2 w-2 rounded-full bg-orange-500" />
            <p className="ml-1 text-sm font-normal text-gray-600">N/M</p>
          </div>
          <p className="mt-px text-xl font-bold text-navy-700 dark:text-white">
            25%
          </p>
        </div>
      </div>
    </Card>
  );
};

export default StudentAttendancePieChart;
