import { styles } from "./RepositoryItem";
import { View, Button, FlatList, Pressable } from "react-native";
import Text from "./Text";
import { format } from "date-fns";

const ReviewItems = ({ review }) => {
  //const date = formatDate()
  return (
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
            {review.rating}
          </Text>

          <View style={styles.child3} testID="repositoryItem">
            <Text fontSize="subheading" fontWeight="bold" marginBottom="bottom">
              {review.user?.username}
            </Text>

            <Text
              fontSize="subheading"
              fontWeight="normal"
              //   color="textSecondary"
              marginBottom="bottom"
            >
              {format(new Date(review.createdAt), "dd MMM yyyy")}
              {/* {review.createdAt} */}
            </Text>

            <Text
              //   color="headingColor"
              //   backgroundColor="primary"
              fontSize="subheading"
              fontWeight="normal"
              style={styles.child4}
            >
              {review.text}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ReviewItems;
