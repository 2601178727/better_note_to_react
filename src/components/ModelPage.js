import React, {Component} from 'react';
import Modal from './Modal_two';
import './modal.css';

export default class ModelPage extends Component{
  constructor (props) {
    super(props);
    this.state = {show: false};
  }
  handleClick = () => {
    this.setState({show: !this.state.show});
    setTimeout(() => {
      this.setState({show: !this.state.show});
    }, 1000);
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>显示</button>
        {
          this.state.show ? 
          <Modal>
            <div className="modal-container">
              <div className="modal-content">
                <h1>显示</h1>
              </div>
            </div>
          </Modal> : null
        }
      </div>
    )
  }
}