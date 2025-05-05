import Footer from "@/components/shared/Footer";
import Sidebar from "@/components/ui/Sidebar";

const Dashboardlayout = ({ children }: { children: React.ReactNode }) => {
  return <>
  <Sidebar>{children}</Sidebar>
  <Footer/>
  </>;
};

export default Dashboardlayout;
