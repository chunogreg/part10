import { View } from "react-native";

const RepositoryItem = () => {
  return (
    <View>
      {" "}
      renderItem=
      {({ item }) => (
        <View>
          <Text>Fullname: {item.fullName} </Text>
          <Text> Descriptionm: {item.description}</Text>
          <Text> Language: {item.language}</Text>
          <Text> Stars: {item.stargazersCount}</Text>
          <Text> Forks: {item.forksCount}</Text>
          <Text> Reviews: {item.reviewCount} </Text>
          <Text> Rating: {item.ratingAverage}</Text>
        </View>
      )}{" "}
    </View>
  );
};

export default RepositoryItem;
