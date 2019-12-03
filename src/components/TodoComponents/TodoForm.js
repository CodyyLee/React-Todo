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
        this.setState({
            item: ""
        })
    }

    clear = () => {
        const selected = document.querySelectorAll(".selected");

        selected.forEach((el) => {
            el.remove();
        })
    }

    render() {
        return(
            <div id="container">
                {this.props.item.map((el, index) => {
                return <Todo item={el.item} key={index}/>
                })}
                
                <form onSubmit={this.submitHandler}>
                    <input type="text" name="item" value={this.state.item} onChange={this.handleChanges}/>
                    <button type="submit">Add</button>
                    <button onClick={this.clear}>Remove Selected</button>
                </form>
            </div>
        )
    }
}

export default TodoForm;