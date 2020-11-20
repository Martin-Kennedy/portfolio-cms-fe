import React from 'react';
import ReactDOM from 'react-dom';

const root = document.getElementById('root');

class Button extends React.Component {
  render () {
    return <button onClick={() => this.setState({ liked: true })}>
        Like
      </button>
  }
}



ReactDOM.render(<Button/>, root);
