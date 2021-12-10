import React from "react";

const View = ({ firstname, lastname, phonenumber, role, message }
) => {
    return (
        <div className="body">
            <h2>Your Inputs</h2>
            <div className="lines">
                <div className="view">
                        <p>Firstname: <span>{firstname}</span></p>
                        <p>Lastname: <span>{lastname}</span></p>
                        <p>Phone: <span>{phonenumber}</span></p>
                        <p>Role: <span>{role}</span></p>
                        <p>Message:<span>{message}</span></p>
                </div>
            </div>
        </div>
    );
};

export default View;