import { Component } from "react";

class ProfileClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      reverseCount: 0,
      userInfo: {},
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/patel885");
    const json = await data.json();
    this.setState({ userInfo: json });

    this.timer = setInterval(() => {
      console.log("Timer is running");
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.count !== prevState.count) {
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("Timer is Stop");
  }

  render() {
    return (
      <>
        <div>
          <h1>Profile Class Component</h1>
          <h2>Name: {this.props.name}</h2>
          <h3>Count: {this.state.count}</h3>
          <button
            onClick={() => {
              this.setState({
                count: this.state.count + 1,
              });
            }}
          >
            Increment
          </button>
          <button
            onClick={() => {
              this.setState({
                count: this.state.count - 1,
              });
            }}
          >
            Decrement
          </button>
        </div>
        <div>
          <img src="https://avatars.githubusercontent.com/u/102655735?v=4" />
          <h4>{this.state.userInfo.login}</h4>
        </div>
      </>
    );
  }
}

export default ProfileClass;
