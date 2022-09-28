import { StyleSheet, View, Text, TouchableOpacity, TextInput } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

function InputSearch({ navigation }) {
  return (
    <View style={styles.wrapper_input}>
      <TouchableOpacity
        style={styles.icon_search}
        onPress={() => navigation.navigate("SearchList")}
      >
        <FontAwesome name="search" size={24} color="#999999" />
      </TouchableOpacity>
      <TextInput
        style={styles.search_input}
        selectionColor="gray"
        onSubmitEditing={() => navigation.navigate("SearchList")}
      />
      <TouchableOpacity style={styles.icon_delete} onPress={() => navigation.goBack()}>
        <FontAwesome5 name="times" size={20} color="gray" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper_input: {
    height: 50,
    width: "100%",
    paddingLeft: 18,
    paddingRight: 18,
    marginTop: 80,
    opacity: 0.6,
    position: "relative",
  },
  search_input: {
    height: 50,
    fontSize: 16,
    borderRadius: 10,
    paddingLeft: 56,
    paddingRight: 52,
    color: "black",
    backgroundColor: "#DFDEDE",
  },

  icon_search: {
    position: "absolute",
    height: 50,
    left: 36,
    justifyContent: "center",
    zIndex: 1,
  },
  icon_delete: {
    position: "absolute",
    height: 50,
    right: 38,
    justifyContent: "center",
    zIndex: 2,
  },
});

export default InputSearch;
