


// import React from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// export default function Navbar({ role, setRole }) {
//   const navigation = useNavigation();

//   const handleLogout = async () => {
//     await AsyncStorage.clear();
//     setRole("Guest");
//     Alert.alert("Logged out", "You have been logged out.");
//     navigation.navigate("Home");
//   };

//   return (
//     <View style={styles.navbar}>
//       <Text style={styles.title}>Online Mark Entry Portal</Text>

//       <View style={styles.navLinks}>
//         {role === "Student" ? (
//           <>
//             <TouchableOpacity onPress={() => navigation.navigate("StudentHome")}>
//               <Text style={styles.navItem}>Home</Text>
//             </TouchableOpacity>

//             <TouchableOpacity onPress={() => navigation.navigate("StudentMarks")}>
//               <Text style={styles.navItem}>Show Marks</Text>
//             </TouchableOpacity>

//             <TouchableOpacity onPress={handleLogout}>
//               <Text style={styles.navItem}>Logout</Text>
//             </TouchableOpacity>
//           </>
//         ) : (
//           <>
//             <TouchableOpacity onPress={() => navigation.navigate("Home")}>
//               <Text style={styles.navItem}>Home</Text>
//             </TouchableOpacity>

//             <TouchableOpacity onPress={() => navigation.navigate("StudentLogin")}>
//               <Text style={styles.navItem}>Student Login</Text>
//             </TouchableOpacity>

//             <TouchableOpacity onPress={() => navigation.navigate("StudentRegister")}>
//               <Text style={styles.navItem}>Student Register</Text>
//             </TouchableOpacity>
//           </>
//         )}
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   navbar: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     paddingVertical: 15,
//     paddingHorizontal: 10,
//     marginTop: 25,
//     backgroundColor: "#004080",
//     flexWrap: "wrap",
//   },
//   title: {
//     color: "#fff",
//     fontWeight: "bold",
//     fontSize: 14,
//   },
//   navLinks: {
//     flexDirection: "row",
//     flexWrap: "wrap",
//   },
//   navItem: {
//     color: "#fff",
//     fontWeight: "bold",
//     fontSize: 14,
//     marginLeft: 15,
//     marginTop: 5,
//   },
// });



import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Navbar({ role, navigation, setRole }) {
  const handleLogout = async () => {
    await AsyncStorage.clear();
    setRole('Guest');
    navigation.replace('Home');
  };

  return (
    <View style={styles.navbar}>
      <Text style={styles.title}>Online Marks Entry App</Text>
      <View style={styles.menu}>
        {role === 'Guest' && (
          <>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Text style={styles.menuItem}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('StudentLogin')}>
              <Text style={styles.menuItem}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('StudentRegister')}>
              <Text style={styles.menuItem}>Register</Text>
            </TouchableOpacity>
          </>
        )}
        {role === 'Student' && (
          <>
            <TouchableOpacity onPress={() => navigation.navigate('StudentHome')}>
              <Text style={styles.menuItem}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('StudentMarks')}>
              <Text style={styles.menuItem}>Marks</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleLogout}>
              <Text style={styles.menuItem}>Logout</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: { height: 60, backgroundColor: '#04204fff', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 16,  marginTop: 30},
  title: { color: '#fff', fontSize: 15, fontWeight: 'bold' },
  menu: { flexDirection: 'row' },
  menuItem: { color: '#fff', marginLeft: 16, fontSize: 14 },
});
