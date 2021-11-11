import React from "react";

const View = (props) => {
    return (
        <div className="body">
            <h2>Your Inputs</h2>
            <div className="lines">
                <div className="view">
                        <p>Firstname: <span>{props.first}</span></p>
                        <p>Lastname: <span>{props.last}</span></p>
                        <p>Phone: <span>{props.phone}</span></p>
                        <p>Role: <span>{props.role}</span></p>
                        <p>Message:<span>{props.message}</span></p>
                </div>
            </div>
        </div>
    );
};

export default View;