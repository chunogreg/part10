import { View, TextInput, Pressable, StyleSheet } from "react-native";
import Text from "./Text";
import { replace, useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-native";
import useSignIn from "../hooks/useSignIn";
import { CREATE_USER } from "../graphql/mutations";
import { useApolloClient, useMutation } from "@apollo/client/react";
import useAuthStorage from "../hooks/useAuthStorage";

const initialValues = {
  username: "",
  password: "",
  passwordConfirm: "",
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(5)
    .max(30)
    // .min(2, "username must be more than 1 character")

    .required("username is required"),
  password: yup
    .string()
    .min(5)
    .max(50)
    // .min(6, "password must be more than 5 character")
    .required("password is required"),
  passwordConfirm: yup
    .string()
    .equals([yup.ref("password")], "Passwords must match")
    .required("Password confirmation is required"),
});

export const SignUpForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
    //validateOnChange: false,
  });

  const styles = StyleSheet.create({
    container: {
      backgroundColor: "white",
      //height: 200,
      display: "flex",
      justifyContent: "space-evenly",
      padding: 20,
    },

    textInputs: {
      borderWidth: 1,
      marginVertical: 12,
      borderRadius: 5,
      textAlign: "left",
      alignItems: "flex-start",
      // fontWeight: 800,
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderColor:
        formik.errors.username ||
        formik.errors.password ||
        formik.errors.passwordConfirm
          ? "red"
          : "black",
    },
    textButton: {
      height: 50,
      marginVertical: 12,

      borderRadius: 5,
      textAlign: "center",
      paddingVertical: 10,
    },
  });

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Username"
        value={formik.values.username}
        onChangeText={formik.handleChange("username")}
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
        onChangeText={formik.handleChange("password")}
        style={styles.textInputs}
        onBlur={formik.handleBlur("password")}
      />
      {formik.touched.password && formik.errors.password && (
        <Text style={{ color: "red" }}> {formik.errors.password} </Text>
      )}

      <TextInput
        secureTextEntry={true}
        placeholder="Password confirmation"
        value={formik.values.passwordConfirm}
        onChangeText={formik.handleChange("passwordConfirm")}
        style={styles.textInputs}
        onBlur={formik.handleBlur("passwordConfirm")}
      />
      {formik.touched.passwordConfirm && formik.errors.passwordConfirm && (
        <Text style={{ color: "red" }}> {formik.errors.passwordConfirm} </Text>
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

const SignUp = () => {
  const [createUser] = useMutation(CREATE_USER);
  const [signIn] = useSignIn();
  const navigate = useNavigate();
  const authStorage = useAuthStorage();
  const client = useApolloClient();

  console.log("==SIGN IN==", signIn);
  console.log("==SIGNIN DOT DATA==", signIn.data);

  const onSubmit = async (values) => {
    const { username, password } = values;
    try {
      const signup = await createUser({
        variables: { user: { username, password } },
      });
      const { data } = await signIn({ username, password });
      console.log("==SIGNUP COMPLETED==", signup);
      await authStorage.setAccessToken(data?.authenticate.accessToken);

      console.log("==ACCESS TOKEN== ", data.authenticate.accessToken);

      client.resetStore();
      navigate("/", { replace: true });
    } catch (e) {
      console.log("==ANY ERROR ?== ", e);
    }
  };

  return <SignUpForm onSubmit={onSubmit} />;
};

export default SignUp;
