import { View, TextInput, StyleSheet, Pressable } from "react-native";
import Text from "./Text";
import * as yup from "yup";
import { useFormik } from "formik";
import { useNavigate } from "react-router-native";
import { useMutation } from "@apollo/client/react";
import { CREATE_REVIEW } from "../graphql/mutations";

const initialValues = {
  ownerName: "",
  repositoryName: "",
  rating: "",
  review: "",
};

const validationSchema = yup.object().shape({
  ownerName: yup
    .string()
    // .min(2, "username must be more than 1 character")

    .required("Repository Owner's name is required"),
  repositoryName: yup
    .string()
    // .min(6, "password must be more than 5 character")
    .required("repository name is required"),
  rating: yup.number().integer().min(0).max(100).required("rating is required"),
  review: yup.string(),
});

export const ReviewForm = ({ onSubmit }) => {
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
      marginVertical: 10,
      borderRadius: 5,
      textAlign: "left",
      alignItems: "flex-start",
      // fontWeight: 800,
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderColor:
        formik.errors.ownerName ||
        formik.errors.repositoryName ||
        formik.errors.rating ||
        formik.errors.review
          ? "red"
          : "black",
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
        placeholder="Repository owner name"
        value={formik.values.ownerName}
        onChangeText={formik.handleChange("ownerName")}
        style={styles.textInputs}
        onBlur={formik.handleBlur("ownerName")}
      />
      {formik.touched.ownerName && formik.errors.ownerName && (
        <Text style={{ color: "red" }}>{formik.errors.ownerName}</Text>
      )}
      <TextInput
        placeholder="Repository name"
        value={formik.values.repositoryName}
        onChangeText={formik.handleChange("repositoryName")}
        style={styles.textInputs}
        onBlur={formik.handleBlur("repositoryName")}
      />
      {formik.touched.repositoryName && formik.errors.repositoryName && (
        <Text style={{ color: "red" }}> {formik.errors.repositoryName} </Text>
      )}
      <TextInput
        placeholder="Rating between 0 and 100"
        value={formik.values.rating}
        onChangeText={formik.handleChange("rating")}
        style={styles.textInputs}
        onBlur={formik.handleBlur("rating")}
      />
      {formik.touched.rating && formik.errors.rating && (
        <Text style={{ color: "red" }}> {formik.errors.rating} </Text>
      )}

      <TextInput
        placeholder="Review"
        multiline="true"
        value={formik.values.review}
        onChangeText={formik.handleChange("review")}
        style={styles.textInputs}
        onBlur={formik.handleBlur("review")}
      />
      {formik.touched.review && formik.errors.review && (
        <Text style={{ color: "red" }}> {formik.errors.review} </Text>
      )}

      <Pressable onPress={formik.handleSubmit}>
        <Text
          backgroundColor="primary"
          color="headingColor"
          fontSize="headingSize"
          fontWeight="bold"
          style={styles.textButton}
        >
          Create a review
        </Text>
      </Pressable>
    </View>
  );
};

const CreateReview = () => {
  const [createReview] = useMutation(CREATE_REVIEW, {
    fetchPolicy: "no-cache",
  });
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const reviewInputs = {
      ownerName: values.ownerName,
      repositoryName: values.repositoryName,
      rating: Number(values.rating),
      text: values.review,
    };
    try {
      const { data } = await createReview({
        variables: {
          review: reviewInputs,
        },
      });

      console.log("==DATA== ", data.createReview.repositoryId);
      console.log("==ID== ", data.createReview.id);

      navigate(`/${data.createReview.repositoryId}`, { replace: true });
    } catch (e) {
      console.log("==ANY ERROR ?== ", e);
    }
  };

  return <ReviewForm onSubmit={onSubmit} />;
};

export default CreateReview;
