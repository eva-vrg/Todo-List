import React, {Component} from "react";

class TodoList extends Component {

    constructor(){
        super();
        this.state = {
            userInput: '',
            items: [],
        };
    }

    onChange(event){
        this.setState({
            userInput: event.target.value
        });
    }

    addTodo(event){
        event.preventDefault();
        this.setState({
            userInput:'',
            items: [...this.state.items, this.state.userInput]
        });

    }

    deleteTodo(event) {
        event.preventDefault();
        const array = this.state.items;
        const index = array.indexOf(event.target.value);
        array.splice(index, 1);
        this.setState({
            items: array
        });
    }




    renderTodos(){
        return this.state.items.map((item) => {
            return (
                <div key={item}>
                    {item} | <button onClick={this.deleteTodo.bind(this)}>X</button>
                </div>
            );
        });
    }





    render(){
        return(
            <div>
                <h1 align="center">Todo list</h1>
                <form align="center">
                    <input 
                        value={this.state.userInput} 
                        type="text" 
                        placeholder="Enter here"
                        onChange={this.onChange.bind(this)}
                    />
                    <button  onClick={this.addTodo.bind(this)}>Add</button>
                </form>
                
                <div align="center">
                    {this.renderTodos()}
                </div>
            </div>
        );
    }
}

export default TodoList
