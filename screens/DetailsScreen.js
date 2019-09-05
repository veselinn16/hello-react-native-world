import React, {useEffect, useState} from 'react';
import {View, Text, Button} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';

import baseURL from '../utils/constants';

const DetailsScreen = ({navigation}) => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const logQuery = query => {
    console.log(query);
    setQuery('');
  };

  const getMovies = async query => {
    // console.log(baseURL + 't=' + query);
    // fetch(baseURL + query).then(data => console.log(data));
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts/10');
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }

    setQuery('');
  };
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          backgroundColor: 'rgba(0,0,0, 0.2)',
          alignItems: 'center',
          padding: 5,
        }}>
        <TextInput
          style={{
            borderWidth: 1,
            paddingTop: 4,
            paddingBottom: 4,
            borderStyle: 'solid',
            borderColor: '#333',
            backgroundColor: '#fff',
            borderRadius: 3,
            width: '70%',
          }}
          placeholder="Search for movie"
          value={query}
          onSubmitEditing={({nativeEvent}) => getMovies(nativeEvent.text)}
          onChangeText={query => setQuery(query)}
        />
      </View>
      <View style={{flex: 5}}>
        {movies.length > 0 ? (
          <Text>These are the Movies</Text>
        ) : (
          <Text>The movies will appear here!</Text>
        )}
      </View>
      <View style={{flex: 1}}>
        <Button
          title="Back to Home Page"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </View>
  );
};

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
