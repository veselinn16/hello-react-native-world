import React from 'react';
import {connect} from 'react-redux';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

// Action creator
import {getResource} from '../../utils/helpers';

// Styles
import masterStyleSheet from '../../styles';
const styles = masterStyleSheet.detailsScreen;

const ResourceButton = ({resource, getResource, navigation}) => {
  const capitalizeString = () => resource[0].toUpperCase() + resource.slice(1);

  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          getResource(resource);
          navigation.navigate(capitalizeString());
        }}>
        <Text style={styles.buttonText}>{`See ${resource}`}</Text>
        <Icon
          name={resource === 'posts' ? 'notebook' : 'note'}
          style={styles.buttonIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

const mapDispatchToProps = dispatch => ({
  getResource: resource => dispatch(getResource(resource)),
});

export default connect(
  null,
  mapDispatchToProps,
)(ResourceButton);
