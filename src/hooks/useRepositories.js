import { useEffect, useState } from "react";
import { GET_REPOSITORIES } from "../graphql/queries";
import { useQuery } from "@apollo/client/react";
import { View, Text } from "react-native";

const useRepositories = () => {
  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
  });

  //const response = await fetch("http://192.168.114.44:5000/api/repositories");

  // console.log("==RESPONSE==", data);
  // console.log("==ERROR==", error);

  return {
    repositories: data?.repositories,
    loading,
    error,
  };
};
export default useRepositories;
