import React, {useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TextInput} from 'react-native-gesture-handler';

const DetailsScreen = ({navigation}) => (
  <View style={{flex: 1, alignItems: 'center', justifyContent: 'space-around'}}>
    <TextInput></TextInput>
    <Text>Nothing to see here!</Text>
    <View>
      <Button
        title="Back to Home Page"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  </View>
);

DetailsScreen.navigationOptions = ({navigation}) => ({
  tabBarIcon: ({focused, tintColor}) => {
    const {routeName} = navigation.state;
    let IconComponent = Ionicons;
    let iconName;
    if (routeName === 'Details') {
      iconName = `ios-information-circle${focused ? '' : '-outline'}`;
    } else if (routeName === 'Settings') {
      iconName = `ios-options`;
    }

    return <IconComponent name={iconName} size={30} color={tintColor} />;
  },
});

export default DetailsScreen;
