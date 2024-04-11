import React from "react";
import { View, StyleSheet, Text } from "react-native";
import GroupCard from "../components/homeCards/GroupCard";
import AddCard from "../components/homeCards/AddCard";

const Home = ({ navigation }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Consensus</Text>
      </View>

      <View style={styles.bodyCard}>
        <AddCard open={open} setOpen={setOpen} />
        <GroupCard navigation={navigation} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    width: "100%",
    padding: 10,
    justifyContent: "flex-start",
  },

  title: {
    fontSize: 40,
    color: "#bbc9f2",
    textAlign: "left",
    fontFamily: "sans-serif",
  },

  container: {
    flex: 1,
    backgroundColor: "#020129",
    alignItems: "center",
    justifyContent: "center",
  },

  bodyCard: {
    backgroundColor: "#0b0b21",
    borderRadius: 5,
    padding: 20,
    width: "95%",
    height: 600,
    borderWidth: 4,
    borderColor: "#004",
    gap: 20,
  },
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
  },
});

export default Home;
