import { View, Button, FlatList, Pressable } from "react-native";
import Text from "./Text";
import { GET_REVIEWS } from "../graphql/queries";

import RepositoryView from "./repositoryView";
import ReviewItems from "./reviewItems";
import { useQuery } from "@apollo/client/react";
import { useParams } from "react-router-native";

const SingleRepository = () => {
  const { id } = useParams();

  const { data, error, loading, fetchMore } = useQuery(GET_REVIEWS, {
    variables: { id: id, first: 9 },
  });
  if (loading) return <Text>...loading</Text>;
  if (error) return <Text> Error: {error.message}...loading</Text>;

  const reviews = data?.repository?.reviews?.edges
    ? data.repository.reviews.edges.map((edge) => edge.node)
    : [];

  const handleFechMore = () => {
    const canFetchMore =
      !loading && data.repository.reviews.pageInfo.hasNextPage;
    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.repository.reviews.pageInfo.endCursor,
        //...variables,
      },
    });
  };

  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <ReviewItems review={item} />}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={() => <RepositoryView id={id} />}
      onEndReached={handleFechMore}
      onEndReachedThreshold={0.5}
    />
  );
};

export default SingleRepository;
