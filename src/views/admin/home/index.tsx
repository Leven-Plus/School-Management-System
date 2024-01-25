import WidgetLayout from "./widgetLayout";
import Card from "../../../components/card";
import Widget from "../../../components/widget/Widget";
import { useNavigate } from "react-router-dom";

const Home = ({ modules }: { modules: { data: any; type: string } }) => {
  window.scroll(0, 0);
  const Navigate = useNavigate();
  const modulesData = [];

  for (let index = 0; index < modules?.data?.length; index++) {
    for (
      let subIndex = 0;
      subIndex < modules?.data[index]?.nodes?.length;
      subIndex++
    ) {
      modulesData.push(modules?.data[index]?.nodes[subIndex]);
    }
  }

  return (
    <>
      <div className="mx-auto mb-auto h-full min-h-[84vh]">
        {modules?.type === "typeOne" && (
          <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-4">
            {modulesData?.map((item: any, index: any) => {
              console.log(item?.icon2.style);
              
              return (
                <Widget
                  key={index}
                  clickable={true}
                  icon={item?.icon2}
                  title={item?.name}
                  subtitle={`Enter`}
                  onClick={() => {
                    Navigate({
                      pathname: item?.to,
                    });
                  }}
                />
              );
            })}
          </div>
        )}
        {modules?.type === "typeTwo" &&
          modules?.data?.map((item: any, index: number) => {
            return (
              <Card
                className={`rounded-xl bg-white dark:bg-navy-800 p-5 mb-5`}
                key={index}
              >
                <h2 className="text-2xl font-bold dark:text-white">
                  {item?.title}
                </h2>
                <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-4">
                  <WidgetLayout modules={item?.nodes} />
                </div>
              </Card>
            );
          })}
      </div>
    </>
  );
};

export default Home;
