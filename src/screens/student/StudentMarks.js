// import React, { useEffect, useState } from 'react';
// import { View, Text, FlatList, StyleSheet, ActivityIndicator, Dimensions } from 'react-native';
// import axios from 'axios';

// const API_URL = 'http://localhost:1111/student/marks'; // Update as needed
// const screenHeight = Dimensions.get('window').height;

// const StudentMarks = () => {
//   const [marks, setMarks] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchMarks = async () => {
//       try {
//         const response = await axios.get(API_URL);
//         setMarks(response.data.data);
//       } catch (error) {
//         console.error('Error fetching marks:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchMarks();
//   }, []);

//   if (loading) {
//     return (
//       <View style={styles.loadingContainer}>
//         <ActivityIndicator size="large" color="#3b82f6" />
//         <Text style={styles.loadingText}>Loading marks...</Text>
//       </View>
//     );
//   }

//   const renderItem = ({ item, index }) => (
//     <View style={[styles.row, index % 2 === 0 ? styles.rowEven : styles.rowOdd]}>
//       <Text style={styles.cell}>{item.student_name || '-'}</Text>
//       <Text style={styles.cell}>{item.course_name || '-'}</Text>
//       <Text style={styles.cell}>{item.module_name || '-'}</Text>
//       <Text style={styles.cell}>{item.theory_marks ?? '-'}</Text>
//       <Text style={styles.cell}>{item.lab_marks ?? '-'}</Text>
//       <Text style={styles.cell}>{item.IA_1 ?? '-'}</Text>
//       <Text style={styles.cell}>{item.IA_2 ?? '-'}</Text>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Student Marks</Text>

//       <View style={styles.table}>
//         {/* Table Header */}
//         <View style={[styles.row, styles.headerRow]}>
//           <Text style={styles.headerCell}>Student</Text>
//           <Text style={styles.headerCell}>Course</Text>
//           <Text style={styles.headerCell}>Module</Text>
//           <Text style={styles.headerCell}>Theory</Text>
//           <Text style={styles.headerCell}>Lab</Text>
//           <Text style={styles.headerCell}>IA 1</Text>
//           <Text style={styles.headerCell}>IA 2</Text>
//         </View>

//         {/* Table Body with vertical scroll */}
//         <FlatList
//           data={marks}
//           renderItem={renderItem}
//           keyExtractor={(item, index) => index.toString()}
//           style={styles.list}
//           showsVerticalScrollIndicator={true} // ✅ show vertical scrollbar
//         />
//       </View>
//     </View>
//   );
// };

// export default StudentMarks;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: '#f8fafc',
//     alignItems: 'center',
//   },
//   loadingContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   loadingText: {
//     marginTop: 8,
//     fontSize: 16,
//     color: '#3b82f6',
//     fontWeight: '500',
//   },
//   title: {
//     fontSize: 26,
//     fontWeight: 'bold',
//     marginBottom: 16,
//     color: '#1e293b',
//     textAlign: 'center',
//   },
//   table: {
//     width: '100%',
//     maxWidth: 800,
//     borderRadius: 8,
//     overflow: 'hidden',
//     backgroundColor: '#fff',
//     elevation: 2,
//     flex: 1,
//   },
//   list: {
//     maxHeight: screenHeight * 0.7, // Limit height to 70% of screen
//   },
//   row: {
//     flexDirection: 'row',
//     borderBottomWidth: 1,
//     borderColor: '#e2e8f0',
//     paddingVertical: 12,
//   },
//   rowEven: {
//     backgroundColor: '#f9fafb',
//   },
//   rowOdd: {
//     backgroundColor: '#fff',
//   },
//   headerRow: {
//     backgroundColor: '#515459ff',
//   },
//   cell: {
//     flex: 1,
//     paddingHorizontal: 8,
//     textAlign: 'center',
//     fontSize: 14,
//     color: '#1e293b',
//   },
//   headerCell: {
//     flex: 1,
//     paddingHorizontal: 8,
//     textAlign: 'center',
//     fontWeight: '700',
//     color: '#fff',
//     fontSize: 14,
//   },
// });

import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  Dimensions,
  Platform,
} from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
const screenHeight = Dimensions.get("window").height;

// Use correct IP for Android device / localhost for iOS
const API_URL =
  Platform.OS === "android"
    ? "http://192.168.1.10:7777/student/marks"
    : "http://localhost:7777/student/marks";

const StudentMarks = () => {
  const [marks, setMarks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const fetchMarks = async () => {
      try {
        const token = await AsyncStorage.getItem("token");
        if (!token) {
          setErrorMsg("No token found. Please login again.");
          setLoading(false);
          return;
        }

        const response = await axios.get(API_URL, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        // console.log("response:: ", response);
        setMarks(response.data.data || []);
      } catch (error) {
        console.error("Error fetching marks:", error.message);
        setErrorMsg(
          "Network Error or Unauthorized. Check your login or token."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchMarks();
  }, []);

  // useEffect(() => {
  //   const fetchMarks = async () => {
  //     try {
  //       const response = await axios.get(API_URL);
  //       console.log("response:: ", response)
  //       setMarks(response.data.data || []);
  //     } catch (error) {
  //       console.error("Error fetching marks:", error.message);
  //       setErrorMsg("Network Error. Check your server and IP address.");
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchMarks();
  // }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#3b82f6" />
        <Text style={styles.loadingText}>Loading marks...</Text>
      </View>
    );
  }

  if (errorMsg) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={[styles.loadingText, { color: "red" }]}>{errorMsg}</Text>
      </View>
    );
  }

  const renderItem = ({ item, index }) => (
    <View
      style={[styles.row, index % 2 === 0 ? styles.rowEven : styles.rowOdd]}
    >
      <Text style={styles.cell}>{item.student_name || "-"}</Text>
      <Text style={styles.cell}>{item.course_name || "-"}</Text>
      <Text style={styles.cell}>{item.module_name || "-"}</Text>
      <Text style={styles.cell}>{item.theory_marks ?? "-"}</Text>
      <Text style={styles.cell}>{item.lab_marks ?? "-"}</Text>
      <Text style={styles.cell}>{item.IA_1 ?? "-"}</Text>
      <Text style={styles.cell}>{item.IA_2 ?? "-"}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Student Marks</Text>
      <View style={styles.table}>
        {/* Table Header */}
        <View style={[styles.row, styles.headerRow]}>
          <Text style={styles.headerCell}>Student</Text>
          <Text style={styles.headerCell}>Course</Text>
          <Text style={styles.headerCell}>Module</Text>
          <Text style={styles.headerCell}>Theory</Text>
          <Text style={styles.headerCell}>Lab</Text>
          <Text style={styles.headerCell}>IA 1</Text>
          <Text style={styles.headerCell}>IA 2</Text>
        </View>

        {/* Table Body */}
        <FlatList
          data={marks}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          style={styles.list}
          showsVerticalScrollIndicator={true}
        />
      </View>
    </View>
  );
};

export default StudentMarks;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f8fafc",
    alignItems: "center",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    marginTop: 8,
    fontSize: 16,
    color: "#444b57ff",
    fontWeight: "500",
    textAlign: "center",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#1e293b",
    textAlign: "center",
  },
  table: {
    width: "100%",
    maxWidth: 800,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#fff",
    elevation: 2,
    flex: 1,
  },
  list: {
    maxHeight: screenHeight * 0.7,
  },
  row: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#e2e8f0",
    paddingVertical: 12,
  },
  rowEven: {
    backgroundColor: "#f9fafb",
  },
  rowOdd: {
    backgroundColor: "#fff",
  },
  headerRow: {
    backgroundColor: "#545b67ff",
  },
  cell: {
    flex: 1,
    paddingHorizontal: 8,
    textAlign: "center",
    fontSize: 11,
    color: "#1e293b",
  },
  headerCell: {
    flex: 1,
    paddingHorizontal: 5,
    textAlign: "center",
    fontWeight: "700",
    color: "#fff",
    fontSize: 14,
  },
});
