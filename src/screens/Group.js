import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Image,
  Modal,
} from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import MovieCard from "../components/groupCards/MovieCard";

const Group = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [addMovieModal, setAddMovieModal] = useState(false);
  const [inviteModal, setInviteModal] = useState(false);

  const getStars = (stars, size = 24) => {
    if (stars > 5) stars /= 2;
    let starArray = [];
    for (let i = 1; i <= stars; i += 0.5) {
      i % 1 === 0 &&
        starArray.push(<Ionicons name="star" size={size} color="#ffd100" />);
    }

    if (stars % 1 !== 0) {
      starArray.push(<Ionicons name="star-half" size={size} color="#ffd100" />);
    }

    return starArray;
  };

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={modalStyles.centeredView}>
          <View style={modalStyles.modalView}>
            <View>
              <Image
                source={{ uri: "https://source.unsplash.com/random/400x500" }}
                style={{ width: 60, height: 90 }}
              />

              <View>
                <Text style={modalStyles.modalText}>Movie Title</Text>
                <Text style={modalStyles.modalText}>2024-03-29 (US)</Text>
              </View>
              <View></View>
            </View>

            <View></View>
            <Text style={modalStyles.modalText}>Movie Details</Text>
            <TouchableOpacity
              style={styles.openButton}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={addMovieModal}
        onRequestClose={() => {
          setAddMovieModal(!addMovieModal);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Add movie</Text>
            <TouchableOpacity
              style={styles.openButton}
              onPress={() => {
                setAddMovieModal(!addMovieModal);
              }}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={inviteModal}
        onRequestClose={() => {
          setInviteModal(!inviteModal);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Invite friends!</Text>
            <TouchableOpacity
              style={styles.openButton}
              onPress={() => {
                setInviteModal(!inviteModal);
              }}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <View style={styles.headerContainer}>
        <View style={styles.headerLeft}>
          <Text style={styles.groupName}>Placeholder</Text>
          <View style={styles.avgRatingContainerTop}>
            <Text style={styles.avgRatingText}>Avg Rating: </Text>
            <FlatList
              data={getStars(10, 20)}
              horizontal
              renderItem={({ item }) => item}
              keyExtractor={(_, index) => index.toString()}
            />
          </View>
          <View style={styles.memeberContainer}>
            <Text style={styles.members}>MEMBERS</Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.shareButton}
          onPress={() => setInviteModal(true)}
        >
          <Text style={styles.shareButtonText}>Invite</Text>
          <Ionicons name="share-social" size={24} color="#bbc9f2" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.movieListContainer}>
        <MovieCard
          setModalVisible={setModalVisible}
          modalVisible={modalVisible}
        />
      </ScrollView>

      <TouchableOpacity
        style={styles.addMovieButton}
        onPress={() => setAddMovieModal(true)}
      >
        <Text style={styles.addMovieButtonText}>Add Movie</Text>
        <Ionicons name="add-circle" size={28} color="#020129" />
      </TouchableOpacity>
    </View>
  );
};

export default Group;

const modalStyles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 12,
  },
  modalView: {
    margin: 20,
    backgroundColor: "#4c4",
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
});

const styles = StyleSheet.create({
  avgRatingText: {
    color: "#bbc9f2",
    fontSize: 16,
    fontWeight: "bold",
  },
  addMovieButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    width: "95%",
    padding: 10,
    backgroundColor: "#bbc9f2",
    borderRadius: 5,
    borderWidth: 4,
    borderColor: "hsl(215, 50%, 23%)",
    marginVertical: 10,
  },

  addMovieButtonText: {
    color: "#020129",
    fontSize: 24,
    fontWeight: "500",
    letterSpacing: 0.5,
    padding: 2,
  },

  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: 10,
    marginVertical: 10,
    marginTop: 40,
  },
  shareButtonText: {
    color: "#bbc9f2",
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 0.75,
    padding: 5,
  },
  shareButton: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "30%",
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#0b0b21",
    marginTop: 10,
    borderWidth: 2,
    borderColor: "#004",
  },
  container: {
    flex: 1,
    backgroundColor: "#020129",
    alignItems: "center",
    justifyContent: "center",
  },
  headerLeft: {
    padding: 10,
    justifyContent: "flex-start",
  },
  groupName: {
    fontSize: 32,
    marginBottom: 10,
    color: "#bbc9f2",
    textAlign: "left",
    fontWeight: "bold",
    letterSpacing: 1,
    fontFamily: "sans-serif",
  },

  avgRatingStars: {
    color: "#bbc9f2",
    fontWeight: "bold",
    fontSize: 20,
  },

  memeberContainer: {
    width: "100%",
    justifyContent: "flex-start",
  },
  members: {
    color: "#bbc9f2",
    fontSize: 20,
  },
  avgRatingContainerTop: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "85%",
  },
  movieListContainer: {
    height: "50%",
    borderWidth: 4,
    borderColor: "#004",
    width: "95%",
    borderRadius: 5,
    padding: 10,
    backgroundColor: "#0b0b21",
    marginVertical: 10,
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
});
