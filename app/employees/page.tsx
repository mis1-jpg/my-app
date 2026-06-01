


export default function Employees() {

    const employees = [
    { id: 1, name: "Amit Sharma", role: "Designer", status: "Active" },
    { id: 2, name: "Rahul Verma", role: "Printing", status: "Active" },
    { id: 3, name: "Sita Devi", role: "Production", status: "Inactive" },
  ];

  return (
    <div>

      <h1>👨‍💼 Employees</h1>

      <table style={{ width: "100%", marginTop: "20px", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ background: "#f2f2f2" }}>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>ID</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Name</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Role</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Status</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id}>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>{emp.id}</td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>{emp.name}</td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>{emp.role}</td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>{emp.status}</td>
            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
}


