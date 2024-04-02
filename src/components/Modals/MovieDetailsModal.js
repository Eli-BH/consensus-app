import {
  StyleSheet,
  Text,
  Image,
  View,
  Modal,
  TouchableOpacity,
} from "react-native";
import React from "react";

const MovieDetailsModal = ({ open, setOpen }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={open}
      onRequestClose={() => {
        setOpen(!open);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.movieHeader}>
            <Image
              source={{ uri: "https://source.unsplash.com/random/400x500" }}
              style={{ width: 60, height: 90 }}
            />

            <View>
              <Text style={styles.movieHeader.title}>Movie Title</Text>
              <Text style={styles.movieHeader.dateText}>2024-03-29 (US)</Text>
              <TouchableOpacity style={styles.movieHeader.trailerButton}>
                <Text style={styles.movieHeader.trailerButtonText}>
                  View Trailer
                </Text>
              </TouchableOpacity>
            </View>
            <View></View>
          </View>

          <View></View>
          <Text style={styles.modalText}>Movie Details</Text>
          <TouchableOpacity
            style={styles.openButton}
            onPress={() => {
              setOpen(!open);
            }}
          >
            <Text style={styles.textStyle}>Hide Modal</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default MovieDetailsModal;

const styles = StyleSheet.create({
  movieHeader: {
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 10,
    width: "100%",
    marginBottom: 10,
    backgroundColor: "red",

    title: {
      color: "white",
      fontSize: 20,
      fontWeight: "bold",
    },

    dateText: {
      color: "white",
      fontSize: 12,
      marginBottom: 5,
    },

    trailerButton: {
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "blue",
      borderRadius: 5,
      color: "white",
      fontSize: 14,
      borderColor: "white",
      borderWidth: 2,
      padding: 5,
      marginTop: 5,
    },

    trailerButtonText: {
      color: "white",
      fontSize: 12,
      fontWeight: "bold",
    },
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 12,
  },
  modalView: {
    margin: 20,
    backgroundColor: "#191970",
    borderWidth: 4,
    borderColor: "#",
    borderRadius: 5,
    height: "60%",
    width: "90%",
    padding: 15,
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
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
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
});
