
// import React from 'react';
// import { View, StyleSheet } from 'react-native';
// import Navbar from './Navbar';

// export default function Layout({ component: Component, role, setRole, ...props }) {
//   return (
//     <View style={styles.container}>
//       <Navbar role={role} setRole={setRole} />
//       <View style={styles.content}>
//         {/* Pass all props to the component so navigation & others work */}
//         <Component {...props} role={role} setRole={setRole} />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f2f6fc', // optional background
//   },
//   content: {
//     flex: 1,
//     padding: 20,
//   },
// });

// import React from 'react';
// import { View, StyleSheet } from 'react-native';
// import Navbar from './Navbar';

// export default function Layout({ component: Component, role, setRole, navigation, ...props }) {
//   return (
//     <View style={styles.container}>
//       {/* Always show Navbar */}
//       <Navbar role={role} navigation={navigation} setRole={setRole} />

//       {/* Render the screen */}
//       <Component {...props} navigation={navigation} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });





// import React from 'react';
// import { View, StyleSheet } from 'react-native';
// import Navbar from './Navbar';

// export default function Layout({ component: Component, role, setRole, navigation, ...props }) {
//   return (
//     <View style={styles.container}>
//       <Navbar role={role} navigation={navigation} setRole={setRole} />
//       <Component {...props} navigation={navigation} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1 },
// });


import React from 'react';
import { View, StyleSheet } from 'react-native';
import Navbar from './Navbar';

export default function Layout({ component: Component, role, setRole, setStudent, navigation, ...props }) {
  return (
    <View style={styles.container}>
      {/* Navbar always gets role & setRole */}
      <Navbar role={role} navigation={navigation} setRole={setRole} />

      {/* Forward all props including setRole and setStudent to your screen */}
      <Component
        {...props}
        navigation={navigation}
        role={role}
        setRole={setRole}
        setStudent={setStudent} // important for login
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
