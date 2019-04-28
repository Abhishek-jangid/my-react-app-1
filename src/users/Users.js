import React, { Component } from 'react';
import User from './User';

class Users extends Component{
      state = {
            users : [
                  {name:'John', age:20, sex:'M'},
                  {name:'Miley', age:30, sex:'F'},
                  {name:'Cirus', age:40, sex:'M'},
            ],
            title : 'Users title'
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

      render() {
            return(
                  <div>
                  <button onClick={this.makeMeYounger}>Make me younger</button>
                  <br/>
                  <h1>{this.state.title}</h1>
                  {
                        this.state.users.map((user) => {
                              return <User age={user.age} sex={user.sex}>{user.age}</User>
                        })
                  }
                  </div>
            )
      }
}

export default Users;
