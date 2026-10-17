import Constant from "expo-constants";
// eslint-disable-next-line import/no-unresolved
import { Text, View, StyleSheet, Pressable } from "react-native";
import RepositoryList from "./RepositoryList";
import AppBar from "./AppBar";
import theme from "../theme";
import { Routes, Route, Navigate } from "react-router-native";
import SignIn from "./SignIn";
import Review from "./Review";

const styles = StyleSheet.create({
  contaianer: {
    //marginTop: Constant.statusBarHeight,

    flex: 1,
    flexDirection: "column",

    backgroundColor: theme.colors.mainBackground,
  },
});

const Main = () => {
  return (
    <View style={styles.contaianer}>
      <Pressable>
        <AppBar />
      </Pressable>
      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/Sign In" element={<SignIn />} />
        <Route path="/createReview" element={<Review />} />
      </Routes>
    </View>
  );
};

export default Main;
