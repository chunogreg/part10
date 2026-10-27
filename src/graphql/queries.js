import { gql } from "@apollo/client";

// export const GET_REPOSITORIES = gql`
//   query GetRepositories(
//     $orderBy: AllRepositoriesOrderBy
//     $orderDirection: OrderDirection
//     $searchKeyword: String $first: Int
//   ) {
//     repositories(
//       orderBy: $orderBy
//       orderDirection: $orderDirection
//       searchKeyword: $searchKeyword first: $first
//     ) {
//       edges {
//         node {
//           id
//           fullName
//           ratingAverage
//           reviewCount
//           stargazersCount
//           forksCount
//           ownerAvatarUrl
//           description
//           language
//         }
//       }
//     }
//   }
// `;

//===========================
export const GET_REPOSITORIES = gql`
  query GetRepositories(
    $first: Int
    $after: String
    $orderBy: AllRepositoriesOrderBy
    $orderDirection: OrderDirection
    $searchKeyword: String
  ) {
    repositories(
      first: $first
      after: $after
      orderBy: $orderBy
      orderDirection: $orderDirection
      searchKeyword: $searchKeyword
    ) {
      edges {
        node {
          id
          fullName
          ratingAverage
          reviewCount
          stargazersCount
          forksCount
          ownerAvatarUrl
          description
          language
        }
        cursor
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`;
//=============================

export const ME = gql`
  query getCurrentUser($includeReviews: Boolean = false) {
    me {
      id
      username
      reviews @include(if: $includeReviews) {
        edges {
          node {
            id
            rating
            repositoryId
            createdAt
            text
            repository {
              fullName
              id
            }
          }
        }
      }
    }
  }
`;

export const REPOSITORY = gql`
  query GetRepository($id: ID!) {
    repository(id: $id) {
      id
      fullName
      ratingAverage
      reviewCount
      stargazersCount
      forksCount
      ownerAvatarUrl
      description
      language
      url
    }
  }
`;

export const GET_REVIEWS = gql`
  query GetReVIEWS($id: ID!, $first: Int, $after: String) {
    repository(id: $id) {
      id
      fullName
      reviews(first: $first, after: $after) {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
          cursor
        }
        totalCount
        pageInfo {
          endCursor
          hasNextPage
          startCursor
        }
      }
    }
  }
`;
