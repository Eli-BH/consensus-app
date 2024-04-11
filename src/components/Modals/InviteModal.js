import { StyleSheet, Text, View, Modal, TouchableOpacity } from "react-native";
import React from "react";

const InviteModal = ({ setOpen, open }) => {
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
          <Text style={styles.modalText}>
            Share this code with your friends to invite them to your group!
          </Text>
          <View style={styles.codeContainer}>
            <Text style={styles.codeText}>Invite code: 123456</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              setOpen(!open);
            }}
            style={styles.openButton}
          >
            <Text style={styles.textStyle}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default InviteModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
  },
  codeContainer: {
    backgroundColor: "#47a19b",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#6ae6dd",
  },
  codeText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  modalView: {
    margin: 10,
    backgroundColor: "#4ccdc4",
    borderRadius: 5,
    height: 200,
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
    marginBottom: 5,
    textAlign: "left",
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    letterSpacing: 1,
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginTop: 10,
    width: 100,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
