import { Navbar } from "./_components/navbar";
import { Sidebar } from "./_components/sidebar";

const DashBoardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      {/* Header */}
      <header className="h-20 fixed inset-y-0 w-full z-50">
        <Navbar />
      </header>
      {/* SideBar */}
      <div className="hidden md:flex h-full w-56 flex-col fixed inset-y-0 z-50">
        <Sidebar />
      </div>
      {/* Main Content */}
      <main>{children}</main>
    </div>
  );
};

export default DashBoardLayout;
