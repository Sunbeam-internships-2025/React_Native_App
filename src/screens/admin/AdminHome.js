// import React from "react";
// import Sidebar from '../../components/SideBar';

// function AdminHome({ admin }) {
//   return (
  
//     <main style={{ padding: "20px" }}>
//       <h1 style={{ color: "white", fontWeight: "bold" }}>Admin Dashboard</h1>

//       {admin ? (
//         <p>
//           <span style={{ color: "white", fontWeight: "bold" }}>
//             Welcome, {admin.name}!
//           </span>{" "}
//           Use the <b>Actions ▼</b> menu above to manage students, staff, and system settings.
//         </p>
//       ) : (
//         <p style={{ color: "white" }}>
//           This is Admin Home Page. Please log in to access features.
//         </p>
//       )}
//     </main>
//   );
// }

// export default AdminHome;








































import React from "react";
import Sidebar from '../../components/SideBar';

function AdminHome({ admin }) {
  return (
    <div style={{ display: "flex", minHeight: "100vh", fontFamily: "Arial, sans-serif" }}>
      
      {/* Sidebar */}
      <aside style={{
        width: "220px",
        backgroundColor: "#111827",
        color: "#F9FAFB",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}>
        <div>
          <nav>
            <Sidebar />
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, backgroundColor: "#1F2937", padding: "30px" }}>
        
        {/* Header */}
        <header style={{ marginBottom: "30px" }}>
          <h1 style={{ color: "#F9FAFB", fontWeight: "bold", fontSize: "2rem" }}>Admin Dashboard</h1>
          {admin ? (
            <p style={{ color: "#D1D5DB", marginTop: "5px" }}>
              Welcome, <span style={{ fontWeight: "bold" }}>{admin.name}</span>! Manage students, staff, courses, and marks efficiently.
            </p>
          ) : (
            <p style={{ color: "#D1D5DB", marginTop: "5px" }}>Please log in to access features.</p>
          )}
        </header>

        {/* Other content can go here */}

      </main>
    </div>
  );
}

export default AdminHome;











// import React from "react";
// //import Sidebar from "../../components/Sidebar";
// import Sidebar from '../../components/SideBar';

// import DashboardCard from "../../components/DashboardCard";
// import RecentActivities from "../../components/RecentActivities";
// import "../../admin.css";

// const dashboardStats = [
//   { title: "Total Students", value: 120, colorClass: "bg-indigo-600" },
//   { title: "Total Staff", value: 25, colorClass: "bg-green-600" },
//   { title: "Total Courses", value: 8, colorClass: "bg-yellow-600" },
//   { title: "Pending Marks", value: 18, colorClass: "bg-red-600" },
// ];

// const recentActivities = [
//   { activity: "New student registration", user: "Amit Sharma", date: "2025-08-05", status: "Completed" },
//   { activity: "Marks submitted", user: "Priya Patil", date: "2025-08-21", status: "Pending" },
//   { activity: "New staff added", user: "Rohit Deshmukh", date: "2025-08-11", status: "Completed" },
// ];

// function AdminHome({ admin }) {
//   return (
//     <div className="admin-container">
//       <aside className="sidebar">
//         <div>
//           <h1>Mark Entry Website</h1>
//           <Sidebar />
//         </div>
//         <div>
//           <button>Logout</button>
//         </div>
//       </aside>
//       <main className="main-content">
//         <header className="header">
//           <h1>Admin Dashboard</h1>
//           <p>
//             {admin ? <>Welcome, <strong>{admin.name}</strong>! Manage students, staff, and marks easily.</> : "Please log in to access features."}
//           </p>
//         </header>
        
//         <section className="stats-grid">
//           {dashboardStats.map((stat, index) => (
//             <DashboardCard key={index} title={stat.title} value={stat.value} colorClass={stat.colorClass} />
//           ))}
//         </section>

//         <section>
//           <h2>Recent Activities</h2>
//           <RecentActivities activities={recentActivities} />
//         </section>
//       </main>
//     </div>
//   );
// }

// export default AdminHome;
