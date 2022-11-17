import './NewUserForm.css'
import { useState } from 'react';
import axios from 'axios';

const DeleteUserForm = () => {


    const [id, setId] = useState("");

    

    const idChangeHandler = (event) => {
        setId(event.target.value);
    }




    const deleteSubmitHandler = (event) => {
        event.preventDefault();//avoid page reload to handle this request with javascript
        //Now sign the user in.
        console.log('Form Submission!');
        //sending configuration
        let config = {
            method: "delete",
            url: "http://localhost:8081/api/v3/user/"+id,
            responseType: "json",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            }
        };

        axios(config).then((response) => {
            console.log("delete response: ");
            console.log(response.data);
        }, []);

    };

    return (
        <div className="formdiv component-container">
            <p>Delete User</p>

            <form className="delete-user-form" onSubmit={deleteSubmitHandler}>
                <div className="form-element">
                    <label >Id Number:</label>
                    <input type="text" id="id" name="id" value={id} onChange={idChangeHandler}></input>
                </div>
                

                <div className="form-element">
                    <input type="submit" value="Submit"></input>
                </div>


            </form>


        </div>


    );

}

export default DeleteUserForm;