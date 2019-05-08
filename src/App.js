import React, {Component} from 'react';
import './App.css';
import Users from './users/Users';
import Parent from './components/parentToChild/parent'
import Child from './components/parentToChild/child'
class App extends Component {

      state = {
            posp : 'Placeholdr title',
            pp: 'parent',
            grandd: 'old grand direct',
            grandi: 'old grand indirect',
      }

      grandParentDoesSomething = (newTitle) => {
            this.setState({
                  posp:newTitle,
            })
      }

      soSometihng = (newT) =>{
            this.setState({
                  pp:newT,
            })
      }

      doSomethingGranddirect = (newgranf) => {
            this.setState({
                  grandd:newgranf
            })
      }
      doSomethingGrandindirect = (newgranf) => {
            this.setState({
                  grandi:newgranf
            })
      }

  render(){
        return (
              <div>
                  <Users/>
                  <Child doSomethingGrand={this.doSomethingGranddirect.bind(this,'new grand direct')} title={this.state.grandd}/>
                  <br/>
                  <br/>
                  <Parent doSomethingGrand={this.doSomethingGrandindirect.bind(this,'new grand indirect')} title={this.state.grandi}/>
              </div>
            );
      }
}

export default App;
