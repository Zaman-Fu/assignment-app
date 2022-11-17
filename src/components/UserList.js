import { useState } from 'react';
import axios from 'axios';
import User from './User';


const UserList = () => {

    const [users, setUsers] = useState([]);





    const getUserHandler = (event) => {
        event.preventDefault();//avoid page reload to handle this request with javascript
        //Now sign the user in.
        console.log('Get Users');

        //sending configuration
        let config = {
            method: "get",
            url: "http://localhost:8081/api/v3/users",
            responseType: "json",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            }
        };

        axios(config).then((response) => {
            console.log("Get Response");
            
            setUsers(response.data);
            users.map((user) => {console.log(user) });
        }, []);

    };






    return (
        <div>
            <button onClick={getUserHandler}>Get Users</button>
            <div className="user-container">
                {users.map((singleUser) => {
                    (
                        <User user={singleUser}></User>
                    )
                }

                   )
                }


            </div>


        </div>
    );
}

export default UserList;