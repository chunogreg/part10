import { View, StyleSheet, FlatList, Pressable, Alert } from "react-native";
import Text from "./Text";
import { ME } from "../graphql/queries";
import { useMutation, useQuery } from "@apollo/client/react";
import ReviewItems from "./reviewItems";
import { styles } from "./RepositoryItem";
import { format } from "date-fns";
import { useNavigate } from "react-router-native";
import { DELETE_REVIEW } from "../graphql/mutations";

const MyReviews = () => {
  const navigate = useNavigate();

  const { data, loading, refetch } = useQuery(ME, {
    variables: { includeReviews: true },
    fetchPolicy: "cache-and-network",
  });

  const reviewData = data?.me?.reviews?.edges;
  const reviewInfo = reviewData ? reviewData.map((edge) => edge.node) : [];
  console.log("==INFO==", reviewInfo);

  const [deleteReview] = useMutation(DELETE_REVIEW);

  console.log("==DELETEREVIEW", deleteReview);

  if (loading)
    return (
      <View>
        <Text>Loading . . .</Text>
      </View>
    );

  const handleDelete = (id) => {
    Alert.alert(
      "Delete Review",
      "Do you actually want to delete this review? ",
      [
        { text: "Cancel", onPress: () => {}, style: "cancel" },
        {
          text: "Delete",
          onPress: () => {
            deleteReview({
              variables: { deleteReviewId: id },
            });
            refetch();
          },
        },
      ],
    );
  };

  return (
    <>
      <FlatList
        data={reviewInfo}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <View style={styles.child1}>
              <View style={styles.child2}>
                <Text
                  fontSize="headingSize"
                  fontWeight="bold"
                  marginBottom="bottom"
                  color="primary"
                  width="width"
                  height="height"
                  borderWidth="borderWidth"
                  padding="padding"
                  borderRadius="borderRadius"
                  borderColor="primary"
                >
                  {item.rating}
                </Text>

                <View style={styles.child3} testID="repositoryItem">
                  <Text
                    fontSize="subheading"
                    fontWeight="bold"
                    marginBottom="bottom"
                  >
                    {item.repository?.fullName}
                  </Text>

                  <Text
                    fontSize="subheading"
                    fontWeight="normal"
                    //   color="textSecondary"
                    marginBottom="bottom"
                  >
                    {format(new Date(item.createdAt), "dd MMM yyyy")}
                    {/* {item.createdAt} */}
                  </Text>

                  <Text
                    fontSize="subheading"
                    fontWeight="normal"
                    style={styles.child4}
                  >
                    {item.text}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  marginTop: 29,
                }}
              >
                <Pressable onPress={() => navigate(`/${item.repository.id}`)}>
                  <Text
                    // {...textStyle()}
                    backgroundColor="primary"
                    color="headingColor"
                    style={styles.buttons}
                  >
                    View repository
                  </Text>
                </Pressable>
                <Pressable onPress={() => handleDelete(item.id)}>
                  <Text
                    // {...textStyle()}
                    backgroundColor="colorRedBackground"
                    color="headingColor"
                    style={styles.buttons}
                  >
                    Delete review
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
        )}
      />
    </>
  );
};

export default MyReviews;
