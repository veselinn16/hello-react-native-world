import React, {useEffect, Component} from 'react';
import {View, Text, Button} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

// const DetailsScreen = props => {
//   const {navigation} = props;
//   // const itemId = navigation.getParam('itemId', 'No Id');
//   // const otherParam = navigation.getParam('otherParam', 'fallback');
//   // useEffect(() => console.log(navigation.state.params));
//   return (
//     <View
//       style={{flex: 1, alignItems: 'center', justifyContent: 'space-around'}}>
//       <Text>This is the Details Screen</Text>
//       <Text>Nothing to see here!</Text>
//       <View>
//         <Button
//           title="Back to Home Page"
//           onPress={() => navigation.navigate('Home')}
//         />
//       </View>
//     </View>
//   );
// };

class DetailsScreen extends Component {
  // const {navigation} = props;
  // const itemId = navigation.getParam('itemId', 'No Id');
  // const otherParam = navigation.getParam('otherParam', 'fallback');
  // useEffect(() => console.log(navigation.state.params));
  // static navigationOptions = ({navigation}) => {
  //   return {
  //     title: navigation.getParam('otherParam', 'Nested Screen'),
  //   };
  // };
  static navigationOptions = ({navigation}) => ({
    tabBarIcon: ({focused, horizontal, tintColor}) => {
      const {routeName} = navigation.state;
      let IconComponent = Ionicons;
      let iconName;
      if (routeName === 'Details') {
        iconName = `ios-information-circle${focused ? '' : '-outline'}`;
      } else if (routeName === 'Settings') {
        iconName = `ios-options`;
      }

      return <IconComponent name={iconName} size={35} color={tintColor} />;
    },
  });

  render() {
    return (
      <View
        style={{flex: 1, alignItems: 'center', justifyContent: 'space-around'}}>
        <Text>This is the Details Screen</Text>
        <Text>Nothing to see here!</Text>
        <View>
          <Button
            title="Back to Home Page"
            onPress={() => this.props.navigation.navigate('Home')}
          />
        </View>
      </View>
    );
  }
}

export default DetailsScreen;
