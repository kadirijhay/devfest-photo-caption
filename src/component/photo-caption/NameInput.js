import React from "react"

function NameInput(props) {
    return (
        <form onSubmit={props.eventHandler.handleText}>
            <label className="steps-container">
                <span className="label">Step 2:</span>
                <input
                    type="text"
                    value={props.fullName}
                    name="fullName"
                    placeholder="Enter your Name"
                    onChange={props.eventHandler.handleInput}
                />
            </label>
            <div className="flexbox steps-container">
                <span className="label">Step 3:</span>
                <button>Generate Photo Caption</button>
            </div>
        </form>
    )
}

export default NameInput