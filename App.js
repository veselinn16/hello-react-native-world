import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  FlatList,
} from 'react-native';

import styles from './styles/styles';

const App = () => {
  const [query, setQuery] = useState('');
  const [count, setCount] = useState('0');

  useEffect(() => {
    console.log(query);
  }, [query]);

  const text = useRef(null);

  const changeNumber = newCount => {
    +newCount / 2 && setCount(newCount);
  };

  const changeCount = bool => {
    bool ? setCount(`${+count + 1}`) : setCount(`${+count - 1}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>My first React-native App</Text>
      </View>

      <View style={styles.boxContainer}>
        <View style={styles.box}>
          <Text>1</Text>
        </View>
        <View style={{...styles.box, backgroundColor: '#f6ce4c'}}>
          <Text>2</Text>
        </View>
        <View style={{...styles.box, backgroundColor: '#fbeab2'}}>
          <Text ref={text}>3</Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TextInput
          style={{
            borderColor: 'red',
            backgroundColor: '#fff',
            borderRadius: 3,
          }}
          placeholder="Change number"
          value={query}
          blurOnSubmit={true}
          onSubmitEditing={({nativeEvent}) => changeNumber(nativeEvent.text)}
          onChangeText={query => setQuery(query)}
        />
        <Text>*Note: Only numbers are valud inputs</Text>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => changeCount(false)}>
            <Text style={styles.button}>Decrease Number</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => changeCount(true)}>
            <Text style={styles.button}>Increase Number</Text>
          </TouchableOpacity>
        </View>
        <Text>{count}</Text>
      </View>

      <FlatList
        style={{flex: 5}}
        data={[
          {text: 'List Item 1'},
          {text: 'List Item 2'},
          {text: 'List Item 3'},
          {text: 'List Item 4'},
          {text: 'List Item 5'},
          {text: 'List Item 6'},
          {text: 'List Item 7'},
          {text: 'List Item 8'},
          {text: 'List Item 9'},
        ]}
        renderItem={({item, index}) => {
          return <Text id={index}>{item.text}</Text>;
        }}
        keyExtractor={(item, index) => index.toString()}
      />

      <View style={{flex: 0.5, justifyContent: 'center', alignItems: 'center'}}>
        <Image style={{width: 50, height: 50}} source={require('./pic.png')} />
      </View>
    </View>
  );
};

export default App;
