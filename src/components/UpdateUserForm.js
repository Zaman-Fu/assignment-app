import './NewUserForm.css'
import { useState } from 'react';
import axios from 'axios';

const UpdateUserForm = () => {


    const [updateFirstname, setFirstname] = useState("");
    const [updateLastname, setLastname] = useState("");
    const [updatePhoneNumber, setPhone] = useState("");
    const [updateEmail, setEmail] = useState("");
    const [idToUpdate, setIdToUpdate] = useState("");

    const firstnameChangeHandlerUpdate = (event) => {
        setFirstname(event.target.value);
    }

    const lastnameChangeHandlerUpdate = (event) => {
        setLastname(event.target.value);
    }

    const phoneChangeHandlerUpdate = (event) => {
        setPhone(event.target.value);
    }

    const emailChangeHandlerUpdate = (event) => {
        setEmail(event.target.value);
    }
    const idChangeHandlerUpdate = (event) => {
        setIdToUpdate(event.target.value);
    }




    const updateSubmitHandler = (event) => {
        event.preventDefault();//avoid page reload to handle this request with javascript
        //Now sign the user in.
        console.log('Form Submission!');
        let userData = {
            firstName: updateFirstname,
            lastName: updateLastname,
            phoneNumber: updatePhoneNumber,
            email: updateEmail
        }
        //sending configuration
        let config = {
            method: "put",
            url: "http://localhost:8081/api/v3/user/"+idToUpdate,
            responseType: "json",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            data: userData,
        };

        axios(config).then((response) => {
            console.log("Put response: ");
            console.log(response.data);
        }, []);

    };

    return (
        <div className="formdiv component-container">
            <p>Update User</p>

            <form className="update-user-form" onSubmit={updateSubmitHandler}>

                <div className="form-element">
                    <label >ID to Update:</label>
                    <input type="text" id="idToUpdate" name="id" value={idToUpdate} onChange={idChangeHandlerUpdate}></input>
                </div>
                <div className="form-element">
                    <label >First Name:</label>
                    <input type="text" id="updatefirstname" name="firstname" value={updateFirstname} onChange={firstnameChangeHandlerUpdate}></input>
                </div>
                <div className="form-element">
                    <label >Last Name:</label>
                    <input type="text" id="updatelastname" name="lastname" value={updateLastname} onChange={lastnameChangeHandlerUpdate}></input>
                </div>
                <div className="form-element">
                    <label >Phone Number:</label>
                    <input type="text" id="updatephoneNumber" name="phoneNumber" value={updatePhoneNumber} onChange={phoneChangeHandlerUpdate}></input>
                </div>

                <div className="form-element">
                    <label >Email:</label>
                    <input type="text" id="updateemail" name="email" value={updateEmail} onChange={emailChangeHandlerUpdate}></input>
                </div>

                <div className="form-element">
                    <input type="submit" value="Submit"></input>
                </div>


            </form>


        </div>


    );

}

export default UpdateUserForm;