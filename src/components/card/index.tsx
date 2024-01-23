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
      className={`relative flex flex-col rounded-[10px] border-[1px] ${bg ? bg : "bg-white"} ${textColor ? textColor : "text-black"} ${extra}`}
      {...rest}
      onClick={props.onClick ? props.onClick : () => { }}
    >
      {children}
    </div>
  );
}

export default Card;
