import { View, StyleSheet, Image } from "react-native";
import theme from "../theme";

import Text from "../components/Text";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
  },
  child1: {
    marginBottom: 8,
    padding: 22,

    backgroundColor: "white",
  },

  child2: {
    flexDirection: "row",
  },

  child3: {
    marginLeft: 20,
    flexShrink: 1,
  },

  child4: {
    justifyContent: "center",
    alignSelf: "flex-start",
    padding: 5,
    borderRadius: 4,
  },

  child5: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 20,
  },

  child6: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    textAlign: "center",
  },
  buttons: {
    padding: 8,
    borderRadius: 4,
    textAlign: "center",
    width: 120,
    fontWeight: 550,
  },

  text: { fontSize: 24, fontWeight: "700", marginBottom: 15 },
});

const RepositoryItem = ({ repository }) => {
  const formatNum = (num) => {
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}k`;
    }
    return num;
  };

  return (
    <View style={styles.container}>
      <View style={styles.child1}>
        <View style={styles.child2}>
          <Image
            source={{ uri: repository.ownerAvatarUrl }}
            style={{ height: 60, width: 60, borderRadius: 3 }}
          />

          <View style={styles.child3} testID="repositoryItem">
            <Text fontSize="subheading" fontWeight="bold" marginBottom="bottom">
              {repository.fullName}
            </Text>

            <Text
              fontSize="subheading"
              fontWeight="normal"
              color="textSecondary"
              marginBottom="bottom"
            >
              {repository.description}
            </Text>

            <Text
              color="headingColor"
              backgroundColor="primary"
              fontSize="subheading"
              fontWeight="normal"
              style={styles.child4}
            >
              {repository.language}
            </Text>
          </View>
        </View>

        <View style={styles.child5} testID="repositoryItem2">
          <View>
            <Text fontSize="subheading" fontWeight="bold" style={styles.child6}>
              {formatNum(repository.stargazersCount)}
            </Text>
            <Text
              fontSize="subheading"
              fontWeight="normal"
              color="textSecondary"
              style={styles.child6}
            >
              {" "}
              Stars
            </Text>
          </View>
          <View>
            <Text fontSize="subheading" fontWeight="bold" style={styles.child6}>
              {formatNum(repository.forksCount)}
            </Text>
            <Text
              fontSize="subheading"
              fontWeight="normal"
              color="textSecondary"
              style={styles.child6}
            >
              Forks
            </Text>
          </View>
          <View>
            <Text fontSize="subheading" fontWeight="bold" style={styles.child6}>
              {" "}
              {repository.reviewCount}{" "}
            </Text>
            <Text
              fontSize="subheading"
              fontWeight="normal"
              color="textSecondary"
              style={styles.child6}
            >
              Reviews
            </Text>
          </View>
          <View>
            <Text fontSize="subheading" fontWeight="bold" style={styles.child6}>
              {" "}
              {repository.ratingAverage}
            </Text>
            <Text
              fontSize="subheading"
              fontWeight="normal"
              color="textSecondary"
              style={styles.child6}
            >
              Rating
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default RepositoryItem;
