function Card(props: {
  variant?: string;
  extra?: string;
  children?: JSX.Element | any[];
  [x: string]: any;
  onClick?: any;
  bg?:string;
  darkbg?:string;
  textColor?:string;
  darkTextColor?:string;
}) {
  const { variant, extra, children, bg, darkbg,textColor,darkTextColor, ...rest } = props;
  return (
    <div
      className={`relative flex flex-col rounded-[10px] border-[1px] border-gray-200 ${bg ? bg : "bg-white"} ${textColor ? textColor : "text-black"} bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] ${darkbg ? darkbg : "dark:!bg-navy-800"} ${darkTextColor ? darkTextColor : "dark:!text-white"} dark:shadow-none ${extra}`}
      {...rest}
      onClick={props.onClick ? props.onClick : () => { }}
    >
      {children}
    </div>
  );
}

export default Card;
