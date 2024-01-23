import { AnimatePresence, motion } from "framer-motion";
import { LuMenu } from "react-icons/lu";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

type SideBarProp = {
  compact?: boolean;
  setCompact?: any;
  children: React.ReactNode;
};

function SideBar({ compact, setCompact, children }: SideBarProp) {
  return (
    <motion.div
      variants={{
        compact: {
          width: "66px",
          transition: {
            duration: 0.2,
          },
        },
        notCompact: {
          width: "292px",
          transition: {
            duration: 0.2,
          },
        },
      }}
      animate={compact ? "compact" : "notCompact"}
      initial={compact ? "compact" : "notCompact"}
      className={`flex flex-col fixed h-[100vh] bg-white dark:!bg-navy-800 !border-r-[1px] border-gray-200 dark:border-[#ffffff33]`}
    >
      <div
        className={`brand-logo text-start pl-6 my-6 text-navy-700 dark:text-white ${
          compact ? "hidden" : ""
        }`}
        onClick={() => setCompact(true)}
      >
        <span className="text-2xl flex items-center justify-start">
          <span>
            <LuMenu />
          </span>
          &nbsp;
          <span className="font-bold">LEVEN</span>
          &nbsp;
          <span className="font-normal">PLUS</span>
        </span>
      </div>

      <div
        className={`brand-logo text-center my-6 text-navy-700 dark:text-white ${
          compact ? "" : "hidden"
        }`}
        onClick={() => setCompact(false)}
      >
        <span className="text-2xl flex justify-center items-center">
          <span>
            <LuMenu />
          </span>
        </span>
      </div>

      <div
        className="bg-gray-200 dark:bg-[#ffffff33]"
        style={{
          width: "100%",
          height: "1px",
        }}
      ></div>

      <div className={`links overflow-auto hidescroll`}>{children}</div>
    </motion.div>
  );
}

type NavLinkProp = {
  name: string;
  icon: React.ReactNode;
  compact?: boolean;
  to?: string;
};

function NavLink({ name, icon, compact, to = "#" }: NavLinkProp) {
  const location = useLocation();
  const pathName = location?.pathname;

  return (
    <div>
      <Link
        to={to}
        className={`w-[full] group flex h-[42px] ${
          compact ? "pl-6" : "pl-8"
        } li transition-all hover:bg-gray-100 dark:hover:bg-navy-700 ${
          pathName === to ? "active bg-gray-50 dark:bg-navy-700" : ""
        }`}
      >
        <span className="text-[18px] my-auto text-navy-700 dark:text-white mr-4 transition-all ">
          {icon}
        </span>
        <AnimatePresence mode="wait">
          {!compact && (
            <motion.span
              initial={{
                width: "auto",
              }}
              animate={{
                width: "auto",
                transition: {
                  width: {
                    duration: 0.2,
                  },
                  opacity: {
                    duration: 0.2,
                    delay: 0.15,
                  },
                },
              }}
              exit={{
                width: 0,
                opacity: 0,
                transition: {
                  width: {
                    duration: 0.1,
                  },
                  opacity: {
                    duration: 0.2,
                  },
                },
              }}
              className="text-[16px] font-medium my-auto mr-auto text-navy-700 dark:text-white transition-all"
            >
              {name}
            </motion.span>
          )}
        </AnimatePresence>
        <div
          className={`hidden group-[.active]:block w-1 h-full bg-brand-400 dark:bg-brand-600 rounded-full ${
            compact ? "ml-auto" : ""
          }`}
        ></div>
      </Link>
    </div>
  );
}

export { SideBar, NavLink };
