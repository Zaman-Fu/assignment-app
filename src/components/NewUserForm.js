import './NewUserForm.css'
import { useState } from 'react';
import axios from 'axios';

const NewUserForm = () => {


    const [formFirstname, setFirstname] = useState("");
    const [formLastname, setLastname] = useState("");
    const [formPhoneNumber, setPhone] = useState("");
    const [formEmail, setEmail] = useState("");

    const firstnameChangeHandler = (event) => {
        setFirstname(event.target.value);
    }

    const lastnameChangeHandler = (event) => {
        setLastname(event.target.value);
    }

    const phoneChangeHandler = (event) => {
        setPhone(event.target.value);
    }

    const emailChangeHandler = (event) => {
        setEmail(event.target.value);
    }




    const submitHandler = (event) => {
        event.preventDefault();//avoid page reload to handle this request with javascript
        //Now sign the user in.
        console.log('Form Submission!');
        let userData = {
            firstName: formFirstname,
            lastName: formLastname,
            phoneNumber: formPhoneNumber,
            email: formEmail
		}
        //sending configuration
        let config = {
            method: "post",
            url: "http://localhost:8081/api/v3/user",
            responseType: "json",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            data: userData,
        };

        axios(config).then((response) => {
            console.log("Post response: ");
            console.log(response.data);
        },[]);
        
    };

    return (
        <div className="formdiv component-container">
            <p>Register User</p>

            <form className="new-user-form" onSubmit={submitHandler}>
                <div className="form-element">
                    <label >First Name:</label>
                    <input type="text" id="firstname" name="firstname" value={formFirstname} onChange={firstnameChangeHandler}></input>
                </div>
                <div className="form-element">
                    <label >Last Name:</label>
                    <input type="text" id="lastname" name="lastname" value={formLastname} onChange={lastnameChangeHandler}></input>
                </div>
                <div className="form-element">
                    <label >Phone Number:</label>
                    <input type="text" id="phoneNumber" name="phoneNumber" value={formPhoneNumber} onChange={phoneChangeHandler}></input>
                </div>

                <div className="form-element">
                    <label >Email:</label>
                    <input type="text" id="email" name="email" value={formEmail} onChange={emailChangeHandler}></input>
                </div>

                <div className="form-element">
                    <input type="submit" value="Submit"></input>
                </div>


            </form>


        </div>


    );

}

export default NewUserForm;