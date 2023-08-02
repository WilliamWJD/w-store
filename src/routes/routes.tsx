import {
  createBottomTabNavigator,
  BottomTabBarButtonProps,
} from "@react-navigation/bottom-tabs";
import { Home } from "../pages/Home";
import { NavigationContainer } from "@react-navigation/native";
import { useTheme } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { ShopCar } from "../pages/ShopCar";
import { Favorites } from "../pages/Favorites";
import { ProductDetail } from "../pages/ProductDetail";

const { Navigator, Screen } = createBottomTabNavigator();

export function Routes() {
  const { colors, fonts } = useTheme();

  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
          tabBarInactiveTintColor: colors.gray[500],
          tabBarActiveTintColor: colors.green[500],
          tabBarLabelStyle: { fontSize: 12, fontFamily: fonts.heading },
          tabBarStyle: {
            backgroundColor: colors.white,
            borderTopWidth: 0,
            height: 60,
            paddingBottom: 10,
            paddingTop: 5,
          },
        }}
      >
        <Screen
          name="Início"
          component={Home}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="home" size={30} color={color} />
            ),
          }}
        />
        <Screen
          name="Favoritos"
          component={Favorites}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="favorite" size={30} color={color} />
            ),
          }}
        />
        <Screen
          name="Carrinho"
          component={ShopCar}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="shopping-cart" size={30} color={color} />
            ),
          }}
        />
        <Screen
          name="ProductDetail"
          component={ProductDetail}
          options={{ tabBarButton: () => null }}
        />
      </Navigator>
    </NavigationContainer>
  );
}
