import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import Header from './components/Header';
import TaskInput from './components/TaskInput';
import { Button } from './components/common';

class App extends Component {
  state = { task: '', list: [] };

  onAddButtonPress = () => {
    console.log('asdf', this.state.list);
    const newList = [...this.state.list, this.state.task];
    this.setState({ list: newList, task: '' });
  }

  renderTodoItem = ({ item }) => (
    <Text key={item}>
      {item}
    </Text>
  )

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <View style={styles.body}>
          <FlatList
            data={this.state.list}
            renderItem={this.renderTodoItem}
          />
          <View style={styles.taskInputContainer}>
            <TaskInput
              placeholder="Add some task"
              value={this.state.task}
              onChangeText={text => this.setState({ task: text })}
            />
            <Button onPress={this.onAddButtonPress}>Add</Button>
          </View>
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  body: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    // alignItems: 'flex-end',
  },
  tasks: {
    flex: 1,
  },
  taskInputContainer: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10,
  },
};

export default App;
