import React, { Component } from "react";
import { View, TextInput, Button } from "react-native";

class TaskInput extends Component {
  state = {
    username: "demo",
    password: "demo"
  };

  handlePress = event => {
    const username = this.state.username;
    console.log(username);
  };

  handleAddButtonPress = value => this.setState({ username: value });

  render() {
    return (
      <View style={{ padding: 15 }}>
        <TextInput
          placeholder="Add some task"
          onChangeText={this.handleAddButtonPress}
          value={this.state.username}
        />
        <Button title="Add" onPress={this.handlePress} />
      </View>
    );
  }
}

export default TaskInput;
