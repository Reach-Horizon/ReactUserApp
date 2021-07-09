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

    const isValid = () => {
        if(newUser.first_name === "" || newUser.birthdate === ""){
            return false;
        }
        return true;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!isValid()){
            alert('Please Fill all the fields');
        }else{
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
            handleChange ={handleChange}
            isValid = {isValid}>
        </Userdetails>
    );
}

export default User;