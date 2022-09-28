import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
function ItemRecommended({ item }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.wrapper} onPress={() => navigation.navigate("Hotel")}>
      <Image style={styles.image} source={item.image} />
      <View style={styles.main}>
        <Text style={styles.name}>{item.name}</Text>
        <View style={styles.main_bottom}>
          <Text style={styles.place}>{item.place}</Text>
          <View style={styles.main_bottom_right}>
            <Text style={styles.price}>${item.price}~</Text>
            <Text style={styles.rate}>{item.rate}</Text>
            <AntDesign name="star" size={14} color="gray" />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginLeft: 18,
  },

  main: {
    position: "absolute",
    top: 120,
    width: "100%",
    paddingHorizontal: 16,
  },

  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  main_bottom: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  place: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#FFFFFF",
  },

  main_bottom_right: {
    flexDirection: "row",
    alignItems: "center",
  },
  price: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginRight: 10,
  },
  rate: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginRight: 6,
  },
});

export default ItemRecommended;
