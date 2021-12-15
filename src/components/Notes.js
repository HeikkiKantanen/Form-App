import React from "react";

const Notes = ({ firstname, lastname, phonenumber, role, message }) => {
    return (
        <div className="notes">
            <div className="note">
                <p>
                    {firstname}
                </p>
                <p>
                    {lastname}
                </p> 
                <p>
                    {role}
                </p>
                <p>
                    {phonenumber}
                </p>
                <strong> 
                    {message} 
                </strong>
            </div>
        </div>
    );
};

export default Notes;