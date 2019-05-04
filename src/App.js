import React, {Component} from 'react';
import './App.css';
import Users from './users/Users';
import Parent from './components/parentToChild/parent'

class App extends Component {

      state = {
            posp : 'Placeholder title',
      }

      parentDoesSomething = (newTitle) => {
            this.setState({
                  posp:newTitle,
            })
      }

  render(){
        return (
              <div>
                  <Users/>
                  <Parent doSomethingGrand={this.parentDoesSomething.bind(this,'new title')} posp={this.state.posp}/>
              </div>
            );
      }
}

export default App;
