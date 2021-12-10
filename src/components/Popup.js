import React from "react";


const closeHandler = () => {
    window.location.reload();
};

const Popup = ({ firstname, lastname, phonenumber, role,  message, post }) => {
    return (
        <div className="Popup">
            <div className="popup-wrapper">
                    <h3>Your Inputs</h3>
                <div className="popup-content">
                    <p>
                    First name: {firstname}
                    </p>
                    <p>
                    Last name: {lastname}
                    </p>
                    <p>
                    Phone number: {phonenumber}
                    </p>
                    <p>
                    Role: {role}
                    </p>
                    <p>
                    Message: {message}
                    </p>
                </div>
                <div className="buttons">
                    <button onClick={post}>Yes I'm sure I want to submit</button>
                    <button onClick={closeHandler}>No I don't want to submit</button>
                </div>
            </div>
        </div>
    );
};

export default Popup;