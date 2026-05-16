export default function App() {
  return (
    <div
      style={{
        background: "#050816",
        color: "white",
        minHeight: "100vh",
        padding: "40px",
        fontFamily: "Arial",
      }}
    >
      <h1>JJDS Operating System</h1>

      <p>
        AI construction operating system successfully deployed.
      </p>

      <div
        style={{
          marginTop: "30px",
          padding: "20px",
          background: "#10182b",
          borderRadius: "12px",
        }}
      >
        <h2>Modules</h2>

        <ul>
          <li>Jobs</li>
          <li>RFQ AI</li>
          <li>GPS Timesheets</li>
          <li>Employees</li>
          <li>Documents</li>
          <li>Safety</li>
          <li>AI Chat</li>
        </ul>
      </div>
    </div>
  );
}