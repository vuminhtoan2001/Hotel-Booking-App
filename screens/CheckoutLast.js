import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
  NativeModules,
  TouchableWithoutFeedback,
} from "react-native";

import HeaderTitle from "~/components/HeaderTitle";
import PrimaryButton from "~/components/PrimaryButton";
import LinearGradientComponent from "~/components/LinearGradient";
import RateButton from "~/components/RateButton";

import { PricingIcon } from "~/components/Icons";
import { Entypo } from "@expo/vector-icons";
const { StatusBarManager } = NativeModules;
const STATUSBAR_HEIGHT = Platform.OS === "ios" ? 20 : StatusBarManager.HEIGHT;

function CheckoutLast({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" translucent={true} backgroundColor="#fff" />

      <View style={styles.header}>
        <HeaderTitle
          style={{ borderBottomWidth: 0 }}
          title="Reservation"
          onPress={() => navigation.goBack()}
        />
      </View>
      <View style={styles.wrapper}>
        <View style={styles.wrapper_top}>
          <View style={styles.steps}>
            <LinearGradientComponent style={styles.gradient}>
              <Text style={[styles.step]}>1</Text>
            </LinearGradientComponent>
            <View style={[styles.vector, styles.vector_active]}></View>
            <LinearGradientComponent style={styles.gradient}>
              <Text style={[styles.step]}>2</Text>
            </LinearGradientComponent>

            <View style={[styles.vector, styles.vector_active]}></View>
            <LinearGradientComponent style={styles.gradient}>
              <Text style={[styles.step]}>3</Text>
            </LinearGradientComponent>
          </View>
          <View style={styles.content}>
            <View style={styles.header}>
              <Image
                style={styles.image}
                source={require("~/assets/images/hotel_large_picture.png")}
              />
              <View style={styles.header_title}>
                <Text style={styles.name}>Beach Resort Lux</Text>
                <RateButton rate="4.8" style={styles.view} />
              </View>
              <Entypo style={styles.icon_favorite} name="heart-outlined" size={24} color="#FFF" />
            </View>
            <View style={styles.detail}>
              <Text style={styles.detail_text}>2 people</Text>
              <Text style={styles.detail_text}>Standard King Room</Text>
              <Text style={styles.detail_text}>2 nights</Text>
              <Text style={styles.detail_text}>Jan 18 2019 to Jan 20 2019</Text>
            </View>
            <View style={styles.div_price}>
              <Text style={styles.price}>$1480 USD</Text>
              <PricingIcon width={30} height={30} />
            </View>
          </View>
        </View>
        <PrimaryButton
          style={{ width: "100%" }}
          text="Complete"
          onPress={() => navigation.navigate("CheckoutLast")}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: STATUSBAR_HEIGHT,
  },
  wrapper: {
    flex: 1,
    marginTop: 10,
    paddingHorizontal: 18,
    backgroundColor: "white",
    justifyContent: "space-between",
    alignItems: "center",
  },
  steps: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 40,
  },
  gradient: {
    width: 36,
    height: 36,
    borderRadius: 50,
  },
  step: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  inactive: {
    width: 36,
    height: 36,
    borderRadius: 50,
    backgroundColor: "#DFDEDE",
    justifyContent: "center",
    alignItems: "center",
  },
  vector: {
    width: 46,
    borderWidth: 1,
    borderColor: "#DFDEDE",
  },
  vector_active: {
    borderColor: "#FFCD61",
  },
  wrapper_top: {
    flex: 1,
    width: "100%",
  },
  //   content: {
  //     flex: 1,
  //     borderWidth: 1,
  //     borderColor: "red",
  //   },
  //   header: {
  //     width: "100%",
  //   },
  image: {
    width: "100%",
    resizeMode: "contain",
    borderRadius: 10,
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
  detail: {
    marginTop: 18,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: "#DFDEDE",
  },
  detail_text: {
    fontSize: 16,
    paddingVertical: 10,
    color: "#616167",
  },
  div_price: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  },
  price: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#393939",
  },
});
export default CheckoutLast;
