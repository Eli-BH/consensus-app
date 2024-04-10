import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";

const AddMovieModal = ({ setOpen, open }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={open}
      onRequestClose={() => {
        setOpen(!open);
      }}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.centeredView}
      >
        <View style={styles.modalView}>
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search"
              placeholderTextColor="#004"
            />

            <Ionicons
              name="search"
              size={24}
              color="#004"
              style={styles.searchIcon}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default AddMovieModal;

const styles = StyleSheet.create({
  searchInput: {
    backgroundColor: "#4ccdc4",
    width: "80%",
    textDecorationLine: "none",
    color: "#004",
    borderRadius: 5,
    letterSpacing: 0.6,
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
  searchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#004",
    marginBottom: 10,
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
    height: 500,
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
});
