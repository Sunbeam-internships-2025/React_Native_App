// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';

// const StudentRegister = () => {
//   const [formData, setFormData] = useState({
//     first_name: '',
//     last_name: '',
//     mobile_number: '',
//     email: '',
//     password: '',
//   });

//   const handleChange = (name, value) => {
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleRegister = async () => {
//     try {
//       const response = await fetch('http://localhost:1111/student/register', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         Alert.alert('Error', data.message || 'Registration Failed!');
//         return;
//       }

//       Alert.alert('Success', `Registration Successful! Student ID: ${data.student_id}`);

//       // Reset form
//       setFormData({
//         first_name: '',
//         last_name: '',
//         mobile_number: '',
//         email: '',
//         password: '',
//       });
//     } catch (err) {
//       console.error(err);
//       Alert.alert('Error', 'Something went wrong! Check backend or CORS.');
//     }
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Text style={styles.title}>Student Register</Text>

//       <TextInput
//         style={styles.input}
//         placeholder="First Name"
//         value={formData.first_name}
//         onChangeText={(value) => handleChange('first_name', value)}
//       />

//       <TextInput
//         style={styles.input}
//         placeholder="Last Name"
//         value={formData.last_name}
//         onChangeText={(value) => handleChange('last_name', value)}
//       />

//       <TextInput
//         style={styles.input}
//         placeholder="Mobile Number"
//         value={formData.mobile_number}
//         onChangeText={(value) => handleChange('mobile_number', value)}
//         keyboardType="phone-pad"
//       />

//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         value={formData.email}
//         onChangeText={(value) => handleChange('email', value)}
//         keyboardType="email-address"
//         autoCapitalize="none"
//       />

//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         value={formData.password}
//         onChangeText={(value) => handleChange('password', value)}
//         secureTextEntry
//       />

//       <TouchableOpacity style={styles.button} onPress={handleRegister}>
//         <Text style={styles.buttonText}>Register</Text>
//       </TouchableOpacity>
//     </ScrollView>
//   );
// };

// export default StudentRegister;

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//     backgroundColor: '#fff',
//   },
//   title: {
//     fontSize: 24,
//     marginBottom: 30,
//     fontWeight: 'bold',
//   },
//   input: {
//     width: '100%',
//     borderWidth: 1,
//     borderColor: '#ccc',
//     padding: 10,
//     marginBottom: 15,
//     borderRadius: 8,
//   },
//   button: {
//     width: '100%',
//     backgroundColor: '#3b82f6',
//     padding: 15,
//     borderRadius: 8,
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
// });

import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Platform,
} from "react-native";
import Toast from "react-native-toast-message";

const API_URL =
  Platform.OS === "android"
    ? "http://192.168.1.10:7777/student/register" // your PC IP
    : "http://localhost:7777/student/register";

const StudentRegister = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    mobile_number: "",
    email: "",
    password: "",
  });

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = async () => {
    if (
      !formData.first_name ||
      !formData.last_name ||
      !formData.email ||
      !formData.password ||
      !formData.mobile_number
    ) {
      Toast.show({ type: "error", text1: "Please fill all fields" });
      return;
    }

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        Toast.show({
          type: "error",
          text1: data.message || "Registration Failed!",
        });
        return;
      }

      Toast.show({
        type: "success",
        text1: "Registration Successful!",
        text2: `Student ID: ${data.student_id}`,
      });

      // Reset form
      setFormData({
        first_name: "",
        last_name: "",
        mobile_number: "",
        email: "",
        password: "",
      });
    } catch (err) {
      console.error(err);
      Toast.show({
        type: "error",
        text1: "Network Error",
        text2: "Check backend or IP address.",
      });
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Student Register</Text>

      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={formData.first_name}
        onChangeText={(value) => handleChange("first_name", value)}
      />

      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={formData.last_name}
        onChangeText={(value) => handleChange("last_name", value)}
      />

      <TextInput
        style={styles.input}
        placeholder="Mobile Number"
        value={formData.mobile_number}
        onChangeText={(value) => handleChange("mobile_number", value)}
        keyboardType="phone-pad"
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={formData.email}
        onChangeText={(value) => handleChange("email", value)}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={formData.password}
        onChangeText={(value) => handleChange("password", value)}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

      <Toast />
    </ScrollView>
  );
};

export default StudentRegister;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    marginBottom: 30,
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 15,
    borderRadius: 8,
  },
  button: {
    width: "100%",
    backgroundColor: "#3b82f6",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
