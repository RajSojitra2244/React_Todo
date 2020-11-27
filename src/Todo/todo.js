
import React, { Component } from 'react';
// import PrintTodo from './printTodo'
import './list.css';
// import Button from './button'
// import abc from '../Htask/list'

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: [],
      currentName: {
        text: '',
        key: '',
        checked: false,
      },
      isError: false,
      checkArray: [],
      status: 'all'
    };
    this.setUpdate = this.setUpdate.bind(this);
    // console.log(this.state)
  }

  handleInput = (e) => {
    this.setState({
      currentName: {
        text: e.target.value,
        key: Date.now(),
        checked: false,
      },
      isError: false,
    });
  };
  onclickbutton = (e) => {
    e.preventDefault();
    if (!this.state.currentName.text == ' ') {
      const alldata = this.state.currentName;
      if (alldata !== '') {
        const newdata = [...this.state.name, alldata];
        this.setState({
          name: newdata,
          currentName: {
            text: '',
            key: '',
            checked: false,
          },
          isError: false,
        });
      }
    } else {
      this.setState({ isError: true });
    }
  };

  deleteName = (keyfrominsert) => {
    // console.log(keyfrominsert)
    const filterName = this.state.name.filter(
      (delname) => delname.key !== keyfrominsert
    );
    this.setState({
      name: filterName,
    });
  };
  setUpdate(text, key) {
    const itemname = this.state.name;
    itemname.map((item) => {
      if (item.key === key) {
        item.text = text;
      }
    });
    this.setState({
      name: itemname,
    });
  }
//   CheckHandler = (item) => {
//     let abc = this.state.name.findIndex((data) => {
//       if (item.key == data.key) {
//         return data;
//       }
//     });

//     const aa = this.state.name.filter((data) => {
//       if (item.key == data.key) {
//         this.state.name[abc].checked = !data.checked;

//         return data;
//       }
//     });
//     this.setState({
//       checkArray: [...this.state.checkArray, aa],
//     });
//   };
  CheckHandler = (item) => {
      console.log(item);
      let index = this.state.name.findIndex((data) => {
        if (item.key == data.key) {
          return data;
        }
      });
    const dummyList = this.state.name;
    dummyList[index].checked = !dummyList[index].checked;
    this.setState({
      ...this.state,
      name: dummyList,
    });
  };

  all = () => {
    this.setState({
        status: 'all'
    })
}
active = () => {
    this.setState({
        status: 'active'
    })
}
complete = () => {
    this.setState({
        status: 'complete'
    })
}
clearComplete = () => {
    let newTodos = this.state.name.filter((item) => {
        console.log(item);
        return (item.checked === false)
    })
    this.setState({
        name: newTodos
    })
}

  render() {
    console.log(this.state.name);
    let final = [];

    let leftItem = this.state.name.filter((item) => {
        return item.checked === false
    }).length;

    if (this.state.status === 'all') {
        final = this.state.name
    }
    else if (this.state.status === 'active') {
        final = this.state.name.filter((item) => {
            return (item.checked === false)
        })
    }
    else if (this.state.status === 'complete') {
        final = this.state.name.filter((item) => {
            return (item.checked === true)
        })
        if(final =="")
          {
          this.all();
        }
    }
    else {
        console.log("ok");
    }
console.log(this.state.name);
    return (    
      <div align="center">
        <h1>BlueSoft Infotech</h1>
        <br />
        <form onSubmit={this.onclickbutton}>
          <div>
            <input
              type="text"
              id="input"
              class="form"
              placeholder="Enter name"
              value={this.state.currentName.text}
              onChange={this.handleInput}
            ></input>
            <button id="btnsub" type="submit" className="btn btn-info">
              Add
            </button>
            <br />

            {this.state.isError && <p style={{ color: 'red' }}> *Required!!</p>}
          </div>
        </form>
        <br />
        {/* <PrintTodo setUpdate={this.setUpdate} name={this.state.name} update={this.update} deleteName={this.deleteName} Edit={this.Edit} /> */}
        {final &&
          final.map((data, i) => {
            return (
              <div align="center">
                <div className="list">
                  <input
                    type="checkbox"
                    checked={data.checked}
                    onClick={() => this.CheckHandler(data, i)}
                  ></input>
                  <input
                    className="form"
                    align="center"
                    type="text"
                    id={data.key}
                    value={data.text}
                    onChange={(e) => {
                      this.setUpdate(e.target.value, data.key);
                    }}
                  />
                  <button
                    onClick={() => this.deleteName(data.key)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                  {/* <button onClick={() => this.Edit(insertname)} className="btn btn-warning">Edit</button>                        */}
                </div>
              </div>
            );
          })}
        <p>
          {leftItem} left item
          <button className="btn btn-success" style={{ marginRight: '10px' }} onClick={this.all}>
            All
          </button>
          <button className="btn btn-success" style={{ marginRight: '10px' }} onClick={this.active}>
            Active
          </button>
          <button className="btn btn-success" style={{ marginRight: '10px' }} onClick={this.complete}>
            Completed
          </button>
           <button className="btn btn-success" style={{ marginRight: '10px' }} onClick={this.clearComplete}>
            Clear Completed
          </button>
        </p>
         
      </div>
    );
  }
}
