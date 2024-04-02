import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const AddCard = () => {
  return (
    <TouchableOpacity style={styles.card}>
      <View style={styles.iconContainer}>
        <Text style={styles.icon}>+</Text>
      </View>

      <Text style={styles.cardText}>Add group</Text>
    </TouchableOpacity>
  );
};

export default AddCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#020129",
    borderRadius: 5,
    padding: 20,
    width: "100%",
    height: "15%",
    maxHeight: 120,
    borderWidth: 4,
    borderColor: "#004",
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
    padding: 10,
  },
  iconContainer: {
    backgroundColor: "#0b0b21",
    borderWidth: 4,
    borderColor: "#bbc9f2",
    borderRadius: 50,
    width: 35,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    color: "#bbc9f2",
    fontSize: 18,

    padding: 0,
  },
  cardText: {
    fontSize: 18,
    color: "#bbc9f2",
  },
});
