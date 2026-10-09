import { View, StyleSheet, Image } from "react-native";
import theme from "../theme";

import Text from "../components/Text";

const styles = StyleSheet.create({
  container: {
    display: "flex",
  },
  child1: {
    marginBottom: 15,
    padding: 22,

    backgroundColor: "white",
  },

  child2: {
    flexDirection: "row",
    paddingRight: 20,
  },

  child3: {
    marginLeft: 30,
    flexShrink: 1,
    //padding: 33,
  },

  child4: {
    justifyContent: "center",
    alignSelf: "flex-start",
    padding: 10,
    borderRadius: 4,
    marginBottom: 33,
  },

  child5: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
    paddingRight: 45,
    paddingLeft: 44,
  },

  child6: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    textAlign: "center",
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
            source={repository.ownerAvatarUrl}
            style={{ height: 80, width: 80, borderRadius: 5 }}
          />

          <View style={styles.child3}>
            <Text
              fontSize="mainHeading"
              fontWeight="bold"
              marginBottom="bottom"
            >
              {repository.fullName}
            </Text>

            <Text
              fontSize="mainHeading"
              fontWeight="normal"
              color="textSecondary"
              marginBottom="bottom"
            >
              {repository.description}
            </Text>

            <Text
              color="headingColor"
              backgroundColor="primary"
              fontSize="mainHeading"
              fontWeight="normal"
              style={styles.child4}
            >
              {repository.language}
            </Text>
          </View>
        </View>

        <View style={styles.child5}>
          <View>
            <Text
              fontSize="mainHeading"
              fontWeight="bold"
              style={styles.child6}
            >
              {formatNum(repository.stargazersCount)}
            </Text>
            <Text
              fontSize="mainHeading"
              fontWeight="normal"
              color="textSecondary"
              style={styles.child6}
            >
              {" "}
              Stars
            </Text>
          </View>
          <View>
            <Text
              fontSize="mainHeading"
              fontWeight="bold"
              style={styles.child6}
            >
              {formatNum(repository.forksCount)}
            </Text>
            <Text
              fontSize="mainHeading"
              fontWeight="normal"
              color="textSecondary"
              style={styles.child6}
            >
              Forks
            </Text>
          </View>
          <View>
            <Text
              fontSize="mainHeading"
              fontWeight="bold"
              style={styles.child6}
            >
              {" "}
              {repository.reviewCount}{" "}
            </Text>
            <Text
              fontSize="mainHeading"
              fontWeight="normal"
              color="textSecondary"
              style={styles.child6}
            >
              Reviews
            </Text>
          </View>
          <View>
            <Text
              fontSize="mainHeading"
              fontWeight="bold"
              style={styles.child6}
            >
              {" "}
              {repository.ratingAverage}
            </Text>
            <Text
              fontSize="mainHeading"
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
