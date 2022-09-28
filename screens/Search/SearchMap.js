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
  Dimensions,
} from "react-native";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import MapView from "react-native-maps";

import InputSearch from "~/components/InputSearch";
import FilterLabel from "~/components/FilterLabel";
import ItemSearch from "~/components/ItemSearch";
import Filter from "~/screens/Search/Filter";
import RateButton from "~/components/RateButton";

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

function SearchList({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);

  const renderItem = ({ item }) => <ItemSearch item={item} />;

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" translucent={true} backgroundColor="transparent" />
      <InputSearch navigation={navigation} />
      <FilterLabel navigation={navigation} setModalVisible={setModalVisible} listView={true} />
      {/* <FlatList
        style={styles.list_hotel}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      /> */}
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 14.058324,
            longitude: 108.277199,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1,
          }}
        />
        <ScrollView
          horizontal={true}
          style={{ position: "absolute", width: "100%", bottom: 10, left: 18 }}
        >
          <View style={{ marginTop: 10, marginRight: 18 }}>
            <Image
              style={{ width: 197, height: 117, borderRadius: 10, resizeMode: "contain" }}
              source={require("~/assets/images/hotel_large_picture.png")}
            />
            <Text
              style={{
                position: "absolute",
                bottom: 10,
                left: 10,
                fontSize: 16,
                color: "#fff",
                fontWeight: "bold",
              }}
            >
              Beach Resort Lux
            </Text>
            <RateButton style={{ position: "absolute", top: -10, right: 0 }} rate="4.5" />
          </View>
          <View style={{ marginTop: 10, marginRight: 18 }}>
            <Image
              style={{ width: 197, height: 117, borderRadius: 10, resizeMode: "contain" }}
              source={require("~/assets/images/hotel_large_picture.png")}
            />
            <Text
              style={{
                position: "absolute",
                bottom: 10,
                left: 10,
                fontSize: 16,
                color: "#fff",
                fontWeight: "bold",
              }}
            >
              Beach Resort Lux
            </Text>
            <RateButton style={{ position: "absolute", top: -10, right: 0 }} rate="4.5" />
          </View>
          <View style={{ marginTop: 10, marginRight: 18 }}>
            <Image
              style={{ width: 197, height: 117, borderRadius: 10, resizeMode: "contain" }}
              source={require("~/assets/images/hotel_large_picture.png")}
            />
            <Text
              style={{
                position: "absolute",
                bottom: 10,
                left: 10,
                fontSize: 16,
                color: "#fff",
                fontWeight: "bold",
              }}
            >
              Beach Resort Lux
            </Text>
            <RateButton style={{ position: "absolute", top: -10, right: 0 }} rate="4.5" />
          </View>
        </ScrollView>
      </View>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <Filter setModalVisible={setModalVisible} />
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
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

export default SearchList;
