import { WelcomeScreen } from "../src/screens/WelcomeScreen";
import { SignUpScreen } from "../src/screens/SignUpScreen";
import { SignInScreen } from "../src/screens/SignInScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
export function Navigator(){
    return(
      <Stack.Navigator initialRouteName="Welcome"
      screenOptions={{
        title: '',
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
      }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Sign up" component={SignUpScreen} />
        <Stack.Screen name="Sign in" component={SignInScreen} />
      </Stack.Navigator>
      )
    }