import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
} from 'react-native';
import Card from './Card';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.title}>
          React Native{' '}
          <Text style={[styles.title, styles.titleLight]}>
            - Animated SVG Gauges (arcs)
          </Text>
        </Text>

        <View style={styles.row}>
          <Card value={86} color="#ED745F" title="Silver" />
          <Card value={17} color="#59B5F8" title="Gold" />
        </View>
        <View style={styles.row}>
          <Card value={39} color="#A0F2BA" title="Copper" />
          <Card value={77} color="#7438B1" title="Platinum" />
        </View>
        <View style={styles.row}>
          <Card value={5} color="#EBCA63" title="Aluminum" />
          <Card value={98} color="#E93323" title="Palladium" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    marginHorizontal: 20,
  },
  title: {
    color: 'white',
    fontSize: 40,
    fontWeight: '800',
    paddingHorizontal: 20,
    paddingVertical: 80,
  },
  titleLight: {
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
    fontSize: 42,
  },
});

export default App;
