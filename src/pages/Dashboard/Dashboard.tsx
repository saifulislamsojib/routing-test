import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <h1 className="text-5xl">This is Dashboard</h1>
      <Outlet />
    </div>
  );
};

export default Dashboard;
