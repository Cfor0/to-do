
import './App.css';
import { Component } from 'react';
import List from './components/List';

class App extends Component {
  // tracking userInput: using form or an input field
  // onChange is probably needed
  // onSubmit is needed
  // Probably need a prevent default
  // state to keep the information the same and only change when I need it to change

  constructor(props) {
    super(props)

    this.state = {
      noteText: '',
      notes: []
    }
  }

  onChange = (event) => {
    this.setState({
      noteText: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.setState({
      noteText: '',
      notes: [...this.state.notes, this.state.noteText]
    })
    console.log(this.state.notes)
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.onSubmit}>
          <input value={this.state.noteText} onChange={this.onChange} placeholder='Type here' />

        </form>
        <List notes = {this.state.notes} />
      </div>
    );
  }
}

export default App;
