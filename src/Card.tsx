import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Gauge from './Gauge';

type Props = {
  value: number;
  color: string;
  title: string;
};

const Card = ({value, color, title}: Props) => (
  <View style={[styles.gauge, {borderColor: color}]}>
    <Gauge value={value} color={color} />
    <Text style={styles.title}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  gauge: {
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 2,
    margin: 10,
  },
  title: {
    color: 'white',
    fontSize: 26,
    fontWeight: '800',
    padding: 10,
  },
});

export default Card;
