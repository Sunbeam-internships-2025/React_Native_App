
// Home.js
import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const Home = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Online Mark Entry Portal</Text>
        <Text style={styles.subtitle}>
          Manage student performance efficiently, streamline assessments, and provide personalized dashboards for staff, mentors, and coordinators.
        </Text>
      </View>

      {/* Features Section */}
      <View style={styles.grid}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Role-based Access</Text>
          <Text style={styles.cardText}>
            Login as Staff, Mentor, Coordinator, or Admin with secure authentication and personalized dashboards.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Manage Marks</Text>
          <Text style={styles.cardText}>
            Add, update, and monitor student mark schemes with accuracy and efficiency.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Track Performance</Text>
          <Text style={styles.cardText}>
            Visualize student performance with structured data and insightful reports.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Easy Navigation</Text>
          <Text style={styles.cardText}>
            Intuitive design ensures quick access to all features with minimal effort.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 1,
    paddingHorizontal: 20,
    backgroundColor: "#f4f6f9",
    alignItems: "center",
    paddingBottom: 30,
  },
  header: {
    marginBottom: 40,
    alignItems: "center",
  },
  title: {
    fontSize: 21,
    fontWeight: "700",
    color: "#3b3f5c",
    textAlign: "center",
    marginBottom: 12,
    marginTop: 70
  },
  subtitle: {
    fontSize: 16,
    color: "#6e6e7e",
    textAlign: "center",
    lineHeight: 24,
    maxWidth: 700,
  },
  grid: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 4,
    borderWidth: 0.5,
    borderColor: "#ddd",
    width: "48%", // 2 cards per row

    justifyContent: "center", // vertically center content
  },




  cardTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#4b3f72",
    marginBottom: 10,
    textAlign: "center",
  },
  cardText: {
    fontSize: 14,
    color: "#5a5a6e",
    textAlign: "center",
    lineHeight: 16,
  },
});

export default Home;
