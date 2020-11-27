import React, { Component } from 'react'
import Form from './form'
import Button from './button'
import List from './list'

export default class finalTodo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            lastTodo: [],
            status: 'all'
        }
    }

    formTodo = (inputValue) => {
        this.setState({
            lastTodo: [...this.state.lastTodo, { value: inputValue, complete: false }]
        })
    }

    deleteRecord = (index) => {
        const listAfterDelete = this.state.lastTodo.filter((item, idx) => {
            return index !== idx;
        })
        this.setState({
            lastTodo: listAfterDelete
        })
    }

    checkValue = (index) => {
        const dummyList = this.state.lastTodo
        dummyList[index].complete = !dummyList[index].complete
        this.setState({
            ...this.state,
            lastTodo: dummyList
        })
    }
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
        let newTodos = this.state.lastTodo.filter((item) => {
            console.log(item);
            return (item.completed === false)
        })
        this.setState({
            lastTodo: newTodos
        })
    }
    render() {
        let final = [];

        let leftItem = this.state.lastTodo.filter((item) => {
            return item.complete === false
        }).length;

        if (this.state.status === 'all') {
            final = this.state.lastTodo
        }
        else if (this.state.status === 'active') {
            final = this.state.lastTodo.filter((item) => {
                return (item.complete === false)
            })
        }
        else if (this.state.status === 'complete') {
            final = this.state.lastTodo.filter((item) => {
                return (item.complete === true)
            })
        }
        else {
            console.log("ok");
        }
        return (
            <div>
                <Form formTodo={this.formTodo} />
                {final &&
                    final.map((item, index) => {
                        return (
                            <div key={index}>
                                <List
                                    key={index}
                                    list={item}
                                    index={index}
                                    delete={() => { this.deleteRecord(index) }}
                                    check={() => { this.checkValue(index) }}
                                    checkStatus={item.complete}
                                >
                                </List>
                            </div>
                        )
                    })
                }
                {this.state.lastTodo.length === 0 && (<p>No data fount</p>)}
                <Button
                    itemLeft={leftItem}
                    all={this.all}
                    active={this.active}
                    complete={this.complete}
                    clearComplete={this.clearComplete}
                >
                </Button>
            </div>
        )
    }
}
