import { TouchableOpacity, Text, StyleSheet } from "react-native";
import LinearGradientComponent from "~/components/LinearGradient";

function PrimaryButton({ text, style, ...passProps }) {
  return (
    <LinearGradientComponent style={[styles.gradient, style]}>
      <TouchableOpacity style={styles.button_apply} {...passProps}>
        <Text style={styles.text_apply}>{text}</Text>
      </TouchableOpacity>
    </LinearGradientComponent>
  );
}

const styles = StyleSheet.create({
  gradient: {
    borderRadius: 10,
    marginBottom: 20,
    marginHorizontal: 18,
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

export default PrimaryButton;
