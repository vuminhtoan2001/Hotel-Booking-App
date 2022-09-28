import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  NativeModules,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

import HeaderTitle from "~/components/HeaderTitle";
import PrimaryButton from "~/components/PrimaryButton";
import LinearGradientComponent from "~/components/LinearGradient";
import Input from "~/components/Input";

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

function CheckoutSecond({ navigation }) {
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
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
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

              <View style={styles.vector}></View>
              <View style={[styles.step, styles.inactive]}>
                <Text style={[styles.step]}>3</Text>
              </View>
            </View>
            <View style={styles.form}>
              <ScrollView showsVerticalScrollIndicator={false}>
                <Image style={styles.image} source={require("~/assets/images/CreditCard.png")} />
                <Input placeholder="Card Number" />
                <View style={styles.flex_input}>
                  <Input style={{ flex: 1, marginRight: 18 }} placeholder="Expiry" />
                  <Input style={{ flex: 1 }} placeholder="CVV" />
                </View>
                <Input placeholder="Name" />
              </ScrollView>
            </View>
          </View>
          <PrimaryButton
            style={{ width: "100%" }}
            text="Go to Confirmation"
            onPress={() => navigation.navigate("CheckoutLast")}
          />
        </View>
      </TouchableWithoutFeedback>
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
  form: {
    width: "100%",
    flex: 1,
  },
  image: {
    width: "100%",
    borderRadius: 10,
    marginBottom: 20,
  },
  flex_input: {
    flexDirection: "row",
    width: "100%",
  },
});
export default CheckoutSecond;
