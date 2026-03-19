import { ScrollProgress } from "../components/common/ScrollProgress";
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";

export const Layout = () => {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <Sidebar />
    </>
  );
};
