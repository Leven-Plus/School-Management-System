import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../../views/admin/home";

const RoutesLayout = ({
  pageProps,
}: {
  pageProps: { pageName: string; data: any; type:string };
}) => {
  const moduleRoutes: any = [];

  for (let index = 0; index < pageProps?.data?.length; index++) {
    for (
      let subIndex = 0;
      subIndex < pageProps?.data[index]?.nodes?.length;
      subIndex++
    ) {
      moduleRoutes.push(pageProps?.data[index]?.nodes[subIndex]);
    }
  }

  return (
    <div
      className={`pt-5s mx-auto mb-auto h-full min-h-[84vh] ${
        pageProps?.pageName?.toLowerCase() === "/admin" ? "py-2 px-4" : ""
      }`}
    >
      <Routes>
        <Route path="/" element={<Home modules={{data:pageProps?.data, type:pageProps?.type}} />} />
        <Route
          path="/*"
          element={
            <Navigate
              to={
                "/admin"
              }
              replace
            />
          }
        />
        {moduleRoutes?.map((route: any, index: any) => {
          const pathName = route?.to?.split("/");
          pathName?.shift();
          const path = `/${pathName[pathName?.length - 1]}/*`;
          return (
            <Route
              path={path}
              element={route?.component ? route?.component : <>Nothing</>}
              key={index}
            />
          );
        })}
      </Routes>
    </div>
  );
};

export default RoutesLayout;
