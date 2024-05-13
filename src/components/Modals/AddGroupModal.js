import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { getFirestore, collection, doc, setDoc } from "firebase/firestore";

import app from "../../../firebaseConfig";
import { useState } from "react";

const AddGroupModal = ({ setOpen, open }) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={open}
      onRequestClose={() => {
        setOpen(!open);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.container}>
            <Text style={styles.modalText}>Create a new group:</Text>
            <TextInput
              style={styles.input}
              placeholder="Group name"
              placeholderTextColor="#004"
            />
          </View>

          <View style={styles.container}>
            <Text style={styles.modalText}>Use Invite code:</Text>
            <TextInput
              style={styles.input}
              placeholder="Invite code"
              placeholderTextColor="#004"
            />
          </View>

          <TouchableOpacity
            onPress={() => {
              setOpen(!open);
            }}
            style={styles.openButton}
          >
            <Text style={styles.textStyle}>Add Group</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default AddGroupModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    backgroundColor: "#4ccdc4",
    borderRadius: 5,
    height: 300,
    width: "90%",
    padding: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    justifyContent: "space-evenly",
  },
  modalText: {
    marginBottom: 5,
    textAlign: "left",
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    letterSpacing: 1,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width: "50%",
  },
  submitContainer: {
    width: "100%",
  },
  input: {
    borderRadius: 5,
    color: "white",
    fontSize: 18,
    borderColor: "#00fa9a",
    borderWidth: 1,
    padding: 5,
    paddingHorizontal: 10,
    backgroundColor: "#2a3e87",
    width: "100%",
    letterSpacing: 1,
    fontWeight: "bold",
  },
  container: {
    width: "100%",
    padding: 10,
    justifyContent: "flex-start",
  },
});
