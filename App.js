import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import ComponentScreen from './src/screens/ComponentScreen'
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/ImageScreen';
import CounterScreen from './src/screens/CounterScreen';
import ColorScreen from './src/screens/ColorScreen';
import ChangeColor from './src/screens/ChangeColor';
import CounterScreenWithReducer from "./src/screens/CounterScreenWithReducer";


const navigator = createStackNavigator(
    {
        Home: HomeScreen,
        Components: ComponentScreen,
        List: ListScreen,
        ImageScreen: ImageScreen,
        CounterScreen: CounterScreen,
        ColorScreen: ColorScreen,
        ChangeColor: ChangeColor,
        CounterScreenWithReducer: CounterScreenWithReducer
    },
    {
        initialRouteName: "Home",
        defaultNavigationOptions: {
            title: "App"
        }
    }
);

export default createAppContainer(navigator);
