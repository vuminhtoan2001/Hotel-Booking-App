import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
  StatusBar,
  TextInput,
  Modal,
  Animated,
  Dimensions,
} from "react-native";
import { useState, useRef } from "react";
import { LinearGradient } from "expo-linear-gradient";

import InputSearch from "~/components/InputSearch";
import FilterLabel from "~/components/FilterLabel";
import ItemSearch from "~/components/ItemSearch";
import Filter from "~/screens/Search/Filter";

const data = [
  {
    id: 8,
    name: "Hotal Vecine Royal",
    description: "San Marco, 01 miles from center",
    price_text1: "Standard double room",
    price_text2: "No prepayment",
    price: 830,
    image: require("~/assets/images/hotel_venice.png"),
  },
  {
    id: 7,
    name: "Hotel Splendid",
    description: "San Marco, 01 miles from center",
    price_text1: "Standard double room",
    price_text2: "No prepayment",
    price: 830,
    image: require("~/assets/images/hotel_splendid.png"),
  },
  {
    id: 6,
    name: "Hotal Vecine Royal",
    description: "San Marco, 01 miles from center",
    price_text1: "Standard double room",
    price_text2: "No prepayment",
    price: 830,
    image: require("~/assets/images/hotel_venice.png"),
  },
  {
    id: 5,
    name: "Hotel Splendid",
    description: "San Marco, 01 miles from center",
    price_text1: "Standard double room",
    price_text2: "No prepayment",
    price: 830,
    image: require("~/assets/images/hotel_splendid.png"),
  },
  {
    id: 1,
    name: "Hotal Vecine Royal",
    description: "San Marco, 01 miles from center",
    price_text1: "Standard double room",
    price_text2: "No prepayment",
    price: 830,
    image: require("~/assets/images/hotel_venice.png"),
  },
  {
    id: 2,
    name: "Hotel Splendid",
    description: "San Marco, 01 miles from center",
    price_text1: "Standard double room",
    price_text2: "No prepayment",
    price: 830,
    image: require("~/assets/images/hotel_splendid.png"),
  },
  {
    id: 3,
    name: "Hotal Vecine Royal",
    description: "San Marco, 01 miles from center",
    price_text1: "Standard double room",
    price_text2: "No prepayment",
    price: 830,
    image: require("~/assets/images/hotel_venice.png"),
  },
  {
    id: 4,
    name: "Hotel Splendid",
    description: "San Marco, 01 miles from center",
    price_text1: "Standard double room",
    price_text2: "No prepayment",
    price: 830,
    image: require("~/assets/images/hotel_splendid.png"),
  },
];
const { width, height } = Dimensions.get("window");

function SearchList({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const renderItem = ({ item }) => <ItemSearch item={item} />;
  const fadeAnim = useRef(new Animated.Value(height)).current;

  const fadeIn = () => {
    setModalVisible(true);
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {
      setModalVisible(false);
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" translucent={true} backgroundColor="transparent" />
      <InputSearch navigation={navigation} />
      <FilterLabel navigation={navigation} setModalVisible={setModalVisible} fadeIn={fadeIn} />
      <FlatList
        style={styles.list_hotel}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />

      <Modal
        animationType="none"
        transparent={true}
        visible={modalVisible}
        style={{ backgroundColor: "red" }}
      >
        <Animated.View
          style={[
            styles.fadingContainer,
            {
              // Bind opacity to animated value
              width: width,
              height: height,
              position: "absolute",
              // top: fadeAnim,
              transform: [
                {
                  translateX: fadeAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 500],
                  }),
                },
              ],
              backgroundColor: "red",
            },
          ]}
        >
          <Filter setModalVisible={setModalVisible} fadeOut={fadeOut} />
        </Animated.View>
      </Modal>
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

  list_hotel: {
    marginBottom: 16,
  },
});

export default SearchList;
