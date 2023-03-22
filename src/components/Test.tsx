import React from 'react';
import { Dimensions, Text } from 'react-native';
const screen = Dimensions.get('window'); 

export class SettingsScreen extends React.Component {
    state = {
      num: 100,
    };
    render(): React.ReactNode {
      return (
        <Son color="rbule"></Son>
      );
    }
  }

  class Son extends React.Component<{color?: any}> {
    state = {
      num: 100,
    };
    render(): React.ReactNode {
      return (
        <Text>子组件{this.props.color}</Text>
      );
    }
  }