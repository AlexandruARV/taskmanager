import { Outlet } from "react-router-dom";
import Header from "./Header";

function AppLayout() {
  return (
    <div className="bg-stone-800 h-dvh text-stone-100">
      <Header />
      <Outlet />
    </div>
  );
}

export default AppLayout;
