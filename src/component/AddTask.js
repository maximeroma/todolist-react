import React, { Component } from 'react';
import ShowList from './ShowList';
import {v4} from 'node-uuid';
import 'semantic-ui-css/semantic.min.css';
import Filter from './Filter';


class AddTask extends Component {
  constructor(){
    super();
    this.state = {
      term: '',
      items : [],
      filter: 'ALL',
    };
    this._onSubmitTask = this._onSubmitTask.bind(this);
    this._changeTaskStatus = this._changeTaskStatus.bind(this);
    this._onChangeFilter = this._onChangeFilter.bind(this);
  }

  _onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      term: '',
      items: [...this.state.items,{id: v4(), status : false, value: this.state.term }]

    });
  }

  _changeTaskStatus(id){
    this.setState({
      items : this.state.items.map(item => {
        if(item.id === id){
          return {value : item.value, status : !item.status, id : item.id}
        }
        return item;
      }),
    });
  }

  _onChangeFilter(e, data){
    this.setState({
      filter : data.value
    });
  }

  componentDidMount(){
    let storage = JSON.parse(localStorage.getItem('state'));
    if (this.state.items.length === 0 && storage !== null){
      this.setState({
        items : storage
      })
    }
  }

  componentDidUpdate(){
    if(this.state.items.length !== 0){
      localStorage.setItem('state', JSON.stringify(this.state.items));
    }
  }

  _onChange = (e) => {
    this.setState({term: e.target.value});
    console.log(this.state.term);
  }

  render(){
    return(
      <div className="ui container">
      <h1 className="Todolist">Todolist en React </h1>
      <form className="ui form" onSubmit={this._onSubmitTask}>
      <div className="field">
        <label htmlFor="addTask">Ajouter une tache</label>
        <input name="addTask" id="addTask" type="text" value={this.state.term} onChange={this._onChange} />
        </div>
        <button className="ui positive button center" type="submit">Envoyer</button>
        <Filter onChangeFilter={this._onChangeFilter}  />
      </form>

      <ShowList items={this.state.items} changeStatus={this._changeTaskStatus} filter={this.state.filter} />
      </div>
    );
  }
}
export default AddTask;
