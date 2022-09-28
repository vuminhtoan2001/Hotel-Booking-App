import { LinearGradient } from "expo-linear-gradient";

function LinearGradientComponent({ children, style }) {
  return (
    <LinearGradient
      colors={["#F8A170", "#FFCD61"]}
      start={{ x: 0.1, y: 0.2 }}
      end={{ x: 0.9, y: 0.9 }}
      //   { justifyContent: "center", alignItems: "center", flexDirection: "row" }
      style={[{ justifyContent: "center", alignItems: "center", flexDirection: "row" }, style]}
    >
      {children}
    </LinearGradient>
  );
}

export default LinearGradientComponent;
