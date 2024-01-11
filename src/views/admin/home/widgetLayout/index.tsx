import { useNavigate } from "react-router-dom";
import Widget from "../../../../components/widget/Widget";

const widgetLayout = ({ modules }: { modules: any }) => {
  const Navigate = useNavigate();

  return (
    <>
      {modules?.map((item: any, index: number) => {
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
    </>
  );
};

export default widgetLayout;
