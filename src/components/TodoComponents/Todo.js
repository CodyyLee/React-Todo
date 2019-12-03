import React from "react";

class Todo extends React.Component {

    toggleSelect = (e) => {
        if(e.target.classList.contains("selected")) {
            e.target.classList.remove("selected")
        }
        else {
            e.target.classList.add("selected");
        }
    }

    render() {
        return(
            <div>
                <p onClick={this.toggleSelect}>{this.props.item}</p>
            </div>
        )
    }
}

export default Todo;