import React from 'react';
import { TextField, Button, Input } from '@material-ui/core';

function userDetails({handleSubmit, handlePhoto, newUser, handleChange}) {
    return (
        <form onSubmit={handleSubmit} encType='multipart/form-data'>
        <TextField 
            type="text"
            placeholder="FirstName"
            name="first_name"
            value={newUser.first_name}
            onChange={handleChange}
        />

        <TextField 
            type="text"
            placeholder="Lastname"
            name="last_name"
            value={newUser.last_name}
            onChange={handleChange}
        />

        <TextField 
            type="date"
            name="birthdate"
            value={newUser.date}
            onChange={handleChange}
        />
        
        <Input 
            type="file" 
            accept=".png, .jpg, .jpeg"
            name="photo"
            onChange={handlePhoto}
        />
        <Button variant="contained" type = "submit">Submit</Button>
    </form>
    )
}

export default userDetails;
