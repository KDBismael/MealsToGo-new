import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { theme } from "./infrastructure/theme";
import { RestaurantsScreen } from "./features/restaurants/screen";
import { SafeArea } from "./components/utility/safe-area.components";
import { RestaurantsProvider } from "./services/restaurants/restaurants.context";
import { LocationProvider } from "./services/location/location.context";

export default function App() {
  const [oswaldLoaded] = useLato({
    Oswald_400Regular,
  });
  const [latoLoaded] = useOswald({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) return null;

  const TAB_ICON = {
    Restaurants: "md-restaurant",
    Map: "md-map",
    Settings: "md-settings",
  };

  const createScreenOptions = ({ route }: { route: any }) => {
    const iconName = TAB_ICON[route.name];
    return {
      tabBarIcon: ({ size, color }) => (
        <Ionicons name={iconName} size={size} color={color} />
      ),
      tabBarActiveTintColor: "tomato",
      tabBarInactiveTintColor: "gray",
    };
  };

  function SettingsScreen() {
    return (
      <SafeArea>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text>Settings!</Text>
        </View>
      </SafeArea>
    );
  }
  function MapScreen() {
    return (
      <SafeArea>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text>Map!</Text>
        </View>
      </SafeArea>
    );
  }

  const Tab = createBottomTabNavigator();

  return (
    <>
      <ThemeProvider theme={theme}>
        <LocationProvider>
          <RestaurantsProvider>
            <NavigationContainer>
              <Tab.Navigator screenOptions={createScreenOptions}>
                <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
                <Tab.Screen name="Map" component={MapScreen} />
                <Tab.Screen name="Settings" component={SettingsScreen} />
              </Tab.Navigator>
            </NavigationContainer>
          </RestaurantsProvider>
        </LocationProvider>
        <ExpoStatusBar style="auto" />
      </ThemeProvider>
    </>
  );
}
