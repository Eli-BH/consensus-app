import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  FlatList,
  Image,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";

const AddMovieModal = ({ setOpen, open }) => {
  const searchDemo = [
    {
      name: "Movie 1",
      releaseYear: "2021",
      actors: ["Actor 1", "Actor 2", "Actor 3"],
      image: "https://source.unsplash.com/random/400x500",
    },
    {
      name: "Movie 2",
      releaseYear: "2022",
      actors: ["Actor 1", "Actor 2", "Actor 3"],
      image: "https://source.unsplash.com/random/400x500",
    },
    {
      name: "Movie 3",
      releaseYear: "2023",
      actors: ["Actor 1", "Actor 2", "Actor 3"],
      image: "https://source.unsplash.com/random/400x500",
    },
    {
      name: "Movie 4",
      releaseYear: "2024",
      actors: ["Actor 1", "Actor 2", "Actor 3"],
      image: "https://source.unsplash.com/random/400x500",
    },
    {
      name: "Movie 5",
      releaseYear: "2025",
      actors: ["Actor 1", "Actor 2", "Actor 3"],
      image: "https://source.unsplash.com/random/400x500",
    },
  ];

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

          <FlatList
            data={searchDemo}
            keyExtractor={(item) => item.name}
            style={{ width: "100%" }}
            renderItem={({ item }) => (
              <View style={styles.movieCard}>
                <Image
                  source={{ uri: item?.image }}
                  style={{ width: 55, height: 80 }}
                />

                <View style={styles.movieCard.textContainer}>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-start",
                    }}
                  >
                    <Text style={styles.movieCard.title}>{item.name}</Text>
                    <Text style={styles.movieCard.releaseYear}>
                      ({item.releaseYear})
                    </Text>
                  </View>
                  <Text style={styles.movieCard.actors}>
                    {item.actors.join(", ")}
                  </Text>
                </View>
              </View>
            )}
          />
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default AddMovieModal;

const styles = StyleSheet.create({
  movieCard: {
    backgroundColor: "#4ccdc4",
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#9af5ee",

    textContainer: {
      width: "80%",
    },

    gap: 10,
    title: {
      fontSize: 20,
      fontWeight: "bold",
      color: "#004",
    },
    releaseYear: {
      fontSize: 12,
      fontWeight: "bold",
      color: "#004",
      marginLeft: 5,
      opacity: 0.7,
    },
    actors: {
      fontSize: 12,
      color: "#004",
      marginTop: 10,
    },
  },
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
    padding: 20,
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
