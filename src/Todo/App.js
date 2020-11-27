import React, { Component } from 'react'
import Form from './Form'
// import {validator} from 'validator';


export default class App extends Component {
    constructor() {
        super()

        this.state = {
            name: "",
            nameError: "",
            Email: "",
            EmailError: "",
            gender: "",
            genderError: "",
            Age:[8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,
                35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]
        }
    }
    valid() {
        let  regex = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";
        console.log("valid");
        if (this.state.name == "" ) {
            this.setState({ nameError: "* Please Enter name" })
        }
        else if (this.state.name.length < 3) {
            this.setState({ nameError: "* Enter minimum three charchter" })
        }
        else if  (this.state.Email =="") {
            this.setState({ EmailError: "* Enter Email" })
        }
        else if  (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(this.state.Email)) {
            // validator.isEmail(!this.state.Email);
            this.setState({ EmailError: "* Enter Valid Email" })
        }
        else if (this.state.gender == "") { this.setState({ genderError: "Plese select gender" }) }
  console.log(this.state);
    }
    SubmitHandler = () => {
        if (this.valid()) {
            alert("Form has been Submited")
        }
        console.log(this.state.gender);
    }
    genderHandler = (e) => {
        this.setState(
            {
                ...this.state.gender, [e.target.name]: e.target.value,
                genderError: ""
            }
        )
    }
    SelectAge=(e)=>{
        console.log(e.target.value);
    }
    render() {
       // console.log(this.state.Age);
        return (
            <div align="center">

                <label>Name:</label>
                <input type="text" placeholder="Enter Name" onChange={(e) => { this.setState({ name: e.target.value, nameError: "", }) }}></input>
                <p style={{ color: "red", fontSize: "12px", marginLeft: "10px" }}>{this.state.nameError}</p>
                <label>Email:</label>
                <input type="text" placeholder="Enter Email" onChange={(e) => { this.setState({ Email: e.target.value, EmailError: "", }) }}></input>
                <p style={{ color: "red", fontSize: "12px", marginLeft: "10px" }}>{this.state.EmailError}</p>

                <label>Gender:</label>
                <input type="radio" name="gender" value="male" onChange={this.genderHandler}/>Male
                <input type="radio" name="gender" value="female" onChange={this.genderHandler} />Female
                <input type="radio" name="gender" value="other" onChange={this.genderHandler} />Other
                <p style={{ color: "red", fontSize: "12px", marginLeft: "10px" }}>{this.state.genderError}</p>
                <label>Age:</label>

                <select onChange={this.SelectAge}>
                    {this.state.Age.map((data,i)=>{return(
                        <option value={data}>{data}</option>
                    )})}
                    </select>


                <br />
                <button onClick={this.SubmitHandler}>Submit</button>

            </div>
        )
    }
}
