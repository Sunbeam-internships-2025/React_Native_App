


// // frontend/src/components/updatestaff.js



// import React, { useState, useEffect } from 'react';
// import { getAllCourses, getAllRoles, updateStaff } from '../pages/services/staffApi';

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

// const inputStyle = {
//   padding: '10px',
//   width: '100%',
//   marginBottom: '15px',
//   borderRadius: '5px',
//   border: '1px solid #ccc',
//   fontSize: '14px',
// };

// const selectStyle = { ...inputStyle };

// const buttonStyle = {
//   padding: '10px 20px',
//   backgroundColor: '#4CAF50',
//   color: '#fff',
//   border: 'none',
//   borderRadius: '5px',
//   cursor: 'pointer',
//   fontSize: '16px',
// };

// const UpdateStaff = ({ onStaffUpdated }) => {
//   const [email, setEmail] = useState('');
//   const [courseId, setCourseId] = useState('');
//   const [roleId, setRoleId] = useState('');
//   const [courses, setCourses] = useState([]);
//   const [roles, setRoles] = useState([]);

//   useEffect(() => {
//     getAllCourses().then((res) => setCourses(res.data.data));
//     getAllRoles().then((res) => setRoles(res.data.data));
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await updateStaff({ email, course_id: courseId, role_id: roleId });
//       alert('Staff updated successfully');
//       setEmail('');
//       setCourseId('');
//       setRoleId('');
//       onStaffUpdated();
//     } catch (error) {
//       console.error(error);
//       alert('Error updating staff');
//     }
//   };

//   return (
//     <div style={containerStyle}>
//       <div style={headerStyle}>Update Staff</div>
//       <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
//         <div>
//           <label>Email:</label>
//           <input
//             style={inputStyle}
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Enter staff email"
//             required
//           />
//         </div>
//         <div>
//           <label>Course:</label>
//           <select
//             style={selectStyle}
//             value={courseId}
//             onChange={(e) => setCourseId(e.target.value)}
//             required
//           >
//             <option value="">Select Course</option>
//             {courses.map((c) => (
//               <option key={c.course_id} value={c.course_id}>
//                 {c.course_name}
//               </option>
//             ))}
//           </select>
//         </div>
//         <div>
//           <label>Role:</label>
//           <select
//             style={selectStyle}
//             value={roleId}
//             onChange={(e) => setRoleId(e.target.value)}
//             required
//           >
//             <option value="">Select Role</option>
//             {roles.map((r) => (
//               <option key={r.role_id} value={r.role_id}>
//                 {r.role_name}
//               </option>
//             ))}
//           </select>
//         </div>
//         <button style={buttonStyle} type="submit">
//           Update
//         </button>
//       </form>
//     </div>
//   );
// };

// export default UpdateStaff;
















// frontend/src/components/updatestaff.js


import React, { useState, useEffect } from "react";
import { updateStaff, addStaff } from "../pages/services/staffApi";
import { toast } from "react-toastify";

const UpdateStaff = ({ editingStaff, setEditingStaff, refreshStaff }) => {
  const [formData, setFormData] = useState({
    staffid: "",
    userid: "",
    roleid: "",
    courseid: "",
  });

  useEffect(() => {
    if (editingStaff) {
      setFormData({
        staffid: editingStaff.staff_id,
        userid: editingStaff.user_id,
        roleid: editingStaff.role_id,
        courseid: editingStaff.course_id,
      });
    }
  }, [editingStaff]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editingStaff) {
        await updateStaff(formData);
        toast.success("Staff updated successfully!");
      } else {
        await addStaff(formData);
        toast.success("Staff added successfully!");
      }
      setFormData({ staffid: "", userid: "", roleid: "", courseid: "" });
      setEditingStaff(null);
      refreshStaff();
    } catch (err) {
      toast.error(err.response?.data?.message || "Operation failed");
    }
  };

  return (
    <div>
      <h2>{editingStaff ? "Edit Staff" : "Add Staff"}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          name="staffid"
          placeholder="Staff ID"
          value={formData.staffid}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="userid"
          placeholder="User ID"
          value={formData.userid}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="roleid"
          placeholder="Role ID"
          value={formData.roleid}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="courseid"
          placeholder="Course ID"
          value={formData.courseid}
          onChange={handleChange}
          required
        />
        <button type="submit">{editingStaff ? "Update" : "Add"}</button>
      </form>
    </div>
  );
};

export default UpdateStaff;
