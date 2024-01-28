import Card from "../../components/card";

const getRandomNumber = () => {
  return Math.floor(Math.random() * 13);
};

const randomColor = (): {
  text: string;
  bg: string;
  bghover: string;
  border: string;
} => {
  let c = getRandomNumber();

  return {
    text: colors_text[c],
    bg: colors_bg[c],
    bghover: colors_bg_hover[c],
    border: colors_border[c],
  };
};

const colors_text = [
  "text-navy-500",
  "text-red-500",
  "text-orange-500",
  "text-amber-500",
  "text-green-500",
  "text-teal-500",
  "text-cyan-500",
  "text-blue-500",
  "text-yellow-500",
  "text-indigo-500",
  "text-purple-500",
  "text-pink-500",
  "text-brand-500",
];

const colors_bg = [
  "bg-navy-500/10",
  "bg-red-500/10",
  "bg-orange-500/10",
  "bg-amber-500/10",
  "bg-green-500/10",
  "bg-teal-500/10",
  "bg-cyan-500/10",
  "bg-blue-500/10",
  "bg-yellow-500/10",
  "bg-indigo-500/10",
  "bg-purple-500/10",
  "bg-pink-500/10",
  "bg-brand-500/10",
];

const colors_bg_hover = [
  "group-hover:!bg-navy-500/20",
  "group-hover:!bg-red-500/20",
  "group-hover:!bg-orange-500/20",
  "group-hover:!bg-amber-500/20",
  "group-hover:!bg-green-500/20",
  "group-hover:!bg-teal-500/20",
  "group-hover:!bg-cyan-500/20",
  "group-hover:!bg-blue-500/20",
  "group-hover:!bg-yellow-500/20",
  "group-hover:!bg-indigo-500/20",
  "group-hover:!bg-purple-500/20",
  "group-hover:!bg-pink-500/20",
  "group-hover:!bg-brand-500/20",
];

const colors_border = [
  "hover:!border-navy-300",
  "hover:!border-red-300",
  "hover:!border-orange-300",
  "hover:!border-amber-300",
  "hover:!border-green-300",
  "hover:!border-teal-300",
  "hover:!border-cyan-300",
  "hover:!border-blue-300",
  "hover:!border-yellow-300",
  "hover:!border-indigo-300",
  "hover:!border-purple-300",
  "hover:!border-pink-300",
  "hover:!border-brand-300",
];

const Widget = (props: {
  icon: JSX.Element;
  title: string;
  subtitle: string;
  clickable?: boolean;
  bg?: string;
  darkbg?: string;
  textColor?: string;
  darkTextColor?: string;
  titleColor?: string;
  titleDarkColor?: string;
  subTitleColor?: string;
  subTitleDarkColor?: string;
  onClick?: () => void;
}) => {
  const {
    icon,
    title,
    subtitle,
    bg,
    darkbg,
    textColor,
    darkTextColor,
    titleColor,
    titleDarkColor,
    subTitleColor,
    subTitleDarkColor,
  } = props;

  const colors = randomColor();

  return (
    <Card
      onClick={props.onClick ? props.onClick : () => {}}
      extra={`
      group
      ${colors.border}
    !flex-row flex-grow items-center rounded-[20px] transition-all duration-300 ease-in-out
    ${props.clickable ? `py-1 justify-between cursor-pointer` : ""}
    `}
      bg={bg}
      darkbg={darkbg}
      textColor={textColor}
      darkTextColor={darkTextColor}
    >
      {!props.clickable ? (
        <>
          <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
            <div
              className={`rounded-full ${colors.bg} ${colors.bghover} duration-500 y p-3 dark:bg-navy-700`}
            >
              <span className={`flex items-center ${colors.text}`}>{icon}</span>
            </div>
          </div>

          <div className={`h-50 ml-4 flex w-auto flex-col justify-center`}>
            <h3
              className={`font-dm text-sm font-medium ${
                titleColor ? titleColor : " text-gray-600"
              } ${titleDarkColor ? titleDarkColor : " dark:!text-gray-600"}`}
            >
              {title}
            </h3>
            <h4
              className={`text-xl font-bold ${
                subTitleColor ? subTitleColor : " text-navy-700"
              } ${subTitleDarkColor ? subTitleDarkColor : " dark:text-white"}`}
            >
              {subtitle}
            </h4>
          </div>
        </>
      ) : null}

      {props.clickable ? (
        <>
          <div className={`h-50 ml-5 flex w-auto flex-col justify-center`}>
            <h4
              className={`text-xl font-bold ${
                subTitleColor ? subTitleColor : " text-navy-700"
              } ${subTitleDarkColor ? subTitleDarkColor : " dark:text-white"}`}
            >
              {title}
            </h4>
            <p
              className={`font-dm text-sm font-medium ${
                titleColor ? titleColor : " text-gray-600"
              } ${titleDarkColor ? titleDarkColor : " dark:!text-gray-600"}`}
            >
              {subtitle}
            </p>
          </div>
          <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center mr-5">
            <div
              className={`rounded-full ${colors.bg} ${colors.bghover} duration-500 p-3 dark:bg-navy-700`}
            >
              <span className={`flex items-center text-[2rem] ${colors.text}`}>
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
