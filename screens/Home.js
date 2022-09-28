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
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";
import Recommended from "~/components/Recommended";

const { width, height } = Dimensions.get("window");

function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" translucent={true} backgroundColor="transparent" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <ImageBackground
            resizeMode="cover"
            source={require("~/assets/images/home_banner.png")}
            style={styles.image}
          >
            <View style={styles.container__banner}>
              <Text style={styles.banner__title}>Find a perfect place to stay</Text>
              <View style={styles.recommended}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginBottom: 30,
                  }}
                >
                  <TextInput
                    style={styles.input}
                    selectionColor="white"
                    placeholder="Place"
                    placeholderTextColor="#D9D9D9"
                  />
                  <View>
                    <TextInput
                      style={[styles.input, styles.input__select]}
                      selectionColor="white"
                      placeholder="Guest"
                      placeholderTextColor="#D9D9D9"
                    />
                    <MaterialIcons
                      name="arrow-drop-down"
                      size={24}
                      color="#D9D9D9"
                      style={styles.arrow_drop_down}
                    />
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginBottom: 20,
                  }}
                >
                  <TextInput
                    style={styles.input}
                    selectionColor="white"
                    placeholder="Date"
                    placeholderTextColor="#D9D9D9"
                  />
                  <View>
                    <TextInput
                      style={[styles.input, styles.input__select]}
                      selectionColor="white"
                      placeholder="Nights"
                      placeholderTextColor="#D9D9D9"
                    />
                    <MaterialIcons
                      name="arrow-drop-down"
                      size={24}
                      color="#D9D9D9"
                      style={styles.arrow_drop_down}
                    />
                  </View>
                </View>
                <TouchableOpacity
                  style={styles.search__room}
                  onPress={() => navigation.navigate("ReactQuery")}
                >
                  <LinearGradient
                    colors={["#F8A170", "#FFCD61"]}
                    start={{ x: 0.1, y: 0.2 }}
                    end={{ x: 0.9, y: 0.9 }}
                    style={styles.search__room}
                  >
                    <Text style={styles.search__text}>Search a room</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
        </View>
        <Recommended />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: width,
    height: 570,
    // justifyContent: "center",
  },
  container__banner: {
    width: "100%",
    height: "100%",
  },
  banner__title: {
    fontSize: 34,
    width: 350,
    color: "white",
    flex: 1,
    marginTop: 96,
    marginLeft: 18,
  },
  recommended: {
    flex: 2,
    marginTop: 20,
    backgroundColor: "#393939",
    paddingHorizontal: 18,
    paddingVertical: 42,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  input: {
    backgroundColor: "#706f6f",
    width: 240,
    height: 50,
    borderRadius: 10,
    border: false,
    padding: 14,
    fontSize: 16,
    color: "#D9D9D9",
  },
  input__select: {
    width: 100,
  },
  arrow_drop_down: {
    position: "absolute",
    lineHeight: 50,
    right: 8,
    height: 50,
  },
  search__room: {
    height: 70,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 10,
  },
  search__text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  // Component Recommended
});

export default Home;
