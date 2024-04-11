// Removed unused imports
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
// Firestore imports remain unchanged
import { getFirestore, collection, doc, setDoc } from "firebase/firestore";
import app from "../../../firebaseConfig";

// React import is kept as per your project's requirements
import React from "react";
import AddGroupModal from "../Modals/AddGroupModal";

const newGroup = {
  name: "Demo Group",
  createdAt: new Date(),
  members: ["1"],
  movies: ["1"],
  ratings: [{ movie: "1", rating: "5", user: "1" }],
};

const AddCard = ({ open, setOpen }) => {
  // const db = getFirestore(app); // Initialize Firestore

  // const addGroup = async (groupData) => {
  //   console.log("Attempting to add group...");

  //   try {
  //     const docRef = doc(db, "groups", groupData.name); // Corrected to define docRef
  //     await setDoc(docRef, groupData);
  //   } catch (error) {
  //     console.error("Error adding document: ", error);
  //   }
  // };

  return (
    <React.Fragment>
      <AddGroupModal open={open} setOpen={setOpen} />
      <TouchableOpacity style={styles.card} onPress={() => setOpen(!open)}>
        <View style={styles.iconContainer}>
          <Text style={styles.icon}>+</Text>
        </View>

        <Text style={styles.cardText}>Add group</Text>
      </TouchableOpacity>
    </React.Fragment>
  );
};

export default AddCard;

// Corrected styles (removed duplicate padding)
const styles = StyleSheet.create({
  card: {
    backgroundColor: "#020129",
    borderRadius: 5,
    padding: 20, // Keep one padding property
    width: "100%",
    height: 100,
    maxHeight: 120,
    borderWidth: 4,
    borderColor: "#004",
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
  },
  iconContainer: {
    backgroundColor: "#004",
    borderRadius: 50,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    fontSize: 25,
    color: "#fff",
  },
  cardText: {
    color: "#bbc9f2",
    fontSize: 16,
    textAlign: "center",
    fontFamily: "sans-serif",
  },
});

/*
   

    */
