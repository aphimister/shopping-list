import React from "react";
import "./App.css";
import NumberList from "./components/List";
class App extends React.Component {
  state = {
    numbers: [],
    inputText: "",
  };
  changeHandler = (event) => {
    this.setState({ inputText: event.target.value });
  };
  submitHandler = (event) => {
    event.preventDefault();
    this.setState({
      numbers: [...this.state.numbers, this.state.inputText],
      inputText: "",
    });
  };
  render() {
    console.log(this.state.inputText);
    return (
      <div>
        <form id="inputCont" onSubmit={this.submitHandler}>
          <input
            type="text"
            id="input"
            onChange={this.changeHandler}
            value={this.state.inputValue}
          ></input>
          <input type="submit" value="Submit"></input>
        </form>
        <NumberList numbers={this.state.numbers} id="numbersList"></NumberList>
      </div>
    );
  }
}

export default App;
