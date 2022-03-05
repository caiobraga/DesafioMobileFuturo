
import PeopleScreen from "../screens/peopleScreen"

const Routes = createAppContainer(
    createDrawerNavigator({
      Home: PeopleScreen,
      About: Page2,
    })
  );
  
  export default Routes;