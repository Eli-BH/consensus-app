import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

const MovieCard = ({ setModalVisible, modalVisible }) => {
  const streamingList = () => {
    const streaming = [];

    for (let i = 0; i < 5; i++) {
      streaming.push(
        <Image
          source={{
            uri: "https://source.unsplash.com/random/400x500?sun",
          }}
          style={{ width: 20, height: 20, margin: 3, borderRadius: 3 }}
        />
      );
    }

    return streaming;
  };

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
    <TouchableOpacity
      style={styles.movieCard}
      onPress={() => setModalVisible(!modalVisible)}
    >
      <Image
        source={{ uri: "https://source.unsplash.com/random/400x500" }}
        style={{ width: 60, height: 90, marginRight: 10 }}
      />
      <View style={styles.movieDetails}>
        <Text style={{ color: "#bbc9f2", fontSize: 20 }}>Movie Title</Text>
        <Text style={{ color: "#bbc9f2", fontSize: 12 }}>
          Released: 2024-03-29 (US)
        </Text>
        <FlatList
          data={streamingList()}
          horizontal
          renderItem={({ item }) => item}
          keyExtractor={(item, index) => index.toString()}
          style={{ marginTop: 10 }}
        />
      </View>

      <View style={styles.avgRatingContainer}>
        <Text style={styles.avgRatingNumber}>9.5</Text>
        <FlatList
          data={getStars(3.5, 12)}
          horizontal
          renderItem={({ item }) => item}
          keyExtractor={(_, index) => index.toString()}
        />
        <Text style={styles.avgRatingText}>Avg. rating</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MovieCard;

const styles = StyleSheet.create({
  movieCard: {
    width: "100%",
    padding: 10,
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 4,
    borderColor: "#004",
    borderRadius: 5,
    backgroundColor: "#0b0b21",
    marginVertical: 10,
    flexDirection: "row",
  },
  movieDetails: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    width: "50%",
    height: "100%",
    gap: 5,
  },
  avgRatingContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "35%",
    height: "100%",
  },
  avgRatingNumber: {
    color: "#bbc9f2",
    fontSize: 40,
  },
  avgRatingText: {
    color: "#bbc9f2",
  },
});
