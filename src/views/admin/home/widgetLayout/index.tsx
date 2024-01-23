import { useNavigate } from "react-router-dom";
import Widget from "../../../../components/widget/Widget";

const widgetLayout = ({ modules }: { modules: any }) => {
  const Navigate = useNavigate();



  return (
    <>
      {modules?.map((item: any, index: number) => {
        //const num = getRandomNumber()
        //console.log(num);
        
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
            //bg={colors[getRandomNumber()]}
           // titleColor={`text-gray-800`}
           // subTitleColor={`text-gray-800`}
          />
        );
      })}
    </>
  );
};

export default widgetLayout;
