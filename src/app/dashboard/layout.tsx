import Header from "./components/Header"
import Sidebar from "./components/Sidebar"

export default function DashboardLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <div className="flex h-screen w-screen">
        {/* Include shared UI here e.g. a header or sidebar */}
        <Sidebar/>
        <div className="flex h-full w-full flex-col">
          <Header />
          {children}

        </div>
      </div>
    )
  }