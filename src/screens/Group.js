import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Modal,
} from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import MovieCard from "../components/groupCards/MovieCard";
import InviteModal from "../components/Modals/InviteModal";
import MovieDetailsModal from "../components/Modals/MovieDetailsModal";
import AddMovieModal from "../components/Modals/AddMovieModal";

const Group = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [addMovieModal, setAddMovieModal] = useState(false);
  const [inviteModal, setInviteModal] = useState(false);

  const getStars = (stars, size = 24) => {
    stars /= 2;
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
      <MovieDetailsModal open={modalVisible} setOpen={setModalVisible} />
      <AddMovieModal open={addMovieModal} setOpen={setAddMovieModal} />
      <InviteModal setOpen={setInviteModal} open={inviteModal} />

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
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
