import MiniCalendar from "../../../components/calendar/MiniCalendar";
import WeeklyRevenue from "./components/WeeklyRevenue";
import TotalSpent from "./components/TotalSpent";
import PieChartCard from "./components/PieChartCard";
import { IoMdHome } from "react-icons/io";
import { IoDocuments } from "react-icons/io5";
import { MdBarChart, MdDashboard } from "react-icons/md";

import Widget from "../../../components/widget/Widget";
import CheckTable from "./components/CheckTable";
import ComplexTable from "./components/ComplexTable";
import DailyTraffic from "./components/DailyTraffic";
import TaskCard from "./components/TaskCard";
import tableDataCheck from "./variables/tableDataCheck";
import tableDataComplex from "./variables/tableDataComplex";

const Dashboard = ({ modules }:{modules:any}) => {
  window.scroll(0,0);
  console.log(modules);
  
  return (
    <div>
      {/* Card widget */}

      <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={"Earnings"}
          subtitle={"₹340.5"}
          // bg="bg-blue-800"
          // titleColor="text-white"
          // subTitleColor="text-white"
          
        />
        <Widget
          icon={<IoDocuments className="h-6 w-6" />}
          title={"Spend this month"}
          subtitle={"₹642.39"}
          // bg="bg-green-800"
          // titleColor="text-white"
          // subTitleColor="text-white"
          
        />
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={"Sales"}
          subtitle={"₹574.34"}
          // bg="bg-orange-800"
          // titleColor="text-white"
          // subTitleColor="text-white"
          
        />
        <Widget
          icon={<MdDashboard className="h-6 w-6" />}
          title={"Your Balance"}
          subtitle={"₹1,000"}
          // bg="bg-cyan-800"
          // titleColor="text-white"
          // subTitleColor="text-white"
          
        />
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={"New Tasks"}
          subtitle={"145"}
          // bg="bg-yellow-500"
          // titleColor="text-white"
          // subTitleColor="text-white"
          
        />
        <Widget
          icon={<IoMdHome className="h-6 w-6" />}
          title={"Total Projects"}
          subtitle={"₹2433"}
          // bg="bg-gray-800"
          // titleColor="text-white"
          // subTitleColor="text-white"
          
        />
      </div>

      <h2 className="my-5 text-2xl font-bold dark:text-white">Admission</h2>

      <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-4">
        <Widget
          clickable={true}
          icon={<MdBarChart className="h-7 w-7" />}
          title={"Earnings"}
          subtitle={"₹340.5"}
          // bg="bg-blue-800"
          // titleColor="text-gray-600"
          // subTitleColor="text-white"
        />
        <Widget
          clickable={true}
          icon={<IoDocuments className="h-6 w-6" />}
          title={"Spend this month"}
          subtitle={"₹642.39"}
          // bg="bg-green-800"
          // titleColor="text-gray-600"
          // subTitleColor="text-white"
        />
        <Widget
          clickable={true}
          icon={<MdBarChart className="h-7 w-7" />}
          title={"Sales"}
          subtitle={"₹574.34"}
          onClick={() => {
            alert("Hello");
          }}
          // bg="bg-orange-800"
          // titleColor="text-gray-600"
          // subTitleColor="text-white"
        />
        <Widget
          clickable={true}
          icon={<MdDashboard className="h-6 w-6" />}
          title={"Your Balance"}
          subtitle={"₹1,000"}
          // bg="bg-cyan-800"
          // titleColor="text-gray-600"
          // subTitleColor="text-white"
        />
        <Widget
          clickable={true}
          icon={<MdBarChart className="h-7 w-7" />}
          title={"Earnings of this month and report"}
          subtitle={""}
          // bg="bg-yellow-500"
          // titleColor="text-gray-600"
          // subTitleColor="text-white"
        />
        <Widget
          clickable={true}
          icon={<IoDocuments className="h-6 w-6" />}
          title={"Spend this month"}
          subtitle={"₹642.39"}
          // bg="bg-gray-800"
          // titleColor="text-gray-600"
          // subTitleColor="text-white"
        />
        <Widget
          clickable={true}
          icon={<MdBarChart className="h-7 w-7" />}
          title={"Sales"}
          subtitle={"₹574.34"}
          onClick={() => {
            alert("Hello");
          }}
          // bg="bg-pink-800"
          // titleColor="text-gray-600"
          // subTitleColor="text-white"
        />
        <Widget
          clickable={true}
          icon={<MdDashboard className="h-6 w-6" />}
          title={"Your Balance"}
          subtitle={"₹1,000"}
          // bg="bg-brand-800"
          // titleColor="text-gray-600"
          // subTitleColor="text-white"
        />
      </div>

      {/* Charts */}

      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
        <TotalSpent />
        <WeeklyRevenue />
      </div>

      {/* Tables & Charts */}

      <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-2">
        {/* Check Table */}
        <div>
          <CheckTable tableData={tableDataCheck} />
        </div>

        {/* Traffic chart & Pie Chart */}

        <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-2">
          <DailyTraffic />
          <PieChartCard />
        </div>

        {/* Complex Table , Task & Calendar */}

        <ComplexTable tableData={tableDataComplex} />

        {/* Task chart & Calendar */}

        <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-2">
          <TaskCard />
          <div className="grid grid-cols-1 rounded-[20px]">
            <MiniCalendar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
