import React, { Component } from 'react';

class LifecycleExample extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log('Constructor: Component is initialized.');
  }

  // Mounting: Called when the component is added to the DOM
  componentDidMount() {
    console.log('componentDidMount: Component mounted.');
  }

  // Updating: Called whenever state or props change
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate: Component re-rendered.');
    console.log('Previous State:', prevState.count, 'New State:', this.state.count);
  }

  // Unmounting: Called just before the component is removed from the DOM
  componentWillUnmount() {
    console.log('componentWillUnmount: Component will be removed.');
  }

  // Handler to change state
  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    console.log('Render: Component rendering.');
    return (
      <div>
        <h2>Lifecycle Demo</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={this.incrementCount}>Increment Count</button>
      </div>
    );
  }
}

export default LifecycleExample;
