import { Provider } from "react-redux";
import AppNavigator from "./src/navigators/AppNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { store } from "./src/redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </Provider>
  );
}
