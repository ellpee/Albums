// Important libraries
import React from 'react';
import { Text, View } from 'react-native';

// Make component
// Add a argument of props to my text dynamic.
// props is a javascript property

const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
    <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

// Flexbox Property Names
// justifyContent
// Values: 'flex-end' (Push to bottom), 'center' (Push to center left),
// 'flex-start' (Align to Left Top: Default)
// alignItems
// Values: 'flex-start', 'center', 'flex-end'
// shadowOffset: The dimensions of the shadow, the height, the width, etc.
// shadowColor: The color of your shadowColor
// shadowOpacity: The darkness of your shadow

const styles = {
  viewStyle: {
    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
};
// Make the component available to other parts of the app
export default Header;
