import React from "react";
class ClassInput extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: 'ok'}
        
    }


    setValue(newElement) {
        this.setState({value: newElement})
    }

    render() {
        return(
            <div>
                <h3>{this.state.value}</h3>
                <input
                    type="text"
                    value={this.state.value}
                    onChange={event => this.setValue(event.target.value)}
                ></input>
            </div>
        )
    }
}

export default ClassInput