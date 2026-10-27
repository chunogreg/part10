import { GET_REPOSITORIES } from "../graphql/queries";
import { SEARCH_REPOSITORIES } from "../graphql/queries";
import { useQuery } from "@apollo/client/react";

const useRepositories = ({ first, orderBy, orderDirection, searchKeyword }) => {
  const { data, loading, fetchMore, ...result } = useQuery(GET_REPOSITORIES, {
    variables: { first, orderBy, orderDirection, searchKeyword },
  });

  //const response = await fetch("http://192.168.114.44:5000/api/repositories");

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;
    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.repositories.pageInfo.endCursor,

        first,
        orderBy,
        orderDirection,
        searchKeyword,
        //...variables,
      },
    });
  };

  return {
    repositories: data?.repositories,
    fetchMore: handleFetchMore,
    loading,
    ...result,
  };
};
export default useRepositories;
