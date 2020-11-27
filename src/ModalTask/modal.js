import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ModalHeader from "react-bootstrap/esm/ModalHeader";
import { ModalBody, ModalTitle } from "react-bootstrap";

export default class Disk extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
      input: [{ name: "", lastname: "", email: "", phone: "" }],
      errors: {},
      list: [],
      
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;

    this.setState({
      name: [([event.target.name] = event.target.value)],
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.validate()) {
      // console.log(this.state.input);
      // let input = {};
      // input["name"] = "";
      // input["lastname"]="";
      // input["email"] = "";
      // input["phone"] = "";
      // this.setState({input:input});
      //alert('Demo Form is submited');
    }
  }
  validate() {
    let input = this.state.input;
    let errors = {};
    let isValid = true;

    if (!input["name"]) {
      isValid = false;
      errors["name"] = "Please enter your name.";
    }

    if (!input["email"]) {
      isValid = false;
      errors["email"] = "Please enter your email Address.";
    }

    if (typeof input["email"] !== "undefined") {
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(input["email"])) {
        isValid = false;
        errors["email"] = "Please enter valid email address.";
      }
    }

    if (!input["phone"]) {
      isValid = false;
      errors["phone"] = "Please enter your phone number.";
    }

    if (typeof input["phone"] !== "undefined") {
      var pattern = new RegExp(/^[0-9\b]+$/);
      if (!pattern.test(input["phone"])) {
        isValid = false;
        errors["phone"] = "Please enter only number.";
      } else if (input["phone"].length != 10) {
        isValid = false;
        errors["phone"] = "Please enter valid phone number.";
      }
    }

    this.setState({
      errors: errors,
    });

    return isValid;
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
  render() {
    {
      this.state && this.state.input && console.log(this.state.input);
    }
    return (
      <div align="center">
        <Button variant="danger" onClick={this.handleShow}>
          Clicked Button
        </Button>
        <Modal show={this.state.show} >
          <h1>VAlidation React js</h1>
          <form onSubmit={this.handleSubmit}>
            <div class="form-group">
              <label for="name">Name:</label>
              <input
                type="text"
                name="name"
                value={this.state.list.name}
                onChange={this.handleChange}
                class="form-control"
                placeholder="Enter name"
                id="name"
              />

              <div className="text-danger">{this.state.errors.name}</div>
            </div>
            <div class="form-group">
              <label for="lastname">lastName:</label>
              <input
                type="text"
                name="lastname"
                value={this.state.list.lastname}
                onChange={this.handleChange}
                class="form-control"
                placeholder="Enter lastname"
                id="lastname"
              />

              <div className="text-danger">{this.state.errors.lastname}</div>
            </div>

            <div class="form-group">
              <label for="email">Email Address:</label>
              <input
                type="text"
                name="email"
                value={this.state.list.email}
                onChange={this.handleChange}
                class="form-control"
                placeholder="Enter email"
                id="email"
              />

              <div className="text-danger">{this.state.errors.email}</div>
            </div>

            <div class="form-group">
              <label for="Phone">Phone:</label>
              <input
                type="text"
                name="phone"
                value={this.state.list.phone}
                onChange={this.handleChange}
                class="form-control"
                placeholder="Enter phone"
                id="email"
              />

              <div className="text-danger">{this.state.errors.phone}</div>
            </div>

            <input type="submit" value="Submit" class="btn btn-success" />
          </form>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        <div>
          <table border="1px:solid:black" width="100%">
            <thead>
              <tr>
                <th>Name</th>
                <th>lastName</th>
                <th>email</th>
                <th>phone</th>
              </tr>
            </thead>
            {this.state.input.map((item,i) => {
            
               return (
               <>
                  <tr key={i}>
                     <td>{item.name}</td>
                     <td>{item.lastname}</td>
                     <td>{item.email}</td>
                    <td>{item.phone}</td>
                  </tr>
                </>
              );
            })}
          </table>
        </div>
      </div>
    );
  }
}