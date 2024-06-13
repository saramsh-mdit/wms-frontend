import { Outlet } from "react-router-dom";
import NavBar from "../components/navbar";

const MainLayout = () => {
  return (
    <>
      <NavBar />
      <main className="max-w-screen-xl mx-auto">
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
};

export default MainLayout;
