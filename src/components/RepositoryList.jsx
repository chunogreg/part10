import { FlatList, Pressable, StyleSheet, View } from "react-native";
import RepositoryItem from "./RepositoryItem";

import useRepositories from "../hooks/useRepositories";
import { useNavigate } from "react-router-native";
import { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import Text from "./Text";
import { TextInput } from "react-native";
//import { Searchbar } from "react-native-paper";
// import { Ionicons } from "@expo/vector-icons";

const styles = StyleSheet.create({
  separator: { height: 10 },
});

const ItemSeparator = () => <View style={styles.container} />;

export const RepositoryListContainer = ({ repositories, onEndReached }) => {
  const navigate = useNavigate();
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];
  // console.log("==REPO==", repositories?.edges);
  console.log("**Displayed repository count**: ", repositoryNodes.length);

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => (
        <Pressable onPress={() => navigate(`/${item.id}`)}>
          <RepositoryItem repository={item} />
        </Pressable>
      )}
      keyExtractor={(item) => item.id}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.5}
    />
  );
};

const RepositoryList = () => {
  const orderingPath = {
    // oldest: { orderBy: "CREATED_AT", orderDirection: "ASC" },
    newest: { orderBy: "CREATED_AT", orderDirection: "DESC" },
    highestRated: { orderBy: "RATING_AVERAGE", orderDirection: "DESC" },
    lowestRated: { orderBy: "RATING_AVERAGE", orderDirection: "ASC" },
  };

  const [ordering, setOrdering] = useState("newest");
  const [searchText, setSerachText] = useState("");

  const { repositories, fetchMore } = useRepositories({
    first: 5,
    ...orderingPath[ordering],
    searchKeyword: searchText,
  });

  return (
    <>
      <View style={{ padding: 10 }}>
        {/* <Text color="textSecondary">Select an item . . .</Text> */}
        {/* <Searchbar placeholder="search" /> */}
        <TextInput
          style={{ padding: 10, backgroundColor: "#fffe", borderRadius: 15 }}
          placeholder="🔍 Search ropositories"
          value={searchText}
          onChangeText={setSerachText}
        />
        <Picker
          selectedValue={ordering}
          onValueChange={(itemValue, index) => {
            setOrdering(itemValue);
          }}
          style={{
            backgroundColor: "transparent",
            borderWidth: 0,
            height: 71,
          }}
        >
          <Picker.Item
            label="Latest repositories"
            value="newest"
            style={{ marginHorizontal: 44 }}
          />
          {/* <Picker.Item label="Oldest repositories" value="oldest" /> */}
          <Picker.Item
            label="Highest rated repositories"
            value="highestRated"
            style={{ marginHorizontal: 44 }}
          />
          <Picker.Item label="Lowest rated repositories" value="lowestRated" />
        </Picker>
      </View>
      <RepositoryListContainer
        repositories={repositories}
        onEndReached={fetchMore}
      />
    </>
  );
};

export default RepositoryList;
