

import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const StudentHome = ({ student }) => {
  const [studentName, setStudentName] = useState('Student');

  useEffect(() => {
    const fetchName = async () => {
      if (student?.name) {
        setStudentName(student.name);
      } else {
        const nameFromStorage = await AsyncStorage.getItem('studentName');
        setStudentName(nameFromStorage || 'Student');
      }
    };
    fetchName();
  }, [student]);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Welcome, {studentName}!</Text>
        <Text style={styles.text}>This is your Home page.</Text>
        <Text style={styles.text}>Click "Show Marks" in the navbar to see your marks.</Text>
      </View>
    </View>
  );
};

export default StudentHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f7fa',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: '#fff',
    padding: 40,
    borderRadius: 12,
    maxWidth: 500,
    width: '100%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
    color: '#333',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text: {
    fontSize: 18,
    color: '#555',
    textAlign: 'center',
    marginBottom: 8,
  },
});
