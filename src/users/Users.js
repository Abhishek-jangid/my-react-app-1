import React, { Component } from 'react';
import User from './User';

class Users extends Component{
      state = {
            users : [
                  {name:'John', age:20, sex:'MM'},
                  {name:'Miley', age:30, sex:'F'},
                  {name:'Cirus', age:40, sex:'M'},
            ],
            title : 'Users title',
            name : 'firestorm',
            posp : 'awesome',
            namo : 'happy happy',
      }

      makeMeYounger = () => {
            console.log('clicked')
            const newState = this.state.users.map((user)=>{
                  const tempUser = user;
                  tempUser.age -=10;
                  return tempUser;
            })
            this.setState({
                  newState
            })
            console.log(this.state.users)
      }

      change_state = (new_name) => {
            console.log('change_state clicked')
            this.setState({
                  name: new_name
            })
      }

      change_name_from_input = (event) => {
            this.setState({
                  posp:event.target.value
            })
      }

      change_name_from_input_v2 = (event) => {
            this.setState({
                  namo:event.target.value
            })
      }

      render() {
            return(
                  <div>
                  <button onClick={this.makeMeYounger}>Make me younger</button>
                  <br/>
                  <h1>{this.state.title}</h1>
                  {
                        this.state.users.map((user) => {
                              return <User age={user.age} sex={user.sex}>{user.name}</User>
                        })
                  }
                  <br></br>
                  <button onClick={() => this.change_state('awesome firestorm')}>{this.state.name}</button>
                  <button onClick={this.change_state.bind(this,'amazing firestorm')}>{this.state.name}</button>
                  <input type="text" onChange={this.change_name_from_input} value={this.state.posp}/>
                  <input type="text" onChange={this.change_name_from_input_v2} value={this.state.namo}/>
                  <br/>
                  <h2>{this.state.posp}</h2>
                  <h1>{this.state.namo}</h1>
                  </div>
            )
      }
}

export default Users;
