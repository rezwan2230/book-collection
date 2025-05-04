import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

const Commonlayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">{children}</div>
      <Footer />
    </>
  );
};

export default Commonlayout;
