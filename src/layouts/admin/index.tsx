import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/navbar";
import { NavLink, SideBar } from "../../components/sidebar";
import { LiaUserShieldSolid } from "react-icons/lia";
import Footer from "../../components/footer/Footer";
import { useSelector } from "react-redux";
import { LuShoppingBag, LuUserCog2 } from "react-icons/lu";
import RoutesLayout from "../RoutesLayout";
import Modal from "../../components/modal";

export default function Admin(props: { [x: string]: any }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [, setProgress] = useState(0);
  const location = useLocation();
  const pathNameArray = location?.pathname?.split("/");
  pathNameArray?.shift();
  const { ...rest } = props;
  const [sideBarCompact, setSideBarCompact] = useState(false);
  const modules = useSelector((state: any) => state.routesData.value);

  const moduleRoutes: any = [];

  for (let index = 0; index < modules?.length; index++) {
    for (
      let subIndex = 0;
      subIndex < modules[index]?.nodes?.length;
      subIndex++
    ) {
      moduleRoutes.push(modules[index]?.nodes[subIndex]);
    }
  }

  const Name = () => {
    let module: any = undefined;

    module = moduleRoutes?.filter((item: any) => {
      return location?.pathname?.startsWith(item?.to);
    });

    let moduleName: string = "Admin";

    if (pathNameArray?.length === 2) {
      moduleName = module[0]?.name;
    }

    if (pathNameArray?.length === 3) {
      moduleName = module[0]?.modules?.filter((item: any) => {
        return location?.pathname === item?.to;
      })[0]?.name;
    }

    return moduleName;
  };

  useEffect(() => {
    for (let index = 0; index < 105; index++) {
      setTimeout(() => {
        setProgress(index);
      }, 10);
    }
  }, [location]);

  console.log(isModalOpen);

  return (
    <div className="flex h-full w-full">
      {/* <LoadingBar
        color="#422AFB"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
        className="
        rounded-xl"
      /> */}
      <SideBar setCompact={setSideBarCompact} compact={sideBarCompact}>
        {moduleRoutes?.map((link: any, index: number) => {
          return (
            <>
              {index === 0 && (
                <NavLink
                  compact={sideBarCompact}
                  name={!sideBarCompact ? "Admin" : ""}
                  icon={<LiaUserShieldSolid />}
                  to={"/admin"}
                />
              )}
              <NavLink
                key={index}
                compact={sideBarCompact}
                name={!sideBarCompact ? link?.name : ""}
                icon={link?.icon}
                to={link?.to}
              />
            </>
          );
        })} 
      </SideBar>

      <div className="h-full w-full bg-lightPrimary dark:!bg-navy-900">
        <main
          className={` h-full flex-none transition-all ${
            sideBarCompact ? "ml-[67px]" : "ml-[293px]"
          }`}
        >
          <div className="h-full">
            <Navbar
              searchOnClick={setIsModalOpen}
              onOpenSidenav={() => {
                setSideBarCompact(!sideBarCompact);
              }}
              brandText={Name()}
              {...rest}
            />
            <RoutesLayout
              pageProps={{ pageName: "/admin", data: modules, type: "typeOne" }}
            />
            <div className="p-3">
              <Footer />
            </div>
          </div>
        </main>
      </div>
      {isModalOpen && (
          <Modal isOpen={isModalOpen} isClose={setIsModalOpen} />
      )}
    </div>
  );
}
