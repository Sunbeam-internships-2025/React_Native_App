


// import axios from 'axios';
// import React, { useEffect, useState } from 'react';

// function Course() {
//     const [courses, setCourses] = useState([]);
//     const [batches, setBatches] = useState([]);

//     // Fetch all courses
//     const getAllCourses = async () => {
//         try {
//             let res = await axios.get("http://localhost:1111/course/all-courses");
//             setCourses(res.data.data);
//         } catch (error) {
//             console.error("Error fetching courses:", error);
//         }
//     };

//     // Fetch all batches
//     const getAllBatches = async () => {
//         try {
//             let res = await axios.get("http://localhost:1111/batch/all-batch");
//             setBatches(res.data.data);
//         } catch (error) {
//             console.error("Error fetching batches:", error);
//         }
//     };

//     // Update course batch assignment
//     const updateCourseBatch = async (course_id, batch_id) => {
//         try {
//             let res = await axios.put(`http://localhost:1111/course/update-course/${course_id}`, {
//                 batch_id: parseInt(batch_id)
//             });
//             console.log(res.data);
//             getAllCourses(); // Refresh the courses list
//         } catch (error) {
//             console.error("Error updating course batch:", error);
//         }
//     };

//     useEffect(() => {
//         getAllCourses();
//         getAllBatches();
//     }, []);

//     return (
//         <div style={styles.container}>
//             <h1 style={styles.heading}>Courses Management</h1>
//             <table style={styles.table}>
//                 <thead style={styles.tableHead}>
//                     <tr>
//                         <th style={styles.th}>Sr. No</th>
//                         <th style={styles.th}>Course ID</th>
//                         <th style={styles.th}>Course Name</th>
//                         <th style={styles.th}>Batch Name</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {courses.map((courseItem, index) => (
//                         <tr key={courseItem.course_id} style={styles.tableRow}>
//                             <td style={styles.td}>{index + 1}</td>
//                             <td style={styles.td}>{courseItem.course_id}</td>
//                             <td style={styles.td}>{courseItem.course_name}</td>
//                             <td style={styles.td}>
//                                 <select
//                                     style={styles.select}
//                                     value={courseItem.batch_id || ""}
//                                     onChange={(e) => updateCourseBatch(courseItem.course_id, e.target.value)}
//                                 >
//                                     <option value="">Select Batch</option>
//                                     {batches.map((batch) => (
//                                         <option key={batch.batch_id} value={batch.batch_id}>
//                                             {batch.batch_name}
//                                         </option>
//                                     ))}
//                                 </select>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// }

// const styles = {
//     container: {
//         maxWidth: '900px',
//         margin: '40px auto',
//         padding: '20px',
//         backgroundColor: '#fff',
//         borderRadius: '8px',
//         boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
//         fontFamily: 'Arial, sans-serif'
//     },
//     heading: {
//         textAlign: 'center',
//         marginBottom: '20px',
//         color: '#333'
//     },
//     table: {
//         width: '100%',
//         borderCollapse: 'collapse'
//     },
//     tableHead: {
//         backgroundColor: '#f4f4f4'
//     },
//     th: {
//         border: '1px solid #ddd',
//         padding: '12px',
//         textAlign: 'left',
//         fontWeight: 'bold'
//     },
//     td: {
//         border: '1px solid #ddd',
//         padding: '12px'
//     },
//     tableRow: {
//         backgroundColor: '#fff'
//     },
//     select: {
//         padding: '6px 10px',
//         borderRadius: '4px',
//         border: '1px solid #ccc'
//     }
// };

// export default Course;





// import axios from 'axios';
// import React, { useEffect, useState } from 'react'

// function Course() {
//     let [course, setCourse] = useState([]);
//     let [batches, setBatches] = useState([]);


//     let getAllCourse = async () => {
//         let res = await axios.get("/api/admin/all-courses");
//         setCourse(res.data.data);
//     }

//     let getAllBatches = async () => {
//         let res = await axios.get("/api/admin/all-batch");
//         setBatches(res.data.data);
//     }

//     let getAllCoursesByBatch = async (batch_name) => {
//         if (batch_name) {
//             let res = await axios.get("/api/admin/get-all-courses-by-batch?batch_name=" + batch_name);
//             setCourse(res.data.data);
//         }
//         else{
//             getAllCourse();
//         }
//     }

    

//     useEffect(() => {
//         getAllCourse();
//         getAllBatches();
//     }, []);

//     return (
//         <>
//             <h1>Course</h1>
           
//             <select onChange={(e) => getAllCoursesByBatch(e.target.value)}>
//                 <option value={""}>Select Batch</option>
//                 {batches.map(batch => (
//                     <option value={batch.batch_name} >{batch.batch_name}</option>
//                 )
//                 )}
//             </select>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Sr. No</th>
//                         <th>Course Id</th>
//                         <th>Course Name</th>
//                         <th>Batch Name</th>
//                     </tr>
//                 </thead>


//                 <tbody>
//                     {course.map((course, index) => {
//                         return (
//                             <tr key={course.batch_id}>
//                                 <td>{index + 1}</td>
//                                 <td>{course.course_id}</td>
//                                 <td>{course.course_name}</td>
//                                 <td>{course.batch_name}</td>
                               

//                             </tr>
//                         )
//                     })}

//                 </tbody>

//             </table>
//         </>


//     )
// }

// export default Course;






// import axios from 'axios';
// import React, { useEffect, useState } from 'react';

// function Course() {
//     const [courses, setCourses] = useState([]);
//     const [batches, setBatches] = useState([]);

//     // Fetch all courses
//     const getAllCourses = async () => {
//         try {
//             let res = await axios.get("http://localhost:1111/course/all-courses");
//             setCourses(res.data.data);
//         } catch (error) {
//             console.error("Error fetching courses:", error);
//         }
//     };

//     // Fetch all batches
//     const getAllBatches = async () => {
//         try {
//             let res = await axios.get("http://localhost:1111/batch/all-batch");
//             setBatches(res.data.data);
//         } catch (error) {
//             console.error("Error fetching batches:", error);
//         }
//     };

//     // Fetch courses by batch name
//     const getAllCoursesByBatch = async (batch_name) => {
//         try {
//             if (batch_name) {
//                 let res = await axios.get(`http://localhost:1111/course/get-all-courses-by-batch?batch_name=${batch_name}`);
//                 setCourses(res.data.data);
//             } else {
//                 getAllCourses();
//             }
//         } catch (error) {
//             console.error("Error fetching courses by batch:", error);
//         }
//     };

//     useEffect(() => {
//         getAllCourses();
//         getAllBatches();
//     }, []);

//     return (
//         <div style={{ maxWidth: '800px', margin: '20px auto', fontFamily: 'Arial, sans-serif' }}>
//             <h1 style={{ textAlign: 'center' }}>Course Management</h1>

//             <div style={{ marginBottom: '20px', textAlign: 'center' }}>
//                 <select onChange={(e) => getAllCoursesByBatch(e.target.value)} style={{ padding: '8px', borderRadius: '4px' }}>
//                     <option value="">Select Batch</option>
//                     {batches.map(batch => (
//                         <option key={batch.batch_id} value={batch.batch_name}>
//                             {batch.batch_name}
//                         </option>
//                     ))}
//                 </select>
//             </div>

//             <table style={{ width: '100%', borderCollapse: 'collapse' }}>
//                 <thead style={{ backgroundColor: '#f4f4f4' }}>
//                     <tr>
//                         <th style={{ border: '1px solid #ddd', padding: '8px' }}>Sr. No</th>
//                         <th style={{ border: '1px solid #ddd', padding: '8px' }}>Course Id</th>
//                         <th style={{ border: '1px solid #ddd', padding: '8px' }}>Course Name</th>
//                         <th style={{ border: '1px solid #ddd', padding: '8px' }}>Batch Name</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {courses.map((course, index) => (
//                         <tr key={course.course_id}>
//                             <td style={{ border: '1px solid #ddd', padding: '8px' }}>{index + 1}</td>
//                             <td style={{ border: '1px solid #ddd', padding: '8px' }}>{course.course_id}</td>
//                             <td style={{ border: '1px solid #ddd', padding: '8px' }}>{course.course_name}</td>
//                             <td style={{ border: '1px solid #ddd', padding: '8px' }}>{course.batch_name}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// }

// export default Course;


import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Course() {
    const [courses, setCourses] = useState([]);
    const [batches, setBatches] = useState([]);
    const [loading, setLoading] = useState(false);

    // Fetch all courses
    const getAllCourses = async () => {
        try {
            setLoading(true);
            let res = await axios.get("http://localhost:1111/course/all-courses");
            setCourses(res.data.data);
        } catch (error) {
            console.error("Error fetching courses:", error);
        } finally {
            setLoading(false);
        }
    };

    // Fetch all batches
    const getAllBatches = async () => {
        try {
            let res = await axios.get("http://localhost:1111/batch/all-batch");
            setBatches(res.data.data);
        } catch (error) {
            console.error("Error fetching batches:", error);
        }
    };

    // Fetch courses by batch name
    const getAllCoursesByBatch = async (batch_name) => {
        try {
            setLoading(true);
            if (batch_name) {
                let res = await axios.get(`http://localhost:1111/course/get-all-courses-by-batch?batch_name=${batch_name}`);
                setCourses(res.data.data);
            } else {
                await getAllCourses();
            }
        } catch (error) {
            console.error("Error fetching courses by batch:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getAllCourses();
        getAllBatches();
    }, []);

    return (
        <div style={{ maxWidth: '800px', margin: '20px auto', fontFamily: 'Arial, sans-serif' }}>
            <h1 style={{ textAlign: 'center' }}>Course Management</h1>

            <div style={{ marginBottom: '20px', textAlign: 'center' }}>
                <select onChange={(e) => getAllCoursesByBatch(e.target.value)} style={{ padding: '8px', borderRadius: '4px' }}>
                    <option value="">Select Batch</option>
                    {batches.map(batch => (
                        <option key={batch.batch_id} value={batch.batch_name}>
                            {batch.batch_name}
                        </option>
                    ))}
                </select>
            </div>

            {loading ? (
                <p style={{ textAlign: 'center' }}>Loading...</p>
            ) : (
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead style={{ backgroundColor: '#f4f4f4' }}>
                        <tr>
                            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Sr. No</th>
                            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Course Id</th>
                            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Course Name</th>
                            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Batch Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {courses.length === 0 ? (
                            <tr>
                                <td colSpan="4" style={{ textAlign: 'center', padding: '8px' }}>No courses found</td>
                            </tr>
                        ) : (
                            courses.map((course, index) => (
                                <tr key={course.course_id}>
                                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>{index + 1}</td>
                                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>{course.course_id}</td>
                                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>{course.course_name}</td>
                                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>{course.batch_name}</td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default Course;
