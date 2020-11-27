import React, { Component } from 'react'
import './Abc.css'
// import {validator} from 'validator';


export default class list extends Component {
    constructor() {
        super()
        this.state = {
            name: "",
            nameError: "",
            Age: [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34,
                35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
            SelectedAge: "",
            AgeError: "",
            checked:false,
            AllData:[]
                        
        }
    }
    valid() {
        console.log("valid");
        if (this.state.name == "") {
            this.setState({ nameError: "* Please Enter name" })
        }
        else if (this.state.name.length < 3) {
            this.setState({ nameError: "* Enter minimum three charchter" })
        }
        else if (this.state.SelectedAge == "") {
            this.setState({ AgeError: "* Select Age" })
        }else{   
            {
                this.setState({
                    AllData:[...this.state.AllData,
                        {
                            Name:this.state.name,
                             Age:this.state.SelectedAge,
                            status:this.state.checked
                    }                
                    ]
                })
             }
            return true
        }

    }
    SubmitHandler = () => {
             if(this.valid() == true){ 
                 this.setState({
                     name:"",
                     SelectedAge:"",


                 })
             }
    }

    SelectAge = (e) => {
        this.setState({ SelectedAge: e.target.value, AgeError: "" })
        if(e.target.value >= 18){
            // this.setState({ unchecked:"disabled"})
            this.setState({ checked:true})
        }
        if(e.target.value < 18){
            // this.setState({ unchecked:"disabled"})
            this.setState({ checked:false})
        }
    }
    handleChange=(e)=>{
        this.setState({
            checked : !this.state.checked
        })
        
        // if (this.state.checked ==  "checked"){
        //     console.log('null');
        //     this.setState({ checked: "" })
        // }
        // else if (this.state.checked ==  ""){
        //     console.log('checked');
        //     this.setState({ checked: "checked"})
        // }
    }




    render() {
         console.log(this.state.AllData);
        return (
            <div align="center">

                <label>Name:</label>
                <input type="text" placeholder="Enter Name" onChange={(e) => { this.setState({ name: e.target.value, nameError: "", }) }} value={this.state.name}></input>
                <p style={{ color: "red", fontSize: "12px", marginLeft: "10px" }}>{this.state.nameError}</p>
                <label>Age:</label>

                <select onChange={this.SelectAge}>
                    <option value="">----Select Age----</option>
                    {this.state.Age.map((data, i) => {
                        return (
                            <option  value={data}>{data}</option>
                        )
                    })}
                </select>
               <p style={{ color: "red", fontSize: "12px", marginLeft: "10px" }}>{this.state.AgeError}</p>
               
              
               <label class="switch">
                { this.state.SelectedAge >= 18  &&  ( <label>Marital status:<input type="checkbox" onClick={  this.handleChange }    
                 checked= {this.state.checked} ></input> </label>) }
                 { this.state.SelectedAge < 18  &&  ( <label>Marital status:<input type="checkbox"    
                 checked= {this.state.checked} ></input> </label>) }


                {/* <span class="slider round"></span>   */}
                </label>
                <br />
                <button onClick={this.SubmitHandler}>Submit</button><br/><br/>
                {!(this.state.AllData=="") &&<table border="5px solid black">
                    <tr>
                        <th colSpan="2">Registred Data</th>

                        </tr>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>

                    </tr>
                {this.state.AllData.map((data)=>{ return(

                    
                      
                        <tr>
                            <td>{data.Name}</td>
                            <td>{data.Age}</td>
                        </tr>
                  
                )})}
            </table>}
            </div>
        )
    }
}
