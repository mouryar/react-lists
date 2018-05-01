import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Validation from './ValidationComponent/Validation';
import Char from './CharComponent/Char'

class App extends Component {

  state = {
     userInput : ''
  }

  onChangeTestField(event){
    this.setState(this.setState(
      {
        userInput: event.target.value
      }
    )
    );
  }

  deleteCharacter(event, index){
      const chars = this.state.userInput.split('');
      chars.splice(index, 1);
      const updatedText = chars.join('');
      this.setState({
        userInput: updatedText
      });
  }

  render() {

    const charList = this.state.userInput.split('').map((ch, index) => {
        return <Char 
                character={ch}
                key={index}
                click={(event) => this.deleteCharacter(event, index)}/>;
    });
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <input type='text' value={this.state.userInput} onChange={event => this.onChangeTestField(event)}/>
          <span>length: {this.state.userInput.length}</span>
          <div>
              <Validation
              namelength={this.state.userInput.length}/>
          </div>
          <div>
            {charList}
          </div>
        </p>
      </div>
    );
  }
}

export default App;
