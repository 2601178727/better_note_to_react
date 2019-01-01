import React, {Component} from 'react';
import Modal from './Modal';
import './modal.css';

export default class ModelPage extends Component{
  constructor (props) {
    super(props);
    this.state = {show: false};
  }
  handleClick = () => {
    this.setState({show: !this.state.show});
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