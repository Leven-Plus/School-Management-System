import { Routes, Route, Navigate } from "react-router-dom";

import AdminLayout from "./layouts/admin";
import AuthLayout from "./layouts/auth";
const App = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate to={"/auth/*"} replace/>}/>
      <Route path="/auth/*" element={<AuthLayout />} />
      <Route path="/admin/*" element={<AdminLayout />} />
    </Routes>
  );
};

export default App;
