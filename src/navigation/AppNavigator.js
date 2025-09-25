



import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

// Screens
import Home from '../screens/Home';
import StudentLogin from '../screens/student/StudentLogin';
import StudentRegister from '../screens/student/StudentRegister';
import StudentHome from '../screens/student/StudentHome';
import StudentMarks from '../screens/student/StudentMarks';

// Components
import Layout from '../components/Layout';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  const [role, setRole] = useState('Guest');
  const [student, setStudent] = useState(null);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home">
          {props => <Layout {...props} component={Home} role={role} setRole={setRole} />}
        </Stack.Screen>

        <Stack.Screen name="StudentLogin">
          {props => (
            <Layout
              {...props}
              component={StudentLogin}
              role={role}
              setRole={setRole}
              setStudent={setStudent}
            />
          )}
        </Stack.Screen>

        <Stack.Screen name="StudentRegister">
          {props => <Layout {...props} component={StudentRegister} role={role} setRole={setRole} />}
        </Stack.Screen>

        <Stack.Screen name="StudentHome">
          {props => (
            <Layout
              {...props}
              component={() => <StudentHome student={student} />}
              role={role}
              setRole={setRole}
            />
          )}
        </Stack.Screen>

        <Stack.Screen name="StudentMarks">
          {props => <Layout {...props} component={StudentMarks} role={role} setRole={setRole} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
