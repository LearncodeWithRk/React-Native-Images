import React from 'react';
import {
  StyleSheet,
  View,
  Image,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{ width: 250, height: 250 }}
          resizeMode="contain"
          source={require('./assets/icon.png')}
         // source={{ uri: 'https://res.cloudinary.com/learncodewithrk/image/upload/v1630059554/Rohit/rohit_elhts8.png' }}
        />
      </View>
    );
  }
}