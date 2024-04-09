import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import React from "react";

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
        <View>
          <Text style={styles.modalText}>Create a group:</Text>
          <TextInput
            style={styles.input}
            placeholder="Group name"
            placeholderTextColor="#004"
          />
        </View>

        <View>
          <Text style={styles.modalText}>Use Invite code:</Text>
          <TextInput
            style={styles.input}
            placeholder="Invite code"
            placeholderTextColor="#004"
          />
        </View>

        <View style={styles.submitContainer}>
          <TouchableOpacity
            style={styles.openButton}
            onPress={() => {
              setOpen(!open);
            }}
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 200,
    borderRadius: 5,
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 12,
  },
  modalView: {
    margin: 20,
    backgroundColor: "#4ccdc4",
    borderRadius: 5,
    height: "60%",
    width: "90%",
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
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
  },
  submitContainer: {
    marginTop: 20,
    width: "100%",
  },
});
