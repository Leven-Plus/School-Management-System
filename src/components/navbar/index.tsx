import { useEffect, useState } from "react";
import Dropdown from "../../components/dropdown";
import { FiAlignJustify } from "react-icons/fi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsArrowBarUp } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
// import { RiMoonFill, RiSunFill } from "react-icons/ri";
import {
  IoMdNotificationsOutline,
  // IoMdInformationCircleOutline,
} from "react-icons/io";
import avatar from "../../assets/img/avatars/avatar11.png";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { LuChevronLeft } from "react-icons/lu";
import { IoLanguage } from "react-icons/io5";
import { useCookies } from "react-cookie";
import UseKey from "../useKey";

const Navbar = (props: {
  onOpenSidenav: () => void;
  brandText: string;
  searchOnClick: Function;
}) => {
  const { onOpenSidenav, brandText } = props;
  // const [darkmode, setDarkmode] = React.useState(false);

  const [cookies, setCookie] = useCookies();

  let [headerStick, setHeaderStick] = useState(false);

  const scrollHeaderEvent = (e: Event) => {
    const window = e.currentTarget as Window;
    let top = window.scrollY;

    setHeaderStick(top >= 90);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHeaderEvent);

    return () => {
      window.removeEventListener("scroll", scrollHeaderEvent);
    };
  }, []);

  const location = useLocation();

  const navigate = useNavigate();

  const pathName = location?.pathname;

  const breadCrumbData = pathName?.split("/");

  breadCrumbData?.shift();

  let nodeUrl: string = "";

  let nodes: string[] = [];

  return (
    <nav
      className={`sticky top-0 z-40 flex flex-row flex-wrap items-center justify-between pb-4 ${
        headerStick
          ? " bg-white !border-b-[1px] border-gray-200"
          : "bg-lightPrimary "
      } p-2 dark:${headerStick ? "!bg-navy-800" : "!bg-navy-900"} dark:${
        headerStick ? "border-[#ffffff33] " : ""
      }`}
    >
      <UseKey
        pressKey="/"
        cb={() => props.searchOnClick(true)}
        disable={false}
      />

      <div className="ml-[12px]">
        <p
          className="shrink text-[33px] capitalize text-navy-700 dark:text-white"
          // onClick={() => props.onOpenSidenav()}
        >
          <Link
            to="#"
            className="font-bold capitalize hover:text-navy-700 dark:hover:text-white flex items-center justify-start"
            onClick={() => {
              if (pathName !== "/admin") {
                navigate(-1);
              }
            }}
          >
            {pathName !== "/admin" && (
              <span>
                <LuChevronLeft
                  style={{ fontSize: "0.9em", marginRight: "0.1em" }}
                  className="text-brand-500 dark:text-white"
                />
              </span>
            )}
            {brandText}
          </Link>
        </p>
        <Breadcrumb
          separator={<span className="text-navy-700 dark:text-white">/</span>}
        >
          {breadCrumbData?.map((item, index) => {
            nodeUrl += `/${item}`;
            nodes.push(nodeUrl);

            return (
              <BreadcrumbItem>
                <BreadcrumbLink
                  as={Link}
                  to={nodes[index]}
                  className="capitalize text-navy-700 dark:text-white"
                >
                  {item}
                </BreadcrumbLink>
              </BreadcrumbItem>
            );
          })}
        </Breadcrumb>
      </div>
      <div className="relative mt-[3px] flex h-[61px] w-[355px] flex-grow items-center justify-around gap-2 rounded-full bg-white px-2 py-2 shadow-xl shadow-shadow-500 dark:!bg-navy-800 dark:shadow-none md:w-[365px] md:flex-grow-0 md:gap-1 xl:w-[365px] xl:gap-2">
        <div className="flex h-full items-center rounded-full bg-lightPrimary text-navy-700 dark:bg-navy-900 dark:text-white xl:w-[225px]">
          <p className="pl-3 pr-2 text-xl">
            <FiSearch className="h-4 w-4 text-gray-400 dark:text-white" />
          </p>
          <div className="flex items-center">
            <input
              type="text"
              placeholder={
                cookies.preferedLanguage === "gu"
                  ? "શોધો..."
                  : cookies.preferedLanguage === "hi"
                  ? "खोजें..."
                  : "Search..."
              }
              onClick={() =>
                props.searchOnClick(true)
                  ? () => props.searchOnClick(true)
                  : () => {}
              }
              className="block h-full w-full rounded-full bg-lightPrimary text-sm font-medium text-navy-700 outline-none placeholder:!text-gray-400 dark:bg-navy-900 dark:text-white dark:placeholder:!text-white sm:w-fit"
            />
            <div
              className="text-navy-700 rounded-lg bg-[#fff] px-2 py-1 text-[0.7em] uppercase transition duration-200 dark:bg-white/10 dark:text-white translate-x-[-15px]"
              style={{ letterSpacing: "0.01em" }}
            >
              /
            </div>
          </div>
        </div>
        <span
          className="flex cursor-pointer text-xl text-gray-600 dark:text-white xl:hidden"
          onClick={onOpenSidenav}
        >
          <FiAlignJustify className="h-5 w-5" />
        </span>
        {/* start Notification */}
        <Dropdown
          button={
            <p className="cursor-pointer">
              <IoMdNotificationsOutline className="h-4 w-4 text-gray-600 dark:text-white" />
            </p>
          }
          animation="origin-[65%_0%] md:origin-top-right transition-all duration-300 ease-in-out"
          children={
            <div className="flex w-[360px] flex-col gap-3 rounded-[20px] bg-white p-4 shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:text-white dark:shadow-none sm:w-[460px]">
              <div className="flex items-center justify-between">
                <p className="text-base font-bold text-navy-700 dark:text-white">
                  Notification
                </p>
                <p className="text-sm font-bold text-navy-700 dark:text-white">
                  Mark all read
                </p>
              </div>

              <button className="flex w-full items-center">
                <div className="flex h-full w-[85px] items-center justify-center rounded-xl bg-gradient-to-b from-brandLinear to-brand-500 py-4 text-2xl text-white">
                  <BsArrowBarUp />
                </div>
                <div className="ml-2 flex h-full w-full flex-col justify-center rounded-lg px-1 text-sm">
                  <p className="mb-1 text-left text-base font-bold text-gray-900 dark:text-white">
                    New Update: Horizon UI Dashboard PRO
                  </p>
                  <p className="font-base text-left text-xs text-gray-900 dark:text-white">
                    A new update for your downloaded item is available!
                  </p>
                </div>
              </button>

              <button className="flex w-full items-center">
                <div className="flex h-full w-[85px] items-center justify-center rounded-xl bg-gradient-to-b from-brandLinear to-brand-500 py-4 text-2xl text-white">
                  <BsArrowBarUp />
                </div>
                <div className="ml-2 flex h-full w-full flex-col justify-center rounded-lg px-1 text-sm">
                  <p className="mb-1 text-left text-base font-bold text-gray-900 dark:text-white">
                    New Update: Horizon UI Dashboard PRO
                  </p>
                  <p className="font-base text-left text-xs text-gray-900 dark:text-white">
                    A new update for your downloaded item is available!
                  </p>
                </div>
              </button>
            </div>
          }
          classNames={"py-2 top-4 -left-[230px] md:-left-[440px] w-max"}
        />
        {/* start Horizon PRO */}
        {/* <Dropdown
          button={
            <p className="cursor-pointer">
              <IoMdInformationCircleOutline className="h-4 w-4 text-gray-600 dark:text-white" />
            </p>
          }
          children={
            <div className="flex w-[350px] flex-col gap-2 rounded-[20px] bg-white p-4 shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:text-white dark:shadow-none">
              <div
                style={{
                  backgroundImage: `url(${navbarimage})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
                className="mb-2 aspect-video w-full rounded-lg"
              />
              <a
                target="blank"
                href="https://horizon-ui.com/pro?ref=live-free-tailwind-react"
                className="px-full linear flex cursor-pointer items-center justify-center rounded-xl bg-brand-500 py-[11px] font-bold text-white transition duration-200 hover:bg-brand-600 hover:text-white active:bg-brand-700 dark:bg-brand-400 dark:hover:bg-brand-300 dark:active:bg-brand-200"
              >
                Buy Horizon UI PRO
              </a>
              <a
                target="blank"
                href="https://horizon-ui.com/docs-tailwind/docs/react/installation?ref=live-free-tailwind-react"
                className="px-full linear flex cursor-pointer items-center justify-center rounded-xl border py-[11px] font-bold text-navy-700 transition duration-200 hover:bg-gray-200 hover:text-navy-700 dark:!border-white/10 dark:text-white dark:hover:bg-white/20 dark:hover:text-white dark:active:bg-white/10"
              >
                See Documentation
              </a>
              <a
                target="blank"
                href="https://horizon-ui.com/?ref=live-free-tailwind-react"
                className="hover:bg-black px-full linear flex cursor-pointer items-center justify-center rounded-xl py-[11px] font-bold text-navy-700 transition duration-200 hover:text-navy-700 dark:text-white dark:hover:text-white"
              >
                Try Horizon Free
              </a>
            </div>
          }
          classNames={"py-2 top-6 -left-[250px] md:-left-[330px] w-max"}
          animation="origin-[75%_0%] md:origin-top-right transition-all duration-300 ease-in-out"
        /> */}
        <Dropdown
          button={
            <p className="cursor-pointer">
              <IoLanguage className="h-4 w-4 text-gray-600 dark:text-white" />
            </p>
          }
          animation="origin-[65%_0%] md:origin-top-right transition-all duration-300 ease-in-out"
          children={
            <div className="z-50 w-max rounded-xl bg-white py-3 px-4 text-sm shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
              <p
                className="hover:text-black flex cursor-pointer items-center gap-2 text-gray-600 hover:text-gray-300"
                onClick={() =>
                  setCookie("preferedLanguage", "en", { path: "/" })
                }
              >
                English
              </p>
              <p
                className="hover:text-black mt-2 flex cursor-pointer items-center gap-2 pt-1 text-gray-600 hover:text-gray-300"
                onClick={() =>
                  setCookie("preferedLanguage", "gu", { path: "/" })
                }
              >
                Gujarati
              </p>
              <p
                className="hover:text-black mt-2 flex cursor-pointer items-center gap-2 pt-1 text-gray-600 hover:text-gray-300"
                onClick={() =>
                  setCookie("preferedLanguage", "hi", { path: "/" })
                }
              >
                Hindi
              </p>
            </div>
          }
          classNames={"py-2 top-4 right-0 w-max"}
        />
        {/* Profile & Dropdown */}
        <Dropdown
          button={
            <img
              className="h-10 w-10 rounded-full"
              src={avatar}
              alt="Elon Musk"
            />
          }
          children={
            <div className="flex h-48 w-56 flex-col justify-start rounded-[20px] bg-white bg-cover bg-no-repeat shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:text-white dark:shadow-none">
              <div className="mt-3 ml-4">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-bold text-navy-700 dark:text-white">
                    👋 Hey, Adela
                  </p>{" "}
                </div>
              </div>
              <div className="mt-3 h-px w-full bg-gray-200 dark:bg-white/20 " />

              <div className="mt-3 ml-4 flex flex-col">
                <a
                  href=" "
                  className="text-sm text-gray-800 dark:text-white hover:dark:text-white"
                >
                  Profile Settings
                </a>
                <a
                  href=" "
                  className="mt-3 text-sm text-gray-800 dark:text-white hover:dark:text-white"
                >
                  Newsletter Settings
                </a>
                <a
                  href=" "
                  className="mt-3 text-sm font-medium text-red-500 hover:text-red-500"
                >
                  Log Out
                </a>
              </div>
            </div>
          }
          classNames={"py-2 top-8 -left-[180px] w-max"}
        />
      </div>
    </nav>
  );
};

export default Navbar;
