import Card from "../../components/card";

const Widget = (props: {
  icon: JSX.Element;
  title: string;
  subtitle: string;
  clickable?: boolean;
  bg?: string;
  darkbg?: string;
  textColor?: string;
  darkTextColor?: string;
  titleColor?:string;
  titleDarkColor?:string;
  subTitleColor?:string;
  subTitleDarkColor?:string;
  onClick?: () => void;
}) => {
  const { icon, title, subtitle, bg, darkbg, textColor, darkTextColor,titleColor,titleDarkColor,subTitleColor,subTitleDarkColor } = props;
  return (
    <Card
      onClick={props.onClick ? props.onClick : () => {}}
      extra={`
    !flex-row flex-grow items-center rounded-[20px] transition-all duration-300 ease-in-out
    ${
      props.clickable
        ? "py-1 justify-between cursor-pointer hover:!border-brand-500 active:bg-gray-50 dark:active:!bg-navy-700"
        : ""
    }
    `}
      bg={bg}
      darkbg={darkbg}
      textColor={textColor}
      darkTextColor={darkTextColor}
    >
      {!props.clickable ? (
        <>
          <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
            <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
              <span className={`flex items-center`}>
                {icon}
              </span>
            </div>
          </div>

          <div className={`h-50 ml-4 flex w-auto flex-col justify-center`}>
            <h3 className={`font-dm text-sm font-medium ${titleColor ? titleColor : " text-gray-600"} ${titleDarkColor ? titleDarkColor : " dark:!text-gray-600"}`}>
              {title}
            </h3>
            <h4 className={`text-xl font-bold ${subTitleColor ? subTitleColor : " text-navy-700"} ${subTitleDarkColor ? subTitleDarkColor : " dark:text-white"}`}>
              {subtitle}
            </h4>
          </div>
        </>
      ) : null}

      {props.clickable ? (
        <>
          <div className={`h-50 ml-5 flex w-auto flex-col justify-center`}>
            <h4 className={`text-xl font-bold ${subTitleColor ? subTitleColor : " text-navy-700"} ${subTitleDarkColor ? subTitleDarkColor : " dark:text-white"}`}>
              {title}
            </h4>
            <p className={`font-dm text-sm font-medium ${titleColor ? titleColor : " text-gray-600"} ${titleDarkColor ? titleDarkColor : " dark:!text-gray-600"}`}>
              {subtitle}
            </p>
          </div>
          <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center mr-5">
            <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
              <span className="flex items-center text-brand-500 dark:text-white">
                {icon}
              </span>
            </div>
          </div>
        </>
      ) : null}
    </Card>
  );
};

export default Widget;
