import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

function HeaderTitleRight() {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>RESET</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {},
  text: {
    fontSize: 16,
    color: "#616167",
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: "#F5F5F5",
    borderRadius: 8,
  },
});

export default HeaderTitleRight;
