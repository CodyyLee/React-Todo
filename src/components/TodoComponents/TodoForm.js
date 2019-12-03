import React from "react";

import Todo from "./Todo";

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            item: ""
        }
    }

    handleChanges = e => {
        this.setState({
            item: e.target.value
        })
    }

    submitHandler = e => {
        e.preventDefault();
        this.props.addItem(this.state.item);
    }

    render() {
        return(
            <>
                {this.props.item.map((el, index) => {
                return <Todo item={el.item} key={index}/>
                })}
                
                <form onSubmit={this.submitHandler}>
                    <input type="text" name="item" value={this.state.item} onChange={this.handleChanges}/>
                    <button type="submit">Add</button>
                </form>
            </>
        )
    }
}

export default TodoForm;