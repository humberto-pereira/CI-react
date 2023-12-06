import React, { Component } from 'react'

export class ConditionalRenderingClass extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            isLoaded: true,
            isLoggedIn: true,
        }
    }
    render() {
        return (
            <div>
                <h1>{this.state.isLoaded ? 'Data Loaded' : 'Loading...'}</h1>
                {this.state.isLoggedIn ? (
                    <div>
                        <p>Welcome to the site! Please complete the steps below:</p>
                        <ol>
                            <li>Step 1</li>
                            <li>Step 2</li>
                            <li>Step 3</li>
                        </ol>
                    </div>
                ) : 
                (<p>Please sign in</p>)}
            </div>
        )
    }
}

export default ConditionalRenderingClass