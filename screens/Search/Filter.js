import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useState } from "react";
import { Entypo } from "@expo/vector-icons";

import Switch from "~/components/Switch";
import LinearGradient from "~/components/LinearGradient";
import HeaderTitle from "~/components/HeaderTitle";
import HeaderTitleRight from "~/components/HeaderTitleRight";

function Filter({ setModalVisible, fadeOut }) {
  const [isBreakIncluded, setIsBreakIncluded] = useState(true);
  const [isDeals, setIsDeals] = useState(false);
  const [isOnlyShow, setIsOnlyShow] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <HeaderTitle title="Filter" onPress={fadeOut} />
      </View>
      <View style={styles.wrapper}>
        <View style={styles.filter_list}>
          <View style={styles.filter_item}>
            <Text style={styles.title}>Your budget</Text>
            <View style={styles.selection}>
              <Text style={styles.text}>Select</Text>
              <Entypo style={styles.icon} name="chevron-right" size={24} color="#999999" />
            </View>
          </View>
          <View style={styles.filter_item}>
            <Text style={styles.title}>Start rating</Text>
            <View style={styles.selection}>
              <Text style={styles.text}>Select</Text>
              <Entypo style={styles.icon} name="chevron-right" size={24} color="#999999" />
            </View>
          </View>
          <View style={styles.filter_item}>
            <Text style={styles.title}>Review score</Text>
            <View style={styles.selection}>
              <Text style={styles.text}>Select</Text>
              <Entypo style={styles.icon} name="chevron-right" size={24} color="#999999" />
            </View>
          </View>
          <View style={styles.filter_item}>
            <Text style={styles.title}>Meals</Text>
            <View style={styles.selection}>
              <Text style={styles.text}>Select</Text>
              <Entypo style={styles.icon} name="chevron-right" size={24} color="#999999" />
            </View>
          </View>
          <View style={styles.filter_item}>
            <Text style={styles.title}>Type</Text>
            <View style={styles.selection}>
              <Text style={styles.text}>Select</Text>
              <Entypo style={styles.icon} name="chevron-right" size={24} color="#999999" />
            </View>
          </View>
          <View style={styles.filter_item}>
            <Text style={styles.title}>Breakfast Included</Text>
            <View style={styles.selection}>
              <Switch
                customStyle={styles.switch}
                value={isBreakIncluded}
                onChange={() => setIsBreakIncluded((previousState) => !previousState)}
              />
            </View>
          </View>
          <View style={styles.filter_item}>
            <Text style={styles.title}>Deals</Text>
            <View style={styles.selection}>
              <Switch
                customStyle={styles.switch}
                value={isDeals}
                onChange={() => setIsDeals((previousState) => !previousState)}
              />
            </View>
          </View>
          <View style={styles.filter_item}>
            <Text style={styles.title}>Only show available</Text>
            <View style={styles.selection}>
              <Switch
                customStyle={styles.switch}
                value={isOnlyShow}
                onChange={() => setIsOnlyShow((previousState) => !previousState)}
              />
            </View>
          </View>
        </View>
        <LinearGradient style={styles.gradient}>
          <TouchableOpacity style={styles.button_apply} onPress={fadeOut}>
            <Text style={styles.text_apply}>Apply</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "white",
  },
  wrapper: {
    flex: 1,
    paddingHorizontal: 18,
    backgroundColor: "white",
    justifyContent: "space-between",
  },
  filter_list: {},
  filter_item: {
    height: 70,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  selection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#393939",
  },

  text: {
    fontSize: 20,
    color: "#999999",
    marginRight: 10,
  },

  icon: {
    marginTop: 3,
  },
  switch: {
    marginRight: 4,
  },

  gradient: {
    borderRadius: 10,
    marginBottom: 20,
  },

  button_apply: {
    paddingVertical: 16,
  },

  text_apply: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffffff",
  },
});
export default Filter;
