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
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { items, num } = this.state;
    const newItems = items.concat([ `new-${num}` ])
    const newNum = num + 1;
    this.setState({
      items: newItems,
      num: newNum,
    });
  }

  render() {
    const { items } = this.state;
    const itemComponents = items.map(
      item =>
        <div key={item}>
          {item}
        </div>
    );
    return (
      <div>
        <button onClick={this.handleClick} />
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={500}
        >
          {itemComponents}
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}

render(
  <AnimationDemo />,
  document.getElementById('app')
);
