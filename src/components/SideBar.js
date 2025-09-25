import React from 'react';
import { NavLink } from 'react-router-dom';

function Sidebar() {
  return (
    <aside style={{ width: "200px", backgroundColor: "#111827", color: "white", padding: "20px" }}>
         <h1 style={{ color: "#F9FAFB", fontWeight: "bold", fontSize: "1.5rem" }}>Mark Entry Portal </h1>
      {/* <h2 style={{ marginBottom: "20px" }}>Exam Portal</h2> */}
      <nav style={{ display: "flex", flexDirection: "column" }}>
        <NavLink to="/admin/dashboard" style={{ margin: "5px 0", color: "white", textDecoration: "none", padding: "10px 0", cursor: "pointer" }}>
          Dashboard
        </NavLink>
        <NavLink to="/admin/students" style={{ margin: "5px 0", color: "white", textDecoration: "none", padding: "10px 0", cursor: "pointer" }}>
          Show All Students
        </NavLink>
        {/* <NavLink to="/staff" style={{ margin: "5px 0", color: "white", textDecoration: "none", padding: "10px 0", cursor: "pointer"}}>
          Show All Staff
        </NavLink> */}
        <NavLink to="/admin/batch" style={{ margin: "5px 0", color: "white", textDecoration: "none", padding: "10px 0", cursor: "pointer" }}>
          Show All Batch
        </NavLink>
        <NavLink to="/admin/course" style={{ margin: "5px 0", color: "white", textDecoration: "none", padding: "10px 0", cursor: "pointer" }}>
          Show All Course
        </NavLink>
        <NavLink to="/admin/group" style={{ margin: "5px 0", color: "white", textDecoration: "none", padding: "10px 0", cursor: "pointer"}}>
          Show All Group
        </NavLink>
        <NavLink to="/admin/module" style={{ margin: "5px 0", color: "white", textDecoration: "none", padding: "10px 0", cursor: "pointer"}}>
          Show All Module
        </NavLink>
        <NavLink to="/admin/staff" style={{ margin: "5px 0", color: "white", textDecoration: "none", padding: "10px 0", cursor: "pointer"}}>
          Add a Staff
        </NavLink>
      </nav>
      {/* <div style={{ marginTop: "20px", borderTop: "1px solid #374151", paddingTop: "10px" }}>
        <button style={{ background: "none", border: "none", color: "white", cursor: "pointer" }}>Logout</button>
      </div> */}
    </aside>
  );
}

export default Sidebar;
