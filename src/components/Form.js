

const Form = ({ change, submit }) => {
    return (
        <form className="form" onSubmit={submit}>
            <div>
                <label htmlFor="firstname">Firstname</label>
                <input 
                    type="text" 
                    name="firstname" 
                    id="firstname" 
                    required 
                    onChange={change} 
                />
            </div>
            <div>
                <label htmlFor="lastname">Lastname</label>
                <input 
                    type="text" 
                    name="lastname" 
                    id="lastname" 
                    required 
                    onChange={change} 
                />
            </div>
            <div>
                <label htmlFor="phone">Phone number</label>
                <input 
                    type="phone" 
                    name="phonenumber" 
                    id="phone" 
                    required 
                    onChange={change} 
                />
            </div>
            <div>
                <label className="role-header" htmlFor="role">Role</label>
                <select name="role" id="role" onChange={change} required>
                    <option value="">Choose a role...</option>
                    <option value="teacher" defaultValue>Teacher</option>
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
                    onChange={change} 
                ></textarea>
            </div>
            <div className="button-wrapper">
                <button type="submit" id="submit">SEND</button>
            </div>
        </form>
    );
};

export default Form;