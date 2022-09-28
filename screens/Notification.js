import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
  Image,
  ScrollView,
  NativeModules,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import { LinearGradient } from "expo-linear-gradient";
import LinearGradientComponent from "~/components/LinearGradient";

const { StatusBarManager } = NativeModules;
const STATUSBAR_HEIGHT = Platform.OS === "ios" ? 20 : StatusBarManager.HEIGHT;

function Notification({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper_deal}>
        <Image style={styles.image} source={require("~/assets/images/Background_deal.png")} />
        <View style={styles.group}>
          <Text style={styles.title}>Special Deal</Text>
          <Text style={styles.date}>Nov 12 - 24</Text>
          <TouchableOpacity>
            <LinearGradientComponent style={styles.gradient}>
              <Text style={styles.button_text}>Search a room</Text>
            </LinearGradientComponent>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.notification_list}>
        <TouchableOpacity style={styles.notification_item}>
          <Text style={styles.notification_text}>
            Please rate your stay at Venice Royal, Venice, Italy.
          </Text>
          <FontAwesome5 name="angle-right" size={24} color="gray" style={{ opacity: 0.7 }} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.notification_item}>
          <Text style={styles.notification_text}>
            Your stay at Hotel Venice Royal is booked in 2 days!
          </Text>
          <FontAwesome5 name="angle-right" size={24} color="gray" style={{ opacity: 0.7 }} />
        </TouchableOpacity>
        <LinearGradient
          colors={["#FFC7A733", "#FFD57933"]}
          start={{ x: 0.1, y: 0.2 }}
          end={{ x: 0.9, y: 0.9 }}
        >
          <TouchableOpacity style={styles.notification_item}>
            <Text style={styles.notification_text}>
              You have earned 3000 points! See how to use them here.
            </Text>
            <FontAwesome5 name="angle-right" size={24} color="#FFB489" style={{ opacity: 0.7 }} />
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: STATUSBAR_HEIGHT,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  wrapper_deal: {
    width: "100%",
    // height: "100%",
  },
  image: {
    width: "100%",
    resizeMode: "cover",
  },
  group: {
    position: "absolute",
    width: "100%",
    top: 30,
    paddingHorizontal: 40,
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 12,
  },
  date: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 18,
  },
  gradient: {
    borderRadius: 10,
  },

  button_text: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    paddingVertical: 16,
  },

  notification_list: {
    width: "100%",
  },

  notification_item: {
    // width: 340,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 40,
    paddingHorizontal: 28,
    borderBottomWidth: 1,
    borderColor: "#F5F5F5",
  },
  notification_text: {
    width: 300,
    fontSize: 18,
    fontWeight: "bold",
    color: "#393939",
    lineHeight: 30,
    opacity: 0.8,
  },
});

export default Notification;
