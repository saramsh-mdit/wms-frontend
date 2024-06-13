import { NavLink, Outlet } from "react-router-dom";

const dashBoardNav = [
  { title: "Weapon Inventory", link: "/admin/weapon-inventory" },
  { title: "Weapon Types", link: "/admin/weapon-types" },
  { title: "Weapon Validation", link: "/admin/weapon-validation" },
];

const DashboardLayout = () => {
  return (
    <div className="relative">
      <div className="fixed left-0 bg-green-100 w-[180px] h-full">
        <div className="grid gap-4 p-4">
          {dashBoardNav?.map((item) => (
            <NavLink
              key={item.link}
              to={item.link}
              className={({ isActive }) => (isActive ? "font-bold" : "")}
            >
              {item.title}
            </NavLink>
          ))}
        </div>
      </div>
      <section className="ml-[180px] p-4">
        <Outlet />
      </section>
    </div>
  );
};

export default DashboardLayout;
