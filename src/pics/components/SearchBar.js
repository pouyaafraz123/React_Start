import React from "react";
import "./SearchBar.css"

class SearchBar extends React.Component {
    state = {term: ''};

    onFormSubmit(event) {
        event.preventDefault();
        this.props.onSubmit(this.state.term);

    }

    render() {
        return (
            <div className={"ui segment"}>
                <form className={"search ui form"} onSubmit={e => this.onFormSubmit(e)}>
                    <div className="ui fluid icon input">
                        <input type="text" placeholder="Search ..." value={this.state.term}
                               onChange={e => this.setState({term: e.target.value})}/>
                        <i className="search icon"/>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;