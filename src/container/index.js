import React, { useState } from 'react';
import axios from 'axios';
import Userdetails from '../component'

const User = () => {
    const [newUser, setNewUser] = useState(
        {
            first_name: '',
            last_name: '',
            birthdate: '',
            photo: '',
        }
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(newUser);
        const formData = new FormData();
        formData.append('photo', newUser.photo);
        formData.append('birthdate', newUser.birthdate);
        formData.append('first_name', newUser.first_name);
        formData.append('last_name', newUser.last_name);
        console.log(formData);
        axios.post('http://localhost:4000/users/add/', formData)
             .then(res => {
                console.log(res);
             })
             .catch(err => {
                console.log(err);
             });
    }

    const handleChange = (e) => {
        setNewUser({...newUser, [e.target.name]: e.target.value});
    }

    const handlePhoto = (e) => {
        setNewUser({...newUser, photo: e.target.files[0]});
        console.log(newUser);
    }

    return (
        <Userdetails 
            handleSubmit = {handleSubmit} 
            handlePhoto = {handlePhoto} 
            newUser ={newUser}
            handleChange ={handleChange}>
        </Userdetails>
    );
}

export default User;