import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import theme from "../theme.js";
import Text from "./Text.jsx";
import { Link } from "react-router-native";
import { ScrollView } from "react-native";

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
        <Link to="/Sign In">
          <Text fontSize="subheading" fontWeight="bold" color="headingColor">
            Sign in
          </Text>
        </Link>
      </ScrollView>
    </View>
  );
};

export default AppBar;
