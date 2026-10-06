import Constant from "expo-constants";
// eslint-disable-next-line import/no-unresolved
import { Text, View, StyleSheet } from "react-native";
import RepositoryList from "./RepositoryList";

const styles = StyleSheet.create({
  contaianer: {
    marginTop: Constant.statusBarHeight,
    flex: 2,
  },
});

const Main = () => {
  return (
    <>
      <View style={styles.contaianer}>
        {/* <Text> *** Rate Repository Application *** </Text> */}
        <RepositoryList />
      </View>
    </>
  );
};

export default Main;
