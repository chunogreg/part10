import { View, StyleSheet, Pressable } from "react-native";
import Constants from "expo-constants";
import theme from "../theme.js";
import Text from "./Text.jsx";
import { Link } from "react-router-native";
import { ScrollView } from "react-native";
import { ME } from "../graphql/queries.js";
import { useQuery } from "@apollo/client/react";
//import { useNavigate } from "react-router-native";
import useAuthStorage from "../hooks/useAuthStorage.js";
import { useApolloClient } from "@apollo/client/react";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.textPrimary,
    height: 120,
    // display: "flex",
    // flex: 1,

    flexDirection: "row",
    alignItems: "flex-end",

    // justifyContent: "space-evenly",
    padding: 20,

    // ...
  },
  // scrollable: {
  //   paddingVertical: 15,
  //   paddingHorizontal: 10,
  //   // backgroundColor: "#343c3e",
  // },
  // ...
});

const AppBar = () => {
  const { data, loading, error } = useQuery(ME);

  const authStorage = useAuthStorage();

  //const navigate = useNavigate();
  const apollo = useApolloClient();

  console.log("ME DATA:", data);

  const logout = async () => {
    await authStorage.removeAccessToken();
    const toks = authStorage.getAccessToken();
    console.log("==STORED TOKEN==:::: ", toks);
    console.log("ME AFTER:", data);

    await apollo.resetStore();
    // navigate("/", { replace: true });
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal={true} contentContainerStyle={styles.scrollable}>
        <Link to="/">
          <Text
            fontSize="subheading"
            fontWeight="bold"
            color="headingColor"
            style={{ marginRight: 27 }}
          >
            Repositories
          </Text>
        </Link>
        <Link to="/review">
          <Text
            fontSize="subheading"
            fontWeight="bold"
            color="headingColor"
            style={{ marginRight: 27 }}
          >
            Create a review
          </Text>
        </Link>

        {data?.me ? (
          <Pressable onPress={logout}>
            <Text fontSize="subheading" fontWeight="bold" color="headingColor">
              Sign out
            </Text>
          </Pressable>
        ) : (
          <Link to="/Sign In">
            <Text fontSize="subheading" fontWeight="bold" color="headingColor">
              Sign in
            </Text>
          </Link>
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
