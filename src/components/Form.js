

const Form = (props) => {
    return (
        <form className="form" onSubmit={props.showPopupHandler}>
            <div>
                <label htmlFor="firstname">Firstname</label>
                <input 
                    type="text" 
                    name="firstname" 
                    id="firstname" 
                    required 
                    onChange={props.change} 
                />
            </div>
            <div>
                <label htmlFor="lastname">Lastname</label>
                <input 
                    type="text" 
                    name="lastname" 
                    id="lastname" 
                    required 
                    onChange={props.change} 
                />
            </div>
            <div>
                <label htmlFor="phone">Phone number</label>
                <input 
                    type="phone" 
                    name="phone" 
                    id="phone" 
                    required 
                    onChange={props.change} 
                />
            </div>
            <div>
                <label htmlFor="role">Role</label>
                <select name="role" id="role" onChange={props.change}>
                    <option value="teacher">Teacher</option>
                    <option value="student">Student</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <div>
                <label htmlFor="message">Message</label>
                <textarea
                    name="message" 
                    id="message" 
                    required 
                    onChange={props.change} 
                ></textarea>
            </div>
            <div className="button-wrapper">
                <button type="submit" id="submit">SEND</button>
            </div>
        </form>
    );
};

export default Form;