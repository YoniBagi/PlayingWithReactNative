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
import TextScreen from "./src/screens/TextScreen";
import BoxesScreen from "./src/screens/BoxesScreen";


const navigator = createStackNavigator(
    {
        Home: HomeScreen,
        Components: ComponentScreen,
        List: ListScreen,
        ImageScreen: ImageScreen,
        CounterScreen: CounterScreen,
        ColorScreen: ColorScreen,
        ChangeColor: ChangeColor,
        CounterScreenWithReducer: CounterScreenWithReducer,
        TextScreen: TextScreen,
        Boxes: BoxesScreen
    },
    {
        initialRouteName: "Home",
        defaultNavigationOptions: {
            title: "App"
        }
    }
);

export default createAppContainer(navigator);
