import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import ItemRecommended from "~/components/ItemRecommended";

const data = [
  {
    id: 1,
    name: "Lux Hotel With a Pool",
    place: "Dubai",
    price: 700,
    rate: 4.5,
    image: require("~/assets/images/card_medium1.png"),
  },
  {
    id: 2,
    name: "Sunset Hitek",
    place: "Venice",
    price: 800,
    rate: 4.2,
    image: require("~/assets/images/card_medium2.png"),
  },
  {
    id: 3,
    name: "Lux Hotel With a Pool",
    place: "Dubai",
    price: 700,
    rate: 4.5,
    image: require("~/assets/images/card_medium1.png"),
  },
  {
    id: 4,
    name: "Sunset Hitek",
    place: "Venice",
    price: 800,
    rate: 4.2,
    image: require("~/assets/images/card_medium2.png"),
  },
];

function Recommended() {
  const renderItem = ({ item }) => <ItemRecommended item={item} />;
  return (
    <View style={styles.container__recommended}>
      <Text style={styles.recommended__title}>Recommended</Text>
      {/* <ScrollView>
        <View style={styles.card__medium}>
          <View style={styles.card__item}>
            <ItemRecommended />
          </View>
          <View style={styles.card__item}>
            <Image
              style={styles.card__item__img}
              source={require("~/assets/images/card_medium2.png")}
            />
          </View>
        </View>
      </ScrollView> */}
      <FlatList
        // style={styles.card__medium}
        data={data}
        renderItem={renderItem}
        horizontal={true}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container__recommended: {
    // height: 400,
    flex: 1,
    paddingBottom: 10,
  },
  recommended__title: {
    padding: 18,
    marginTop: 20,
    fontSize: 22,
    color: "#393939",
    fontWeight: "bold",
  },
  card__medium: {
    flexDirection: "row",
    marginLeft: 18,
  },
});

export default Recommended;
