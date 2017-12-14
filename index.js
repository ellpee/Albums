// Import a library to help create a comment
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

// Create a component
// How to make your header text dynamic?
// By passing a prop, you'll be able to reconfigure the header
// 1. Idenfity the variable or value you would like dynamic (header.js file)
// 2. Provide a reference to the props from the parent (header.js file)
// 3. Make sure the parent provide the props that the dynamic area is expecting

const App = () => (
  <View>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);

// Render it to the device
AppRegistry.registerComponent('albums', () => App);
