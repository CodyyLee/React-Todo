import React from "react";

class Todo extends React.Component {

    render() {
        return(
            <div>
                <p>{this.props.item}</p>
            </div>
        )
    }
}

export default Todo;