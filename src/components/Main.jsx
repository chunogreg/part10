import Constant from "expo-constants";
// eslint-disable-next-line import/no-unresolved
import { Text, View, StyleSheet, Pressable } from "react-native";
import RepositoryList from "./RepositoryList";
import AppBar from "./AppBar";
import theme from "../theme";

const styles = StyleSheet.create({
  contaianer: {
    marginTop: Constant.statusBarHeight,
    flex: 1,
    flexDirection: "column",
    padding: 16,
    backgroundColor: theme.colors.mainBackground,
  },
});

const Main = () => {
  const funct = () => {
    <View>
      <Text style={{ color: "#f7f4f4", fontSize: 33 }}> You pressed me! </Text>
    </View>;
  };

  return (
    <>
      <View style={styles.contaianer}>
        <Pressable onPress={funct}>
          <AppBar />
        </Pressable>
        <RepositoryList />
      </View>
    </>
  );
};

export default Main;
