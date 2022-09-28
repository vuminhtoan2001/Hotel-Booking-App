import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
  Image,
  ScrollView,
  NativeModules,
  StatusBar,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import { LinearGradient } from "expo-linear-gradient";
import LinearGradientComponent from "~/components/LinearGradient";
import { HeartIcon, PaymentIcon, HelpIcon, PromotionIcon, SettingIcon } from "~/components/Icons";

const { StatusBarManager } = NativeModules;
const STATUSBAR_HEIGHT = Platform.OS === "ios" ? 20 : StatusBarManager.HEIGHT;

function User({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" translucent={true} backgroundColor="#fff" />

      <View style={styles.username}>
        <View style={styles.image}>
          <Image source={require("~/assets/images/avatar.png")} />
        </View>
        <Text style={styles.name}>Samantha Doe</Text>
      </View>
      <View style={styles.menu}>
        <TouchableOpacity style={styles.menu_item}>
          <HeartIcon width={30} height={30} />
          <Text style={styles.item_text}>Your favourites</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menu_item}>
          <PaymentIcon width={30} height={30} />
          <Text style={styles.item_text}>Payment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menu_item}>
          <HelpIcon width={30} height={30} />
          <Text style={styles.item_text}>Help</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menu_item}>
          <PromotionIcon width={30} height={30} />
          <Text style={styles.item_text}>Promotions</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menu_item}>
          <SettingIcon width={30} height={30} />
          <Text style={styles.item_text}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: STATUSBAR_HEIGHT,
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
  username: {
    width: "100%",
    height: 100,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#F5F5F5",
    paddingLeft: 18,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },

  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#393939",
    marginLeft: 40,
  },
  menu: {
    width: "100%",
    height: "100%",
    backgroundColor: "#F5F5F5",
    paddingLeft: 22,
  },
  menu_item: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 18,
  },

  item_text: {
    marginLeft: 16,
    fontSize: 20,
    fontWeight: "bold",
    color: "#393939",
  },
});

export default User;
