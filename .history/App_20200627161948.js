import React from 'react';
import { StyleSheet, View, Image, Text, ScrollView } from 'react-native';


const App = () => {
  return (
    <>
        <View style={{flexDirection:'row'}}>
            <Image  style={styles.banner}
                    source={require('./assets/img/bg.jpg')} />
        </View>
        <View style={styles.contenedor}>
            <Text style={styles.titulo}>Que hacer en Pari</Text>
            <ScrollView>
                <View>
                  <Image  style={styles.banner}
                          source={require('./assets/img/actividad1.jpg')} />
                </View>
                <View>
                  <Image  style={styles.banner}
                          source={require('./assets/img/actividad2.jpg')} />
                </View>
                <View>
                  <Image  style={styles.banner}
                          source={require('./assets/img/actividad3.jpg')} />
                </View>
                <View>
                  <Image  style={styles.banner}
                          source={require('./assets/img/actividad4.jpg')} />
                </View>
                <View>
                  <Image  style={styles.banner}
                          source={require('./assets/img/actividad5.jpg')} />
                </View>
            </ScrollView>
        </View>
    </>
  );
};

const styles = StyleSheet.create({
  banner:{
    height:250,
    flex:1
  },
  titulo:{
    fontWeight:'bold',
    fontSize:24,
    marginVertical:20
  },
  contenedor:{
    marginHorizontal: 10
  }
});

export default App;
