import { useState } from 'react';


const User = (props) => {



    return (

        <div className="user">
            <div className="user-field">{props.user.firstName }</div>
            <div className="user-field">{props.user.lastName}</div>
            <div className="user-field">{props.user.phoneNumber}</div>
            <div className="user-field">{props.user.email}</div>
            
        </div>
        )

}


export default User;