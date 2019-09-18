import React from 'react';

// Components
import {View, FlatList, Text} from 'react-native';
import Accordion from './Accordion';

// Styles
import masterStyleSheet from '../../styles';
const styles = masterStyleSheet.postsScreen;

const UserPosts = ({posts}) =>
  posts.length > 0 ? (
    <FlatList
      data={posts}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item}) => <Accordion title={item.title} data={item.body} />}
    />
  ) : (
    <View style={styles.postsWarningContainer}>
      <Text style={styles.postsWarningText}>No Posts Found!</Text>
    </View>
  );

export default UserPosts;
