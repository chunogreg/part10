import { View, StyleSheet, Pressable } from "react-native";
import Text from "./Text";
import { REPOSITORY } from "../graphql/queries";
import { useQuery } from "@apollo/client/react";
import * as Linking from "expo-linking";
import RepositoryItem from "./RepositoryItem";

const RepositoryView = ({ id }) => {
  const { data, error, loading } = useQuery(REPOSITORY, {
    variables: { id: id },
  });
  const repository = data?.repository ? data.repository : [];

  if (loading)
    return (
      <View>
        <Text>...Loading</Text>
      </View>
    );

  console.log("==SINGLE REPO==", repository);
  const styles = StyleSheet.create({
    container: {
      backgroundColor: "white",
      //height: 200,
      display: "flex",

      justifyContent: "space-evenly",
      padding: 20,
      marginBottom: 20,
    },

    textButton: {
      height: 50,
      borderRadius: 5,
      textAlign: "center",
      paddingVertical: 10,
    },
  });

  return (
    <View style={styles.container}>
      <RepositoryItem repository={repository} />
      <Pressable onPress={() => Linking.openURL(repository.url)}>
        <Text
          backgroundColor="primary"
          color="headingColor"
          fontSize="headingSize"
          fontWeight="bold"
          style={styles.textButton}
        >
          Open in GitHub
        </Text>
      </Pressable>
    </View>
  );
};

export default RepositoryView;
