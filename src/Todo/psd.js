import React, { Component } from 'react'

export default class psd extends Component {
  
      state = {
             isPasswordShown:false,
             enterpsd:"",
             SetError:"",
             Set:""
             }


     ShowPsd=()=>{
         
         this.setState({
             isPasswordShown:!this.state.isPasswordShown
            })
        }
        PasswordHandler=(e)=>{
            console.log(e.target.value);
            let statedata =this.state.enterpsd

            
            this.setState({ enterpsd:e.target.value,SetError:"",Set:""})

             if(statedata.length<6){
                  this.setState({SetError:"* Enter valid password"})
             }
             else if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(statedata)){
                console.log("check");
                this.setState({
                     SetError:"*Enter valid password"
                 })
                 
             }
             else {
                this.setState({Set:"*Strong Password"})
            }

    }
    render() {
        return (
            <div>
                <label>Password:</label>
                <input 
                type={(this.state.isPasswordShown)?"text":"password"}
                 placeholder="Enter Password" onChange={this.PasswordHandler}></input>
                <input type="checkbox" onClick={this.ShowPsd} style={{marginLeft:"7px"}}/>show password
                   <div>
                    {this.state.enterpsd.length<6 && (
                    <p style={{color:"red"}}>{this.state.SetError}</p>)}
                     {this.state.Set && (
                    <p style={{color:"green"}}>{this.state.Set}</p>)}
                    </div>
            </div>
        )
    }
}
