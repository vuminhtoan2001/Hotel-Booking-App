import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
  Image,
  ScrollView,
  StatusBar,
  TextInput,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import InputSearch from "~/components/InputSearch";
import Recommended from "~/components/Recommended";
import Deals from "~/components/Deals";

function SearchInitial({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" translucent={true} backgroundColor="transparent" />
      <InputSearch navigation={navigation} />
      <View style={styles.wrapper_recommended}>
        <LinearGradient
          colors={["#FFC7A733", "#FFD57933"]}
          start={{ x: 0.1, y: 0.2 }}
          end={{ x: 0.9, y: 0.9 }}
          style={styles.search__room}
        >
          <Recommended />
        </LinearGradient>
      </View>
      <Deals />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    // justifyContent: "center",
  },
  wrapper_recommended: {
    marginTop: 40,
    height: 322,
    backgroundColor: "white",
  },
});

export default SearchInitial;
