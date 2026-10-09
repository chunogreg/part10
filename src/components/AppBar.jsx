import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import theme from "../theme.js";
import Text from "./Text.jsx";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.textPrimary,
    height: 120,

    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    padding: 20,
    // ...
  },
  // ...
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Text fontSize="headingSize" fontWeight="bold" color="headingColor">
        Repositories
      </Text>
    </View>
  );
};

export default AppBar;
