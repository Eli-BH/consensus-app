import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const GroupCard = ({ navigation }) => {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate("Group")}
    >
      <View style={styles.cardContainer}>
        <View style={styles.contentLeft}>
          <View>
            <Text style={styles.cardTitle}>Placeholder Group</Text>
          </View>

          <View style={styles.subContent}>
            <Text style={styles.subText}>Members: 0</Text>
            <Text style={styles.subText}>Movies: 0</Text>
          </View>
        </View>
        <View style={styles.ratingContainer}>
          <Text style={styles.ratingNum}>4.5</Text>
          <Text style={styles.ratingText}>Avg Rating</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default GroupCard;

const styles = StyleSheet.create({
  ratingContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: "30%",
    height: "100%",
  },

  ratingNum: {
    color: "#bbc9f2",
    fontSize: 32,
    fontWeight: "bold",
  },

  ratingText: {
    color: "#bbc9f2",
    fontSize: 12,
  },

  subText: {
    color: "#bbc9f2",
    fontSize: 12,
  },

  subContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    color: "#bbc9f2",
    width: "90%",
  },

  contentLeft: {
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
    width: "70%",
  },

  cardTitle: {
    fontSize: 18,
    color: "#bbc9f2",
    fontWeight: "bold",
    letterSpacing: 0.75,
  },

  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    width: "100%",
  },
  card: {
    backgroundColor: "#020129",
    borderRadius: 5,
    padding: 20,
    width: "100%",
    height: "20%",
    maxHeight: 120,
    borderWidth: 4,
    borderColor: "#004",
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
  },
});
