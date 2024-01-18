import React from "react";
import ReactApexChart from "react-apexcharts";

interface State {
  series: {
    name: string;
    data: number[];
  }[];
  options: {
    chart: {
      type: string;
      height: number;
    };
    plotOptions: {
      bar: {
        horizontal: boolean;
        columnWidth: string;
        endingShape: string;
      };
    };
    dataLabels: {
      enabled: boolean;
    };
    stroke: {
      show: boolean;
      width: number;
      colors: string[];
    };
    xaxis: {
      categories: string[];
    };
    yaxis: {
      title: {
        text: undefined;
      };
    };
    fill: {
      opacity: number;
      colors: string[];
    };
    tooltip: {
      y: {
        formatter: (val: number) => string;
      };
    };
  };
}

class MultiBarCharts extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);

    this.state = {
      series: [
        {
          name: "Students",
          data: [
            44, 55, 57, 56, 61, 58, 63, 60, 66, 70, 45, 45, 45, 45, 67, 67,
          ],
        },
        {
          name: "Present",
          data: [
            35, 41, 36, 26, 45, 48, 52, 53, 41, 45, 45, 45, 45, 45, 56, 34,
          ],
        },
        {
          name: "Leave",
          data: [35, 41, 36, 26, 45, 48, 52, 53, 41, 6, 4, 3, 8, 9, 10, 3],
        },
        {
          name: "Absent",
          data: [
            35, 41, 36, 26, 45, 48, 52, 53, 41, 12, 12, 23, 34, 23, 12, 23,
          ],
        },
        {
          name: "Not Marked",
          data: [
            6, 8, 10, 8, 7, 15, 1, 14, 4, 12, 23, 12, 12, 12, 12, 12,
          ],
        },
      ],
      options: {
        chart: {
          type: "bar",
          height: 350,
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "50%",
            endingShape: "rounded",
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          show: true,
          width: 2,
          colors: ["transparent"],
        },
        xaxis: {
          categories: [
            "PRE SCHOOL",
            "NURSERY",
            "LKG",
            "UKG",
            "1ST",
            "2ND",
            "3RD",
            "4TH",
            "5TH",
            "6TH",
            "7TH",
            "8TH",
            "9TH",
            "10TH",
            "11TH",
            "12TH",
          ],
        },
        yaxis: {
          title: {
            text: undefined,
          },
        },

        fill: {
          opacity: 1,
          colors: ["#3b82f6", "#22c55e", "#eab308", "#f53939", "#a855f7"],
        },
        tooltip: {
          y: {
            formatter: (val: number) => `${val}`,
          },
        },
      },
    };
  }

  render() {
    return (
      <div className="w-full">
        <div id="chart" className="">
          <ReactApexChart
            // @ts-ignore
            options={this.state.options}
            series={this.state.series}
            type="bar"
            width={"100%"}
            height={300}
          />
        </div>
        <div id="html-dist"></div>
      </div>
    );
  }
}

export default MultiBarCharts;
