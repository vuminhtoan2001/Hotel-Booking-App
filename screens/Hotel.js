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
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "~/components/LinearGradient";

import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Recommended from "~/components/Recommended";
import RateButton from "~/components/RateButton";
import PrimaryButton from "~/components/PrimaryButton";

import { MapIcon, PersonIcon } from "~/components/Icons";

const { width, height } = Dimensions.get("window");

function Hotel() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" translucent={true} backgroundColor="transparent" />
      <View style={styles.picture}>
        <Image style={styles.image} source={require("~/assets/images/hotel_large_picture.png")} />
        <View style={styles.button_top}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Entypo name="chevron-left" size={34} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity>
            <AntDesign name="hearto" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
        <View style={styles.list_small_image}>
          <Image style={styles.image_small} source={require("~/assets/images/hotel_venice.png")} />
          <Image
            style={styles.image_small}
            source={require("~/assets/images/hotel_small_picture.png")}
          />
          <Image
            style={styles.image_small}
            source={require("~/assets/images/hotel_splendid.png")}
          />
          <Text style={styles.quantity}>+25</Text>
        </View>
      </View>
      <View style={styles.title}>
        <Text style={styles.title_text}>Beach Resort Lux</Text>
        <RateButton rate="4.5" />
      </View>
      <Image style={styles.hotel_map} source={require("~/assets/images/hotel_map.png")} />
      <View style={styles.wrapper}>
        <View style={styles.group_detail}>
          <View style={styles.icon}>
            <MapIcon width={30} height={30} />
          </View>
          <Text style={styles.text_detail}>Waikiki, HI 123456, Honolulu</Text>
        </View>
        <View style={styles.group_detail}>
          <View style={styles.icon}>
            <PersonIcon width={30} height={30} />
          </View>
          <Text style={styles.text_detail}>3.2 miles from centre</Text>
        </View>
      </View>
      <PrimaryButton
        style={{ marginTop: 18 }}
        text="Select Rooms"
        onPress={() => navigation.navigate("Room")}
      />
      {/* <LinearGradient style={styles.gradient}>
        <TouchableOpacity style={styles.button_apply}>
          <Text style={styles.text_apply}>Apply</Text>
        </TouchableOpacity>
      </LinearGradient> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  picture: {
    width: width,
  },
  image: {
    width: "100%",
    height: 260,
    resizeMode: "cover",
  },
  list_small_image: {
    flexDirection: "row",
  },

  button_top: {
    position: "absolute",
    top: 50,
    width: "100%",
    paddingHorizontal: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  image_small: {
    flex: 1,
    height: 80,
  },
  quantity: {
    position: "absolute",
    right: 30,
    top: 30,
    fontSize: 14,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  title: {
    width: "100%",
    paddingHorizontal: 18,
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title_text: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#393939",
  },
  hotel_map: {
    width: "100%",
    height: 182,
    resizeMode: "contain",
  },
  icon: {
    alignSelf: "center",
    padding: 12,
    backgroundColor: "#fff6e5",
    borderRadius: 10,
  },
  wrapper: {
    marginTop: 20,
  },
  group_detail: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 18,
    paddingVertical: 10,
  },
  text_detail: {
    marginLeft: 16,
    fontSize: 16,
    fontWeight: "bold",
    color: "#999999",
  },
});

export default Hotel;
