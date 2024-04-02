import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Group from "../screens/Group";

const Stack = createNativeStackNavigator();

const headerOptions = {
  headerShown: false,
};

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={headerOptions} />
      <Stack.Screen name="Group" component={Group} options={headerOptions} />
    </Stack.Navigator>
  );
}

export default StackNavigator;
