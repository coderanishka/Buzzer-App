import * as React from 'react';
import { View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import AppHeader from '../components/AppHeader';
import SoundButton from '../components/SoundButton';

export default class HomeScreen extends React.Component {
  render(){
    return(
      <View>
        <AppHeader/>
        <SoundButton color={this.props.navigation.getParam('color')}/>
        
      </View>
    )
  }
}
