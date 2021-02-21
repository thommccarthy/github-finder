import React, { Component } from 'react'


//forms in react generally have state on input
class Search extends Component {

        state = {
        text: '' 
        };

//updates the state of text with onChange method
onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
};

//use arrow functions inside react objects
//"this" keyword responds differently
onSubmit = (e) => {
    //prevents page from reloading on submit
    e.preventDefault();
 this.props.searchUsers(this.state.text);
 this.setState({text: ''});
};

    render() {
        return (
            <div>
               <form onSubmit={this.onSubmit} className="form">
                <input type="text" name="text" placeholder="Search Users..." value={this.state.text} onChange={this.onChange}/>
                <input type="submit" value="Search" className="btn btn-dark btn-block"/>
               </form> 
            </div>
        )
    }
}

export default Search
