import React from "react";

class StatefulGreetingWithCallback extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            introduction: 'Hello!',
            buttonText: 'Exit',
            counter: 0,
        }
    }

handleClick() {
    this.setState((prevState, prevProps) =>{
        console.log('previous state', prevState);
        console.log('previous props', prevProps);
        return {
            introduction: prevState.introduction === 'Hello!' ? 'Goodbye!' : 'Hello!',
            buttonText: prevState.buttonText === 'Exit' ? 'Enter' : 'Exit',
        }
    });
}

increment() {
    this.setState({
        counter: this.state.counter + 1,
    });
}


render() {
    return (
        <div>
            <h1>{this.state.introduction} {this.props.greeting}</h1>
            <button button onClick={() => this.handleClick()}>
                {this.state.buttonText}
            </button>
            <button button onClick={() => this.increment()}>
                increment
            </button>
            <p>you clicked {this.state.counter} times</p>
        </div>  
        )
    }
}




export default StatefulGreetingWithCallback;

