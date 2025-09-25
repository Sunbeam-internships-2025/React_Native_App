

// // frontend/src/components/staffList.js

// import React from 'react';

// const containerStyle = {
//   maxWidth: '900px',
//   margin: '0 auto',
//   fontFamily: 'Arial, sans-serif',
//   padding: '20px',
//   borderRadius: '10px',
//   boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
//   backgroundColor: '#fff',
// };

// const headerStyle = {
//   backgroundColor: 'rgb(121, 113, 156)',
//   color: 'white',
//   padding: '15px',
//   textAlign: 'center',
//   fontWeight: 'bold',
//   fontSize: '18px',
//   borderRadius: '5px 5px 0 0',
// };

// const tableStyle = {
//   width: '100%',
//   borderCollapse: 'collapse',
//   marginTop: '0',
// };

// const thStyle = {
//   backgroundColor: "#79719cff",
//   color: 'white',
//   padding: '10px',
//   textAlign: 'left',
// };

// const tdStyle = {
//   padding: '10px',
//   borderBottom: '1px solid #ddd',
// };

// const StaffList = ({ staff }) => {
//   return (
//     <div style={containerStyle}>
//       <div style={headerStyle}>All Staff</div>
//       <table style={tableStyle}>
//         <thead>
//           <tr>
//             <th style={thStyle}>Staff ID</th>
//             <th style={thStyle}>Staff Name</th>
//             <th style={thStyle}>Email</th>
//             <th style={thStyle}>Course Name</th>
//             <th style={thStyle}>Role</th>
//           </tr>
//         </thead>
//         <tbody>
//           {staff.map((s) => (
//             <tr key={s.staff_id}>
//               <td style={tdStyle}>{s.staff_id}</td>
//               <td style={tdStyle}>{s.staff_name}</td>
//               <td style={tdStyle}>{s.email}</td>
//               <td style={tdStyle}>{s.course_name}</td>
//               <td style={tdStyle}>{s.role_name}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default StaffList;





import React from "react";
import { deleteStaff } from "../pages/services/staffApi";
import { toast } from "react-toastify";

const StaffList = ({ staff, setEditingStaff, refreshStaff }) => {

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this staff?")) return;

    try {
      await deleteStaff(id);
      toast.success("Staff deleted successfully!");
      refreshStaff();
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to delete staff");
    }
  };

  return (
    <div>
      <h2>Staff List</h2>
      <table border="1" cellPadding="5">
        <thead>
          <tr>
            <th>ID</th>
            <th>User ID</th>
            <th>Role ID</th>
            <th>Course ID</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {staff.map((s) => (
            <tr key={s.staff_id}>
              <td>{s.staff_id}</td>
              <td>{s.user_id}</td>
              <td>{s.role_id}</td>
              <td>{s.course_id}</td>
              <td>
                <button onClick={() => setEditingStaff(s)}>Edit</button>
                <button onClick={() => handleDelete(s.staff_id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StaffList;
