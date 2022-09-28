import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";
function HeaderTitle({ style, title, ...passProps }) {
  return (
    <View>
      <TouchableOpacity style={[styles.title, style]} {...passProps}>
        <Entypo name="chevron-left" size={30} color="black" />
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingLeft: 14,
    borderBottomWidth: 1,
    borderColor: "#DFDEDE",
    paddingVertical: 10,
  },
  text: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#393939",
    marginLeft: 16,
  },
});

export default HeaderTitle;
