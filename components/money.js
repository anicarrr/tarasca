import React from "react";
import { Text } from 'react-native';
import { thousandsSeparator } from '../utils/utils';

const Money = (props) => { 
  const value = props.children;
  const color = value >= 0 ? 'green' : 'red';
  const fontSize = props.fontSize;
  const extraStyle = props.style;
  const moneySign = value >= 0 ? '$' : '-$';
  const amount = thousandsSeparator(Math.abs(value));
  return (
    <Text style={[{ fontSize, ...extraStyle, color }]}>
      {moneySign}{amount}
    </Text>
  );
};

export default Money;
