import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { AutoComplete } from 'material-ui';
import getMuiTheme        from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider   from 'material-ui/styles/MuiThemeProvider';

class Welcome extends Component {
  render() {
    return <h1>Hello, {this.props.name}, how are you</h1>;
  }
}

class NewsList extends Component {
  render() {
    return <div><h2> Second Div {this.props.testing} </h2></div>;
      
  }
}

class MaterialUIAutocomplete extends Component {
  constructor(props) {
    super(props);
    this.onUpdateInput = this.onUpdateInput.bind(this);
    this.state = {
      dataSource : [],
      inputValue : ''
    }
  }

  onUpdateInput(inputValue) {
  }

  render() {
    return <MuiThemeProvider muiTheme={getMuiTheme()}>
      <AutoComplete
        dataSource    = {this.state.dataSource}
        onUpdateInput = {this.onUpdateInput} />
      </MuiThemeProvider>
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Truthify</h1>
        </header>
        <MaterialUIAutocomplete/>
        <Welcome name="Sara" />
        <NewsList testing="Test"/>
      </div>

    );
  }
}



export default App;
