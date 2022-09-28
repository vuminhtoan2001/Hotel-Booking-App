import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
  StatusBar,
  Dimensions,
  TextInput,
  Platform,
} from "react-native";
import { Entypo } from "@expo/vector-icons";

import RateButton from "~/components/RateButton";

function ItemSearch({ item }) {
  return (
    <TouchableOpacity style={[styles.wrapper]}>
      <View style={styles.header}>
        <Image style={styles.image} source={item.image} />
        <View style={styles.header_title}>
          <Text style={styles.name}>{item.name}</Text>
          <RateButton rate="4.8" style={styles.view} />
        </View>
        <Entypo style={styles.icon_favorite} name="heart-outlined" size={24} color="#FFF" />
      </View>
      <View style={styles.body}>
        <Text style={styles.description}>{item.description}</Text>
        <View style={styles.wrapper_price}>
          <View>
            <Text style={styles.text_price}>{item.price_text1}</Text>
            <Text style={styles.text_price}>{item.price_text2}</Text>
          </View>
          <Text style={styles.price}>$ {item.price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    marginTop: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#eff2f4",
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  image: {
    // width: 38,
    height: 186,
    resizeMode: "contain",
  },
  header_title: {
    width: "100%",
    position: "absolute",
    bottom: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },

  name: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },

  icon_favorite: {
    position: "absolute",
    top: 10,
    right: 20,
  },

  body: {
    paddingHorizontal: 15,
    marginTop: 18,
  },

  description: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#999999",
    marginBottom: 20,
  },
  wrapper_price: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginBottom: 16,
  },
  text_price: {
    paddingVertical: 3,
    fontSize: 14,
    fontWeight: "bold",
    color: "#393939",
  },
  price: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#434343",
  },
  elevation: {
    elevation: 0.01,
    shadowColor: "#52006A",
  },
});

// const generateBoxShadowStyle = () => {
//   if (Platform.OS === "ios") {
//     styles.boxShadow = {
//       shadowColor: "#000",
//       shadowOffset: {
//         width: 0,
//         height: 1,
//       },
//       shadowOpacity: 0.2,
//       shadowRadius: 1.41,

//       elevation: 2,
//     };
//   } else if (Platform.OS === "android") {
//     styles.boxShadow = {
//       shadowColor: "#000",
//       shadowOffset: {
//         width: 0,
//         height: 1,
//       },
//       shadowOpacity: 0.2,
//       shadowRadius: 1.41,

//       elevation: 2,
//     };
//   }
// };
// generateBoxShadowStyle();

export default ItemSearch;
