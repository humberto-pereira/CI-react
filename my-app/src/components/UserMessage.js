import React from 'react'

function UserMessage(props) {
    return (
        <div>
            {props.isLoggedIn ? (
                    <div>
                        <p>Welcome to the site! Please complete the steps below:</p>
                        <ol>
                            <li>Step 1</li>
                            <li>Step 2</li>
                            <li>Step 3</li>
                        </ol>
                    </div>
                ) : 
                (<p>Please sign in</p>)
            }
        </div>
    )
}

export default UserMessage