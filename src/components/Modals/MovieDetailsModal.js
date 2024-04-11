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
import * as Haptics from "expo-haptics";

const MovieDetailsModal = ({ open, setOpen }) => {
  const [value, setValue] = React.useState(5);

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
            <View style={styles.movieHeader.groupRatingBlocked}>
              <Text style={styles.movieHeader.groupRatingBlockedText}>
                Rate to see group score
              </Text>
            </View>
          </View>

          <View style={styles.ratingContainer}>
            <View style={styles.ratingContainer.sliderContainer}>
              <Text style={styles.ratingContainer.title}>Rate this movie</Text>
              <Slider
                value={value}
                onValueChange={(value) => {
                  setValue(value);
                  Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                }}
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
              multiline
              textAlignVertical="top"
              maxLength={500}
              autoCorrect
            />
            <TouchableOpacity style={styles.commentSection.submitButton}>
              <Text style={styles.commentSection.buttonText}>Submit</Text>
            </TouchableOpacity>
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

    buttonText: {
      color: "white",
      fontSize: 20,
      fontWeight: "bold",
      letterSpacing: 1,
    },

    submitButton: {
      backgroundColor: "#00fa9a",
      padding: 10,
      borderTopLeftRadius: 1,
      borderTopRightRadius: 1,
      borderRadius: 5,
      marginTop: 0,
      width: "100%",

      justifyContent: "center",
      alignItems: "center",
    },

    input: {
      flex: 1,
      width: "100%",

      backgroundColor: "white",
      borderColor: "#00fa9a",
      borderWidth: 1,
      borderTopLeftRadius: 5,
      borderTopRightRadius: 5,
      padding: 10,
    },
  },
  ratingContainer: {
    marginTop: 10,
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

    groupRatingBlockedText: {
      color: "#ffffff",
      fontSize: 12,
      fontWeight: "bold",
      textAlign: "center",
    },

    groupRatingBlocked: {
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#0b0b21",
      borderRadius: 5,
      color: "white",
      fontSize: 14,
      borderColor: "#00fa9a",
      borderWidth: 2,
      padding: 5,
      marginLeft: 15,
      width: 100,
    },
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
    height: 500,
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
    marginTop: "auto",
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
