import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import CustomComponent from "./src/screens/ComponentsScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Custom: CustomComponent
  },
  {
    initialRouteName: "Custom",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
