import React, { Component } from 'react';
import AddTask from './AddTask';

class App extends Component {
  constructor(){
    super();
    this.state =
      {
        tasks : [],
      }
    this._addTaskOnSubmit = this._addTaskOnSubmit.bind(this);
  }
  _addTaskOnSubmit(task){
    this.state({
      tasks:[
        ...
        tasks,
      ];
    })
  }

  render(){
    console.log(this.state.tasks);
    return (
      <div>
        <AddTask addTask={addTaskOnSubmit.bind(this)} />
      </div>
    )
  }
}
