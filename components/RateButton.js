import { Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import LinearGradientComponent from "~/components/LinearGradient";

function RateButton({ rate, style }) {
  return (
    <LinearGradientComponent style={[styles.view, style]}>
      <Text style={styles.view_text}>{rate}</Text>
      <AntDesign name="star" size={12} color="#FFF1DC" />
    </LinearGradientComponent>
  );
}
const styles = StyleSheet.create({
  view: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    height: 23,
    width: 50,
  },

  view_text: {
    fontSize: 12,
    color: "#fff",
    fontWeight: "bold",
    marginRight: 4,
  },
});
export default RateButton;
