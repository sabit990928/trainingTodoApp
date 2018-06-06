import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import Header from './components/Header';
import TaskInput from './components/TaskInput';
import { Button } from './components/common';

class App extends Component {
  state = { task: '', list: [] };

  onAddButtonPress = () => {
    const newList = [...this.state.list, this.state.task];
    this.setState({ list: newList, task: '' });
  }

  renderTodoItem = number => (
    <View key={number}>
      {number}
    </View>
  )

  render() {
    console.log(this.state);
    return (
      <View style={styles.container}>
        <Header />
        <View style={styles.body}>
          {/* <View style={styles.tasks}>
            {this.state.list.length === 0
              ? <Text>Not task added yet</Text>
              : this.state.list.map(this.renderTodoItem)}
          </View> */}
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
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default App;
