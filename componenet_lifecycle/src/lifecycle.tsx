import React, { Component } from "react";

type IState = {
  count: number;
};

type IProps = {};

class LifeCycleDemo extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { count: 0 };
    console.log("constructor: component being created");
  }

  static getDerivedStateFromProps(props: IProps, state: IState) {
    console.log("getDerivedStateFromProps: sync state with props if needed");
    return null; // No state update here
  }

  componentDidMount() {
    console.log("componentDidMount: Component mounted");
  }

  shouldComponentUpdate(nextProps: IProps, nextState: IState) {
    console.log("shouldComponentUpdate:just before dom is updated");
    return true; // Allow re-render
  }

  componentDidUpdate() {
    console.log("componentDidUpdate: Component is updated");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount: Component removed");
  }

  render() {
    console.log("render: UI rendering");
    return (
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h2>React Lifecycle Demo</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}

export default LifeCycleDemo;
