import React, { Component } from 'react';
import { render } from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class AnimationDemo extends Component {
  constructor() {
    super();
    this.state = {
      items: [
        'old-0',
        'old-1',
        'old-2',
      ],
      num: 0,
      toggle: true,
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleAdd() {
    const { items, num } = this.state;
    const newItems = items.concat([ `new-${num}` ])
    const newNum = num + 1;
    this.setState({
      items: newItems,
      num: newNum,
    });
  }

  handleToggle() {
    const { toggle } = this.state;
    this.setState({
      toggle: !toggle,
    });
  }

  render() {
    const { items, toggle } = this.state;
    const itemComponents = items.map(
      item =>
        <div key={item}>
          {item}
        </div>
    );
    const toggleComponent = toggle
      ? <div>toggle item</div>
      : null;

    return (
      <div>
        <button onClick={this.handleAdd}>
          ADD!!
        </button>
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionAppear={true}
          transitionEnterTimeout={300}
          transitionLeaveTimeout={500}
        >
          {itemComponents}
        </ReactCSSTransitionGroup>
        <button onClick={this.handleToggle}>
          TOGGLE!!
        </button>
        <ReactCSSTransitionGroup
          transitionName="toggle"
          transitionAppear={true}
          transitionEnterTimeout={300}
          transitionLeaveTimeout={500}
        >
          {toggleComponent}
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}

render(
  <AnimationDemo />,
  document.getElementById('app')
);
