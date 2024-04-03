import {
  StyleSheet,
  Text,
  Image,
  View,
  Modal,
  TouchableOpacity,
  FlatList,
  TextInput,
} from "react-native";
import React from "react";
import Slider from "@react-native-community/slider";
import getStars from "../../utils/functions/getStars";

const MovieDetailsModal = ({ open, setOpen }) => {
  const [value, setValue] = React.useState(0);

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
              style={{ width: 80, height: 120 }}
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

          <View style={styles.ratingContainer}>
            <View style={styles.ratingContainer.sliderContainer}>
              <Text style={styles.ratingContainer.title}>Rate this movie</Text>
              <Slider
                value={value}
                onValueChange={(value) => setValue(value)}
                style={styles.ratingContainer.ratingSlider}
                minimumValue={1}
                maximumValue={10}
                step={0.5}
                minimumTrackTintColor="#FFFFFF"
                maximumTrackTintColor="#000000"
              />
            </View>

            <View style={styles.ratingContainer.ratingIdicator}>
              <Text style={styles.ratingContainer.ratingText}>{value}</Text>
              <FlatList
                data={getStars(value, 20)}
                horizontal
                renderItem={({ item }) => item}
                keyExtractor={(_, index) => index.toString()}
              />
            </View>
          </View>
          <View style={styles.commentSection}>
            <TextInput
              placeholder="Add a comment"
              style={styles.commentSection.input}
            />
          </View>
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
  commentSection: {
    width: "100%",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,

    input: {
      width: "90%",

      backgroundColor: "white",
      borderColor: "#00fa9a",
      borderWidth: 1,
      borderRadius: 5,
      padding: 10,
    },
  },
  ratingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    width: "100%",

    title: {
      color: "white",
      fontSize: 16,
    },

    ratingIdicator: {
      justifyContent: "center",
      alignItems: "center",
      gap: 5,
      width: "35%",
    },
    ratingText: {
      color: "white",
      fontSize: 40,
      fontWeight: "bold",
    },

    ratingSlider: {
      width: "100%",
      height: 40,
    },

    sliderContainer: {
      justifyContent: "flex-end",
      alignItems: "center",
      gap: 5,
      width: "65%",
    },
  },

  movieHeader: {
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 15,
    width: "100%",
    marginBottom: 10,

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
      borderColor: "#00fa9a",
      borderWidth: 1,
      padding: 5,
      marginTop: 25,
    },

    trailerButtonText: {
      color: "white",
      fontSize: 14,
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
    borderWidth: 2,
    borderColor: "#00fa9a",
    borderRadius: 5,
    height: 450,
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
