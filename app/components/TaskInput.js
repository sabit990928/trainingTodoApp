import React from 'react';
import { View, TextInput, Button } from 'react-native';

const TaskInput = ({
  label, value, onChangeText, placeholder,
}) => {
  const { inputStyle, buttonStyle, containerStyle } = styles;

  return (
    <View style={containerStyle}>
      <TextInput
        placeholder={placeholder}
        autoCorrect={false}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
      />

    </View>
  );
};

const styles = {
  inputStyle: {
    color: '#000',
    // justifyContent: 'flex-end',
    // alignItems: 'flex-end',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 1,
  },
  buttonStyle: {
    flex: 2,
    paddingLeft: 20,
    fontSize: 18,
  },
  containerStyle: {
    flex: 1,
    // alignItems: 'flex-end',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    height: 40,
  },
};

export default TaskInput;
