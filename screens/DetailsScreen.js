import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

// Components
import Heading from '../components/general/Heading';
import UserData from '../components/details/UserData';
import WarningMessage from '../components/general/WarningMessage';
import ResourceButton from '../components/details/ResourceButton';

// Icons
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Action Creators
import {removeUser} from '../actions';

//Styles
import masterStyleSheet from '../styles';
const styles = masterStyleSheet.detailsScreen;

const DetailsScreen = ({navigation, user, removeUser}) => {
  const navigateBackToUsers = () => {
    removeUser();
    // return back to Users Screen
    navigation.navigate('Users');
  };

  return (
    <View style={styles.detailsScreen}>
      <Heading
        text={user ? `Details about ${user.name}` : 'Unknown User'}
        extraStyles={{
          backgroundColor: '#222',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      />

      {user ? (
        <Fragment>
          <UserData user={user} />
          <View style={styles.buttonsContainer}>
            <ResourceButton resource="posts" navigation={navigation} />
            <ResourceButton resource="todos" navigation={navigation} />
          </View>
          {/* REFACTOR TO USERBUTTON COMPONENT */}
          <View style={styles.goBackBtnContainer}>
            <TouchableOpacity
              style={styles.goBackBtn}
              onPress={navigateBackToUsers}>
              <Icon name="arrow-left-bold" style={styles.goBackBtnIcon} />
              <Text style={styles.goBackBtnText}>Back to users</Text>
            </TouchableOpacity>
          </View>
        </Fragment>
      ) : (
        <WarningMessage />
      )}
    </View>
  );
};

DetailsScreen.navigationOptions = ({navigation}) => ({
  tabBarIcon: ({focused, tintColor}) => {
    let iconName = `ios-information-circle${focused ? '' : '-outline'}`;

    return <Ionicons name={iconName} size={30} color={tintColor} />;
  },
});

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  removeUser: () => dispatch(removeUser()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DetailsScreen);
