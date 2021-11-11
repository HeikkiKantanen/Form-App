import React from "react";


const closeHandler = () => {
    window.location.reload();
};

const Popup = (props) => {
    return (
        <div className="Popup">
            <div className="popup-wrapper">
                    <h3>Your Inputs</h3>
                <div className="popup-content">
                    <p>
                    First name: {props.first}
                    </p>
                    <p>
                    Last name: {props.last}
                    </p>
                    <p>
                    Phone number: {props.phone}
                    </p>
                    <p>
                    Role: {props.role}
                    </p>
                    <p>
                    Message: {props.message}
                    </p>
                </div>
                <div className="buttons">
                    <button onClick={closeHandler}>Yes I'm sure I want to submit</button>
                    <button onClick={closeHandler}>No I don't want to submit</button>
                </div>
            </div>
        </div>
    );
};

export default Popup;