import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  NativeModules,
} from "react-native";

import HeaderTitle from "~/components/HeaderTitle";
import PrimaryButton from "~/components/PrimaryButton";
import {
  PricingIcon,
  RefundableIcon,
  CupIcon,
  WifiIcon,
  ConditionerIcon,
  BathIcon,
} from "~/components/Icons";

const { StatusBarManager } = NativeModules;
const STATUSBAR_HEIGHT = Platform.OS === "ios" ? 20 : StatusBarManager.HEIGHT;

function Room({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" translucent={true} backgroundColor="#f5f5f5" />

      <View style={styles.header}>
        <HeaderTitle
          title="Beach Resort Lux"
          style={{ borderBottomWidth: 0 }}
          onPress={() => navigation.goBack()}
        />
      </View>
      <View style={styles.wrapper}>
        <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
          <View style={styles.card}>
            <Image
              style={styles.card_image}
              source={require("~/assets/images/hotel_splendid.png")}
            />
            <View style={styles.card_body}>
              <View style={styles.title}>
                <Text style={styles.title_text}>Standard King Room</Text>
                <PricingIcon width={30} height={30} />
              </View>
              <View style={styles.detail}>
                <View style={styles.detail_item}>
                  <RefundableIcon width={20} height={20} />
                  <Text style={styles.detail_item_text}>Refundable</Text>
                </View>
                <View style={styles.detail_item}>
                  <CupIcon width={20} height={20} />
                  <Text style={styles.detail_item_text}>Breakfact included</Text>
                </View>
                <View style={styles.detail_item}>
                  <WifiIcon width={20} height={20} />
                  <Text style={styles.detail_item_text}>Wi-Fi</Text>
                </View>
                <View style={styles.detail_item}>
                  <ConditionerIcon width={20} height={20} />
                  <Text style={styles.detail_item_text}>Air Conditioner</Text>
                </View>
                <View style={styles.detail_item}>
                  <BathIcon width={20} height={20} />
                  <Text style={styles.detail_item_text}>Bath</Text>
                </View>
              </View>
              <View style={styles.card_bottom}>
                <View style={styles.card_bottom_right}>
                  <Text style={styles.price}>$1480</Text>
                  <Text style={styles.time}>2 nights</Text>
                </View>
                <PrimaryButton
                  style={styles.button}
                  text="Select"
                  onPress={() => navigation.navigate("Checkout")}
                />
              </View>
            </View>
          </View>
          <View style={styles.card}>
            <Image
              style={styles.card_image}
              source={require("~/assets/images/hotel_splendid.png")}
            />
            <View style={styles.card_body}>
              <View style={styles.title}>
                <Text style={styles.title_text}>Standard King Room</Text>
                <PricingIcon width={30} height={30} />
              </View>
              <View style={styles.detail}>
                <View style={styles.detail_item}>
                  <RefundableIcon width={20} height={20} />
                  <Text style={styles.detail_item_text}>Refundable</Text>
                </View>
                <View style={styles.detail_item}>
                  <CupIcon width={20} height={20} />
                  <Text style={styles.detail_item_text}>Breakfact included</Text>
                </View>
                <View style={styles.detail_item}>
                  <WifiIcon width={20} height={20} />
                  <Text style={styles.detail_item_text}>Wi-Fi</Text>
                </View>
                <View style={styles.detail_item}>
                  <ConditionerIcon width={20} height={20} />
                  <Text style={styles.detail_item_text}>Air Conditioner</Text>
                </View>
                <View style={styles.detail_item}>
                  <BathIcon width={20} height={20} />
                  <Text style={styles.detail_item_text}>Bath</Text>
                </View>
              </View>
              <View style={styles.card_bottom}>
                <View style={styles.card_bottom_right}>
                  <Text style={styles.price}>$1480</Text>
                  <Text style={styles.time}>2 nights</Text>
                </View>
                <PrimaryButton
                  style={styles.button}
                  text="Select"
                  onPress={() => navigation.navigate("Checkout")}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    marginTop: STATUSBAR_HEIGHT,
  },
  scroll: {
    width: "100%",
    height: "100%",
    backgroundColor: "#f5f5f5",
  },
  wrapper: {
    flex: 1,
    marginTop: 10,
    paddingHorizontal: 18,
    backgroundColor: "white",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  card: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 0.9,
    borderColor: "#F5F5F5",
    marginBottom: 18,
  },
  card_image: {
    width: "100%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  card_body: {
    paddingHorizontal: 18,
  },
  title: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
  },
  title_text: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#393939",
  },
  detail_item: {
    flexDirection: "row",
    paddingVertical: 4,
  },
  detail_item_text: {
    fontSize: 14,
    color: "#616167",
    marginLeft: 20,
  },
  card_bottom: {
    width: "100%",
    marginTop: 20,
    flexDirection: "row",
  },
  card_bottom_right: {
    width: 110,
    justifyContent: "center",
  },
  button: {
    flex: 1,
  },
  price: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#393939",
  },
  time: {
    fontSize: 12,
    color: "#999990",
  },
});
export default Room;
