import React from 'react'
// import List from './List'
import './list.css'

export default function printTodo(props) {
    //const [state, setstate] = useState()
   const CheckHandler=(e)=>{
        console.log(e.target.value);
    }
    const insertdata= props.name.map( insertname=>{
            return(
                <div align="center" >
                     
               <div className="list" >
                   <input type="checkbox" onClick={CheckHandler}></input>
                <input className="form"  align="center"   type="text" id={insertname.key} value={insertname.text} onChange={e => {props.setUpdate(e.target.value,insertname.key)}}/>
               <button onClick={() => props.deleteName(insertname.key)} className="btn btn-danger">Delete</button>                
               <button onClick={() => props.Edit(insertname)} className="btn btn-warning">Edit</button>                       
               </div>

                </div>
            );
    })  
  
    return (
        <div>
            <div className="card">
        <br/> <h4>Empolyee Details</h4>
           
            <div class="card-body">
               <h1><a id ="deleteall"></a></h1> 
    {insertdata=="" && (<p id = "InsertData" style={{color:"grey"}}>Insert New-Data </p>) }
                        <p>  {insertdata} </p>
           </div>
        </div>
           <button className="btn btn-success" style={{marginRight:"10px"}}>All</button>
           <button className="btn btn-success">Active</button>
           <button className="btn btn-success">Completed</button>

        </div>
    )
}
