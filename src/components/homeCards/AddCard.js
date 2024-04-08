// Removed unused imports
import { Button } from "react-native";

import { StyleSheet } from "react-native";
// Firestore imports remain unchanged
import { getFirestore, collection, doc, setDoc } from "firebase/firestore";
import app from "../../../firebaseConfig";

// React import is kept as per your project's requirements
import React from "react";

const newGroup = {
  name: "Demo Group",
  createdAt: new Date(),
  members: ["1"],
  movies: ["1"],
  ratings: [{ movie: "1", rating: "5", user: "1" }],
};

const AddCard = () => {
  const db = getFirestore(app); // Initialize Firestore

  const addGroup = async (groupData) => {
    console.log("Attempting to add group...");

    try {
      const docRef = doc(db, "groups", groupData.name); // Corrected to define docRef
      await setDoc(docRef, groupData);

      console.log("Document successfully written!");
      console.log("Group reference: ", docRef); // Corrected log
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return <Button title="Add Group" onPress={() => addGroup(newGroup)} />;
};

export default AddCard;

// Corrected styles (removed duplicate padding)
const styles = StyleSheet.create({
  card: {
    backgroundColor: "#020129",
    borderRadius: 5,
    padding: 20, // Keep one padding property
    width: "100%",
    height: "15%",
    maxHeight: 120,
    borderWidth: 4,
    borderColor: "#004",
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
  },
  // Other styles remain unchanged
});

/*
    <TouchableOpacity style={styles.card} onPress={() => addGroup(newGroup)}>
      <View style={styles.iconContainer}>
        <Text style={styles.icon}>+</Text>
      </View>

      <Text style={styles.cardText}>Add group</Text>
    </TouchableOpacity>

    */
