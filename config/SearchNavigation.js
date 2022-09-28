import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SearchInitial from "~/screens/Search";
import SearchList from "~/screens/Search/SearchList";
import SearchMap from "~/screens/Search/SearchMap";
import Filter from "~/screens/Search/Filter";
import HeaderTitle from "~/components/HeaderTitle";
import HeaderTitleRight from "~/components/HeaderTitleRight";

const Stack = createNativeStackNavigator();

function SearchNavigation() {
  return (
    <Stack.Navigator initialRouteName="SearchInitial">
      <Stack.Screen
        name="SearchInitial"
        component={SearchInitial}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="SearchList" component={SearchList} options={{ headerShown: false }} />
      <Stack.Screen name="SearchMap" component={SearchMap} options={{ headerShown: false }} />
      <Stack.Screen
        name="Filter"
        component={Filter}
        options={
          (({ navigation, route }) => ({
            headerLeft: () => {
              return <HeaderTitle navigation={navigation} title="Filter" />;
            },
            headerTitle: (props) => {},
            headerRight: () => {
              return <HeaderTitleRight navigation={navigation} title="Filter" />;
            },
          }),
          { tabBarShowLabel: false })
        }
      />
    </Stack.Navigator>
  );
}

export default SearchNavigation;
