import React from 'react';
import { StyleSheet, View, Image } from 'react-native';


const App = () => {
  return (
    <>
      <View>
          <Image source={require('./assets/img/bg.jpg')} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  banner:{
    height:250
  }
});

export default App;
