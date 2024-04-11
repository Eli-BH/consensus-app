import Ionicons from "@expo/vector-icons/Ionicons";

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

export default getStars;
