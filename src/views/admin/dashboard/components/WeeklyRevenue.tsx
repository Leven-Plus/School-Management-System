import Card from "../../../../components/card";
import BarChart from "../../../../components/charts/BarChart";
import { MdBarChart } from "react-icons/md";

const WeeklyRevenue = () => {
  return (
    <Card extra="flex flex-col bg-white w-full rounded-3xl py-6 px-2 text-center">
      <div className="mb-auto flex items-center justify-between px-6">
        <h2 className="text-lg font-bold text-navy-700 dark:text-white">
          Weekly Revenue
        </h2>
        <button className="!linear z-[1] flex items-center justify-center rounded-lg bg-lightPrimary p-2 text-brand-500 !transition !duration-200 hover:bg-gray-100 active:bg-gray-200 dark:bg-navy-700 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/10">
          <MdBarChart className="h-6 w-6" />
        </button>
      </div>

      <div className="md:mt-16 lg:mt-0">
        <div className="h-[250px] w-full xl:h-[350px]">
          <BarChart
            chartData={[
              {
                name: "PRODUCT A",
                data: [400, 370, 330, 390, 320, 350, 360, 320, 380],
                color: "#6AD2Fa",
              },
              {
                name: "PRODUCT B",
                data: [400, 370, 330, 390, 320, 350, 360, 320, 380],
                color: "#4318FF",
              },
              {
                name: "PRODUCT C",
                data: [400, 370, 330, 390, 320, 350, 360, 320, 380],
                color: "#EFF4FB",
              },
            ]}
            chartOptions={{
              chart: {
                stacked: true,
                toolbar: {
                  show: false,
                },
              },
              // colors:['#ff3322','#faf']
              tooltip: {
                style: {
                  fontSize: "12px",
                  fontFamily: undefined,
                  backgroundColor: "#000000",
                },
                theme: "dark",
                onDatasetHover: {
                  style: {
                    fontSize: "12px",
                    fontFamily: undefined,
                  },
                },
              },
              xaxis: {
                categories: ["17", "18", "19", "20", "21", "22", "23", "24", "25"],
                show: false,
                labels: {
                  show: true,
                  style: {
                    colors: "#A3AED0",
                    fontSize: "14px",
                    fontWeight: "500",
                  },
                },
                axisBorder: {
                  show: false,
                },
                axisTicks: {
                  show: false,
                },
              },
              yaxis: {
                show: false,
                color: "black",
                labels: {
                  show: false,
                  style: {
                    colors: "#A3AED0",
                    fontSize: "14px",
                    fontWeight: "500",
                  },
                },
              },
            
              grid: {
                borderColor: "rgba(163, 174, 208, 0.3)",
                show: true,
                yaxis: {
                  lines: {
                    show: false,
                    opacity: 0.5,
                  },
                },
                row: {
                  opacity: 0.5,
                },
                xaxis: {
                  lines: {
                    show: false,
                  },
                },
              },
              fill: {
                type: "solid",
                colors: ["#5E37FF", "#6AD2FF", "#E1E9F8"],
              },
              legend: {
                show: false,
              },
              colors: ["#5E37FF", "#6AD2FF", "#E1E9F8"],
              dataLabels: {
                enabled: false,
              },
              plotOptions: {
                bar: {
                  borderRadius: 3,
                  columnWidth: "20px",
                },
              },
            }}
          />
        </div>
      </div>
    </Card>
  );
};

export default WeeklyRevenue;
