import React, { Component } from 'react';
import './MessageBox.css';

class MessageBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.MessageHandler = this.MessageHandler.bind(this);
  }

  changeHandler(e) {
    this.setState({ message: e.target.value });
  }

  submitHandler(e) {
    e.preventDefault();
    this.props.sendMessage(this.state.message);
    this.setState({ message: '' });
  }

  MessageHandler(e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      this.props.sendMessage(this.state.message);
      this.setState({ message: '' });
    }
  }

  render() {
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <form className="sendmessageform">
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          onKeyDown={this.MessageHandler}
          placeholder="Type your message"
          rows={2}
          onChange={this.changeHandler}
          value={this.state.message}
        />
        <button
          type="submit"
          className="sendbutton"
          onClick={this.submitHandler}
        >
          Send
        </button>
      </form>

    );
  }
}

export default MessageBox;
