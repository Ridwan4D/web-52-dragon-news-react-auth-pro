import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="max-w-6xl mx-auto my-2 font-poppins p-2 md:p-4">
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
