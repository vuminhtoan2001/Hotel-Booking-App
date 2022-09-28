import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BottomTab from "./BottomTab";
import Hotel from "~/screens/Hotel";
import Room from "~/screens/Room";
import Checkout from "~/screens/Checkout";
import CheckoutSecond from "~/screens/CheckoutSecond";
import CheckoutLast from "~/screens/CheckoutLast";
import ReactQuery from "~/screens/ReactQuery";

const Stack = createNativeStackNavigator();

function MainRoute() {
  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen name="ReactQuery" component={ReactQuery} />
      <Stack.Screen name="Main" component={BottomTab} options={{ headerShown: false }} />
      <Stack.Screen name="Hotel" component={Hotel} options={{ headerShown: false }} />
      <Stack.Screen name="Room" component={Room} options={{ headerShown: false }} />
      <Stack.Screen name="Checkout" component={Checkout} options={{ headerShown: false }} />
      <Stack.Screen
        name="CheckoutSecond"
        component={CheckoutSecond}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="CheckoutLast" component={CheckoutLast} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default MainRoute;
