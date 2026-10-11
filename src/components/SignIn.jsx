import { View, TextInput, Pressable, StyleSheet } from "react-native";
import Text from "./Text";
import { useFormik } from "formik";
import * as yup from "yup";

const initialValues = {
  username: "",
  password: "",
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    // .min(2, "username must be more than 1 character")

    .required("username is required"),
  password: yup
    .string()
    // .min(6, "password must be more than 5 character")
    .required("password is required"),
});

const getUser = (username, password) => {
  return { username, password };
};

const SignInForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const styles = StyleSheet.create({
    container: {
      backgroundColor: "white",
      //height: 200,
      display: "flex",
      // flex: 0,

      //alignItems: "center",

      justifyContent: "space-evenly",
      padding: 20,
    },

    textInputs: {
      borderWidth: 1,
      marginBottom: 20,
      borderRadius: 5,
      textAlign: "left",
      alignItems: "flex-start",
      // fontWeight: 800,
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderColor:
        formik.errors.username || formik.errors.password ? "red" : "black",
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
      <TextInput
        placeholder="username"
        value={formik.values.username}
        onChange={formik.handleChange("username")}
        style={styles.textInputs}
        onBlur={formik.handleBlur("username")}
      />
      {formik.touched.username && formik.errors.username && (
        <Text style={{ color: "red" }}> {formik.errors.username} </Text>
      )}
      <TextInput
        secureTextEntry={true}
        placeholder="Password"
        value={formik.values.password}
        onChange={formik.handleChange("password")}
        style={styles.textInputs}
        onBlur={formik.handleBlur("password")}
      />
      {formik.touched.password && formik.errors.password && (
        <Text style={{ color: "red" }}> {formik.errors.password} </Text>
      )}
      <Pressable onPress={formik.handleSubmit}>
        <Text
          backgroundColor="primary"
          color="headingColor"
          fontSize="headingSize"
          fontWeight="bold"
          style={styles.textButton}
        >
          Sign in
        </Text>
      </Pressable>
    </View>
  );
};

const SignIn = () => {
  const onSubmit = (values) => {
    // const username = values.username;
    // const password = values.password;
    console.log("==USER== ", values);
  };
  return <SignInForm onSubmit={onSubmit} />;
};

export default SignIn;
