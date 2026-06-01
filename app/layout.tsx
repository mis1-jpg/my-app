import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>

        <div style={{ display: "flex", height: "100vh" }}>

          {/* Sidebar */}
          <Sidebar />

          {/* Main Area */}
          <div style={{ flex: 1 }}>

            {/* Header */}
            <Header />

            {/* Page Content */}
            <div style={{ padding: "20px" }}>
              {children}
            </div>

          </div>

        </div>

      </body>
    </html>
  );
}