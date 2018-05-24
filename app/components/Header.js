import React from 'react';
import { View, Text } from 'react-native';

const styles = {
  viewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    height: 70,
    backgroundColor: '#CD853F',
    shadowColor: '#8B4513',
    shadowOffset: { width: 0, height: 9 },
    shadowOpacity: 0.9,
  },
  textStyle: {
    fontWeight: 'bold',
    color: '#800000',
    fontSize: 30,
    marginBottom: 10,
  },
};

const Header = () => {
  const { viewStyle, textStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>Todo App</Text>
    </View>
  );
};

export default Header;

// const Todo = ({ label, completed }) => {
//   return (
//     <View>
//       <Text>
//         { label }
//       </Text>
//       <Text>
//         {completed ? 'Done' : 'Should do'}
//       </Text>
//     </View>
//   );
// };
