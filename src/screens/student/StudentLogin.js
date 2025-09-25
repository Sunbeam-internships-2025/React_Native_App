// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Platform } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import axios from 'axios';
// import Toast from 'react-native-toast-message';

// const API_URL =
//   Platform.OS === 'android'
//     ? 'http://10.0.2.2:1111' // Android emulator
//     : 'http://localhost:1111'; // iOS simulator

// const StudentLogin = ({ navigation, setStudent, setRole }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleLogin = async () => {
//     if (!email || !password) {
//       Toast.show({ type: 'error', text1: 'Please enter email and password' });
//       return;
//     }

//     setLoading(true);

//     try {
//       const response = await axios.post(`${API_URL}/student/login`, {
//         email: email.trim(),
//         password: password.trim(),
//       });

//       if (response.data.status === 'Success') {
//         const studentData = response.data.data;

//         const student = {
//           id: studentData.user_id,
//           name: studentData.first_name + ' ' + studentData.last_name,
//           email: studentData.email,
//         };

//         // Save student info
//         await AsyncStorage.setItem('studentName', student.name);
//         await AsyncStorage.setItem('studentId', student.id.toString());
//         await AsyncStorage.setItem('role', 'Student');

//         // Update state
//         setStudent(student);
//         setRole('Student');

//         // Show toast
//         Toast.show({
//           type: 'success',
//           text1: 'Login Successful!',
//           text2: `Welcome ${student.first_name || student.name}`,
//           visibilityTime: 2000,
//         });

//         // Navigate to StudentHome
//         navigation.replace('StudentHome');
//       } else {
//         Toast.show({
//           type: 'error',
//           text1: 'Login Failed',
//           text2: response.data.message || 'Invalid email or password',
//         });
//       }
//     } catch (error) {
//       console.error('Login error:', error.message);
//       Toast.show({
//         type: 'error',
//         text1: 'Network Error',
//         text2: 'Cannot connect to server. Check your API URL and connection.',
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Student Login</Text>

//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//         keyboardType="email-address"
//         autoCapitalize="none"
//       />

//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//       />

//       <TouchableOpacity
//         style={[styles.button, loading && styles.buttonDisabled]}
//         onPress={handleLogin}
//         disabled={loading}
//       >
//         <Text style={styles.buttonText}>{loading ? 'Logging in...' : 'Login'}</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default StudentLogin;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f2f6fc',
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: '700',
//     color: '#1e293b',
//     marginBottom: 40,
//   },
//   input: {
//     width: '90%',
//     maxWidth: 400,
//     backgroundColor: '#fff',
//     padding: 15,
//     marginBottom: 20,
//     borderRadius: 12,
//     borderWidth: 1,
//     borderColor: '#e0e6ed',
//     fontSize: 16,
//   },
//   button: {
//     width: '90%',
//     maxWidth: 400,
//     backgroundColor: '#3b82f6',
//     padding: 15,
//     borderRadius: 12,
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   buttonDisabled: {
//     backgroundColor: '#93c5fd',
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: '600',
//   },
// });

import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import Toast from "react-native-toast-message";

// Use correct IP for your environment
const API_URL =
  Platform.OS === "android"
    ? ""
    : "http://localhost:7777";

const StudentLogin = ({ navigation, setStudent, setRole }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Toast.show({ type: "error", text1: "Please enter email and password" });
      return;
    }
    setLoading(true);
    try {
      const response = await axios.post(`${API_URL}/student/login`, {
        email,
        password,
      });
      console.log("response:: ", response);

      if (response.data.status === "Success") {
        const studentData = response.data;

        let token = studentData.token;
        let payloadBase64 = token.split(".")[1];
        let payloadStr = atob(payloadBase64);
        let payload = JSON.parse(payloadStr);
        const student = payload;

        // const student = JSON.parse(await AsyncStorage.getItem("student"));
        // await AsyncStorage.setItem("student", JSON.stringify(student));

        await AsyncStorage.setItem("token", token);
        await AsyncStorage.setItem("studentName", student.student_name);
        // await AsyncStorage.setItem("studentId", student.student_id);
        await AsyncStorage.setItem("studentId", String(student.student_id));

        setStudent(student);

        setRole("Student");
        Toast.show({ type: "success", text1: "Login successful!" });
        navigation.replace("StudentHome");
      } else {
        Toast.show({
          type: "error",
          text1: response.data.message || "Invalid email/password",
        });
      }
    } catch (err) {
      console.error(err.message);
      Toast.show({
        type: "error",
        text1: "Network Error",
        text2: "Cannot connect to server.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Student Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity
        style={[styles.button, loading && styles.buttonDisabled]}
        onPress={handleLogin}
        disabled={loading}
      >
        <Text style={styles.buttonText}>
          {loading ? "Logging in..." : "Login"}
        </Text>
      </TouchableOpacity>
      <Toast />
    </View>
  );
};

export default StudentLogin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f2f6fc",
  },
  title: { fontSize: 28, fontWeight: "700", marginBottom: 40 },
  input: {
    width: "90%",
    maxWidth: 400,
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#e0e6ed",
  },
  button: {
    width: "90%",
    maxWidth: 400,
    backgroundColor: "#3b82f6",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
  },
  buttonDisabled: { backgroundColor: "#93c5fd" },
  buttonText: { color: "#fff", fontWeight: "600" },
});
