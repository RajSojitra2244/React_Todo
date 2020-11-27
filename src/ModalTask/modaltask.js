import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Moment from 'react-moment';

import ModalHeader from 'react-bootstrap/esm/ModalHeader';
import { ModalBody, ModalTitle } from 'react-bootstrap';

class modaltask extends Component {
  constructor() {
    super();
    this.state = {
      show: true,
      date: "",
    };
  }
  handleShow = () => {
    this.setState({
      show: !this.state.show,
    });
  };
  handleClose = () => {
    this.setState({
      show: !this.state.show,
    });
  };
  handlesubmit = () => {
    this.setState({
      show: !this.state.show,  
    });
  };
  DateHandler = (e) => {
    console.log(e.target.value);
    this.setState({ date: e.target.value });
  };
  render() {
    // const date = newDate()
    // const aaa=moment(date)
    // console.log(aaa);
    return (
      <div align="center">
        <Button variant="danger" onClick={this.handleShow}>
          Clicked Button
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {' '}
            Date:
            <input type="date" onChange={this.DateHandler} />
            {/* <Moment format="YYYY/MM/DD">            
                 1976-04-19T12:59-0500
            </Moment>
            <Moment format="YYYY/MM/DD">{post.date}</Moment> */}
          </Modal.Body>

          <Modal.Footer>
            <Button variant="warning" onClick={this.handlesubmit}>
              Submit
            </Button>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

       <div class="accordion" id="accordionExample">
          <div class="card">
            <div class="card-header" id="headingOne">
              <h2 class="mb-0">
                <button
                  class="btn btn-link"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  {this.state.date}
                </button>
              </h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default modaltask;
