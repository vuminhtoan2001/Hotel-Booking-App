import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
function FilterLabel({ navigation, setModalVisible, listView, fadeIn }) {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity style={styles.button_left} onPress={fadeIn}>
        <View style={styles.icon_filter}>
          <MaterialCommunityIcons name="filter" size={24} color="#616167" />
        </View>
        <Text style={styles.text_filter}>Filter</Text>
      </TouchableOpacity>
      {listView ? (
        <View>
          <TouchableOpacity style={styles.button_right} onPress={() => navigation.goBack()}>
            <Text style={styles.text_filter}>List view</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <TouchableOpacity
            style={styles.button_right}
            onPress={() => navigation.navigate("SearchMap")}
          >
            <Text style={styles.text_filter}>Map</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 50,
    paddingHorizontal: 18,
    borderWidth: 1,
    borderColor: "#F5F5F5",
  },
  text_filter: {
    fontSize: 16,
    color: "#616167",
  },
  button_left: {
    flexDirection: "row",
  },
  icon_filter: {
    marginRight: 6,
  },
});

export default FilterLabel;
