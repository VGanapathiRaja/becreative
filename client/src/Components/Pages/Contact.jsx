import React, { useState } from "react";
import './Contact.css';
import axios from 'axios';

const Contactus = ()=>{
    const [user, setUsers] =useState({
        fullname: '',
        email: '',
        subject: '',
        messages: ''
});
const [error ,setError] =useState('')

const handleChange =(e)=>{
    setUsers({ ...user, [e.target.name]: e.target.value })
    setError('')
};

const handleSubmit = async (e)=>{  
      e.preventDefault();
    if (!user.fullname || !user.email || !user.subject || !user.messages) {
      setError('All fields are required.');
      return;
    }

    try{
        await axios.post('http://localhost:8080/customer',user)
        alert('data succefully inserted');
        setUsers({fullname:'', email: '',subject: '',messages: ''})
    }
    catch (err) {
      console.error(err);
      alert('Error submitting user');
    }
      console.log(user);
};
    return(
        <section className="contactus">
            <div className="conatctform">
                <div className="left-part">
                    <h1>Send us a message</h1>
                    <p>Lorem ipsum dolor sit amet mi libero, accumsan id, placerat ut, laoreet sapien. Donec odio non nibh. Suspendisse eleifend.</p>
                </div>
                <div className="right-part">
                    <h1>Contact Form for user</h1>
                    <form onClick={handleSubmit}>
                        <div className="inputs fullname">
                            <input 
                                type="text" 
                                name="fullname"
                                value={user.fullname}
                                onChange={handleChange}
                                placeholder="Enter Your Fullname"
                                required /> 

                        <input 
                                type="email" 
                                name="email"
                                value={user.email}
                                onChange={handleChange}
                                placeholder="Enter Your email" /> 
                        </div>
                         

                        <div className="inputs">
                                <input 
                                    type="text" 
                                    name="subject"
                                    value={user.subject}
                                    onChange={handleChange}
                                    placeholder="Enter Your subject" /> 
                        </div>

                        

                        <div className="input">
                            <textarea 
                                name="messages"
                                value={user.messages}
                                onChange={handleChange}
                                placeholder="Enter your Messages"
                                />
                        </div>
                             {error && <p style={{ color: 'red' }}>{error}</p>}
                        {/* <input type="submit" value={'send your message'}/> */}
                        <button >Send your Sessage</button>
                    </form>
                </div>
            </div>
        </section>
    )
};
export default Contactus;