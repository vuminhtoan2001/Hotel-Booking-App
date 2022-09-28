import { useQuery } from "@tanstack/react-query";
import { View, Text, FlatList } from "react-native";

function ReactQuery() {
  const { isLoading, error, data, refetch } = useQuery(["keyQuery"], () =>
    fetch("https://jsonplaceholder.typicode.com/posts").then((res) => res.json())
  );
  console.log(isLoading);
  const renderItem = ({ item }) => (
    <View style={{ paddingVertical: 20, paddingHorizontal: 18 }}>
      <Text style={{ color: "blue", fontSize: 18, fontWeight: "bold" }}>{item.title}</Text>
      <Text>{item.body}</Text>
    </View>
  );
  if (isLoading)
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  if (error)
    return (
      <View>
        <Text>Error:{error.message}</Text>
      </View>
    );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
    />
  );
}

export default ReactQuery;
