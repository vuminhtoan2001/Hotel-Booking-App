import { View, TextInput, StyleSheet } from "react-native";

function Input({ style, ...props }) {
  return <TextInput style={[styles.input, style]} {...props} />;
}

const styles = StyleSheet.create({
  input: {
    width: "100%",
    heigh: 50,
    borderRadius: 10,
    backgroundColor: "#DFDEDE",
    paddingVertical: 14,
    paddingHorizontal: 15,
    color: "gray",
    marginBottom: 18,
  },
});

export default Input;
