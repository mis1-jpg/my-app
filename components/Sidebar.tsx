import Link from "next/link";

export default function Sidebar() {
  return (
    <div style={{
      width: "220px",
      background: "#111",
      color: "white",
      padding: "20px",
      height: "100vh"
    }}>
      <h2>📊 Dashboard</h2>

      <p><Link href="/" style={{ color: "white" }}>🏠 Home</Link></p>
      <p><Link href="/employees" style={{ color: "white" }}>👨‍💼 Employees</Link></p>
      <p><Link href="/orders" style={{ color: "white" }}>📦 Orders</Link></p>
      <p><Link href="/production" style={{ color: "white" }}>🏭 Production</Link></p>
    </div>
  );
}